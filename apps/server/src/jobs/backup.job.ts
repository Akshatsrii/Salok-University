import { Queue, Worker, QueueScheduler } from 'bullmq';
import { exec } from 'child_process';
import util from 'util';
import { logger } from '../utils/logger';
import { env } from '../config/env';

const execPromise = util.promisify(exec);

const connection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};

export const backupQueue = new Queue('backup', { connection });

// Execute mongodump
const performBackup = async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = `/tmp/mongodb_backup_${timestamp}`;
  const mongoUri = env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined');
  }

  logger.info(`Starting MongoDB backup to ${backupPath}...`);
  
  try {
    const { stdout, stderr } = await execPromise(`mongodump --uri="${mongoUri}" --out="${backupPath}"`);
    logger.info('MongoDB backup completed successfully', { stdout });
    
    // In a real scenario, you would upload this folder to S3 or Google Cloud Storage here
    // await uploadToS3(backupPath);
    
    // Then clean up local files
    // await execPromise(`rm -rf ${backupPath}`);
    
  } catch (error) {
    logger.error('MongoDB backup failed', { error });
    throw error;
  }
};

export const backupWorker = new Worker('backup', async (job) => {
  if (job.name === 'daily-mongo-backup') {
    await performBackup();
  }
}, { connection });

backupWorker.on('completed', (job) => {
  logger.info(`Backup job ${job.id} has completed!`);
});

backupWorker.on('failed', (job, err) => {
  logger.error(`Backup job ${job?.id} has failed with ${err.message}`);
});

// Schedule the daily backup at 2 AM
export const scheduleBackups = async () => {
  await backupQueue.add('daily-mongo-backup', {}, {
    repeat: {
      pattern: '0 2 * * *', // Every day at 2:00 AM
    }
  });
  logger.info('Scheduled daily MongoDB backups');
};
