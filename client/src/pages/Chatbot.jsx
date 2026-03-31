import React, { useEffect, useRef, useState } from "react";

const Chatbot = () => {
    
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
  // ✅ Initial bot message directly (no useEffect needed)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi, I'm a friendly chatbot that lets you interact with this portfolio and CV. How can I help?",
    },
  ]);

  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // ✅ Add user message
  const addUserMessage = (text) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
  };

  // ✅ Add bot message
  const addBotMessage = (text) => {
    setMessages((prev) => [...prev, { type: "bot", text }]);
  };

  // ✅ Generate response (same logic as your JS :contentReference[oaicite:0]{index=0})
  const generateResponse = (msg) => {
    const message = msg.toLowerCase();

    if (message.includes("resume") || message.includes("cv")) {
      return "You can download my resume using the 'Download Resume' button above. Would you like me to highlight any specific part?";
    }

    if (message.includes("skill") || message.includes("expert")) {
      return "My strongest skills include HTML, CSS, JavaScript, React, Node.js, and MongoDB.";
    }

    if (message.includes("experience") || message.includes("work")) {
      return "I’ve built full-stack projects using MERN stack and PHP, and contributed on GitHub.";
    }

    if (message.includes("education") || message.includes("degree")) {
      return "I completed my BCA from V.S. Patel College in 2025.";
    }

    if (message.includes("project")) {
      return "I’ve built projects like eCommerce apps, portfolios, and real-time chat apps.";
    }

    if (message.includes("contact") || message.includes("hire")) {
      return "You can contact me via email or LinkedIn from this portfolio.";
    }

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello there! How can I help you learn more about me?";
    }

    return "Ask me about my skills, projects, or experience";
  };

  // ✅ Send message
  const sendMessage = () => {
    if (!input.trim()) return;

    setHasUserInteracted(true); // ✅ user interaction started

    const userMsg = input;
    addUserMessage(userMsg);
    setInput("");

    addBotMessage("Typing...");

    setTimeout(() => {
      setMessages((prev) => prev.slice(0, -1));
      addBotMessage(generateResponse(userMsg));
    }, 1000);
  };

  // ✅ Auto scroll
  useEffect(() => {
    if (hasUserInteracted) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <section className="chatbot container">
      <h2>
        <small>Talk to me</small>
        Chatbot
      </h2>

      <div className="chatbot-blue">
        {/* LEFT SIDE */}
        <div className="chat-info">
          <h3>MYSELF AI Chatbot</h3>
          <p>
            I've created a chatbot that’s familiar with my skills, work history,
            and resume. Feel free to interact with it.
          </p>

          
        </div>

        {/* RIGHT SIDE */}
        <div className="chat-box">
          <div className="scroll-area">
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>
                  <span className={`avatar ${msg.type}`}>
                    {msg.type === "bot" ? "AI" : "User"}
                  </span>

                  <div
                    className={`message ${
                      msg.text === "Typing..." ? "typing" : ""
                    }`}
                  >
                    {msg.text}
                  </div>
                </li>
              ))}
              <div ref={scrollRef}></div>
            </ul>
          </div>

          <div className="chat-message">
            <input
              type="text"
              placeholder="Hey Niral, what skills are you best at?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button className="button black" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
