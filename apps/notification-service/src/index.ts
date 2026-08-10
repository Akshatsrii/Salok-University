import { EmailSender } from '../email/sender';
import { SMSSender } from '../sms/sender';
import { WhatsAppSender } from '../whatsapp/sender';
import { PushNotificationSender } from '../push/sender';
import { TemplateCompiler } from '../templates/compiler';
import { QueueProcessor } from '../workers/queueProcessor';

console.log("Starting Notification Service...");

export const notificationService = {
  email: new EmailSender(),
  sms: new SMSSender(),
  whatsapp: new WhatsAppSender(),
  push: new PushNotificationSender(),
  templates: new TemplateCompiler(),
};

// Start background worker
const worker = new QueueProcessor();
worker.startProcessing();

console.log("Notification Service running and listening for events.");
