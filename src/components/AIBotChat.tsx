import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const EXAMPLES = [
  {
    q: 'How do I sell my license?',
    a: "To sell your license, click 'Get a Free Valuation' and fill out the form. Our team will guide you through the process!"
  },
  {
    q: 'What types of licenses can I sell?',
    a: "We accept Microsoft, Adobe, Oracle, SAP, and many other software licenses. If you're unsure, just ask!"
  },
  {
    q: 'How long does payment take?',
    a: "Once your license is verified and the offer is accepted, payment is typically processed within 2 business days."
  },
];

const FALLBACK = "I'm here to help! For detailed queries, please contact us via the form.";

const AIBotChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm SoftSell's AI assistant. How can I help you today?" }
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text }]);
    setInput('');
    setTimeout(() => {
      const found = EXAMPLES.find(e =>
        text.toLowerCase().includes(e.q.toLowerCase())
      );
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: found ? found.a : FALLBACK }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary/90 transition"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        style={{ display: open ? 'none' : 'block' }}
      >
        <MessageCircle className="h-7 w-7" />
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-primary text-white">
            <span className="font-semibold">SoftSell AI Chat</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:text-accent">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-50 dark:bg-gray-900" style={{ minHeight: 220, maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-xl px-3 py-2 max-w-[80%] text-sm shadow ${msg.from === 'user' ? 'bg-primary text-white dark:bg-primary/90' : 'bg-white text-gray-800 border dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {/* Example questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {EXAMPLES.map((ex, i) => (
                <button
                  key={i}
                  className="bg-gray-200 hover:bg-primary/10 text-gray-700 rounded-full px-3 py-1 text-xs transition"
                  onClick={() => sendMessage(ex.q)}
                >
                  {ex.q}
                </button>
              ))}
            </div>
          )}
          {/* Input */}
          <form
            className="flex items-center gap-2 border-t px-3 py-2 bg-white"
            onSubmit={e => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              className="flex-1 rounded-full px-3 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 dark:border-gray-700"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus={open}
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-full p-2 hover:bg-primary/90 transition"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIBotChat; 