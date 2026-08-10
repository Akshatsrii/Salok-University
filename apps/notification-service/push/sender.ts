export class PushNotificationSender {
  /**
   * Sends a web/mobile push notification using Firebase Cloud Messaging (Stub).
   */
  async sendPushNotification(fcmToken: string, title: string, body: string): Promise<boolean> {
    console.log(`[Push] Sending to token ${fcmToken}... Title: ${title}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 150));
    return true;
  }
}
