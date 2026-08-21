import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "../styles/chatbot.css";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { type: "user", text: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are an AI assistant for a university management portal. Answer professionally.\n\nUser: ${message}`,
              },
            ],
          },
        ],
        config: {
          temperature: 0.7,
        },
      });

      const botMessage = {
        type: "bot",
        text: result.text || "No response received.",
      };

      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setChat((prev) => [
        ...prev,
        { type: "bot", text: "⚠️ Unable to connect to AI." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        🤖
      </div>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            AI Assistant
            <span onClick={() => setIsOpen(false)} className="close-btn">
              ✖
            </span>
          </div>

          <div className="chatbot-body">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  msg.type === "user" ? "chatbot-user" : "chatbot-bot"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chatbot-message chatbot-bot">
                Typing...
              </div>
            )}
          </div>

          <div className="chatbot-input-area">
            <input
              className="chatbot-input"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="chatbot-button"
              onClick={sendMessage}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
