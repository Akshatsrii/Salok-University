import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I'm Salok AI Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
          contents: [
            {
              role: "user",
              parts: [{ text: userInput }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            key: import.meta.env.VITE_GEMINI_API_KEY,
          },
        }
      );

      const botText =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't respond.";

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botText },
      ]);
    } catch (error) {
      console.error("Gemini Error:", error.response?.data || error.message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠ Error connecting to AI. Check API key settings.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 
                   text-black p-4 rounded-full shadow-lg z-50 transition"
      >
        {isOpen ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-black border border-gray-800 
                        rounded-xl shadow-2xl flex flex-col z-50">

          {/* Header */}
          <div className="bg-orange-500 text-black p-3 rounded-t-xl font-semibold">
            Salok AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-96">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-orange-500 text-black ml-auto"
                    : "bg-gray-800 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="text-gray-400 text-sm animate-pulse">
                AI is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 p-2 bg-black text-white outline-none"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-orange-500 px-4 text-black disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
