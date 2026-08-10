export class SMSSender {
  /**
   * Sends an SMS using Twilio (Stub).
   */
  async sendSMS(phoneNumber: string, message: string): Promise<boolean> {
    console.log(`[SMS] Sending to ${phoneNumber}: ${message}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return true;
  }
}
