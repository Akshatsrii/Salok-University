import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  
  if (!email || !message) {
    return res.status(400).json({ success: false, message: "Email and message are required" });
  }

  // In a real application, you would save this to the DB or send an email.
  console.log(`[Contact Form] Message from ${firstName} ${lastName} (${email}): ${message}`);

  return res.status(200).json({ success: true, message: "Message received successfully." });
});

export default router;
