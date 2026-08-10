export class EmailSender {
  /**
   * Sends an email using SMTP or SendGrid (Stub).
   */
  async sendEmail(to: string, subject: string, htmlBody: string): Promise<boolean> {
    console.log(`[Email] Sending email to ${to}`);
    console.log(`[Email] Subject: ${subject}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return true;
  }
}
