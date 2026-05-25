"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, Loader2 } from "lucide-react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  time: string;
};

const now = () =>
  new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

const BOT_INTRO: Message[] = [
  {
    id: 0,
    from: "bot",
    text: "Hello — welcome to **Mughal House Manpower Consultancy**. How can we help?",
    time: now(),
  },
  {
    id: 1,
    from: "bot",
    text: "Please share your name below and a member of our team will be with you shortly.",
    time: now(),
  },
];

function renderText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(BOT_INTRO);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [step, setStep] = useState<"info" | "chat">("info");
  const [sending, setSending] = useState(false);
  const msgIdRef = useRef(10);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const addMessage = (msg: Omit<Message, "id">) => {
    const id = ++msgIdRef.current;
    setMessages((prev) => [...prev, { ...msg, id }]);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addMessage({ from: "user", text: `Hi, I'm **${name}**${email ? ` (${email})` : ""}.`, time: now() });
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: `Nice to meet you, **${name}**. What would you like to know? Ask about jobs, recruitment services or visa processing.`,
        time: now(),
      });
      setStep("chat");
      setTimeout(() => (inputRef.current as HTMLTextAreaElement | null)?.focus(), 100);
    }, 500);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    setInput("");
    addMessage({ from: "user", text, time: now() });
    setSending(true);

    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text }),
      });
      setTimeout(() => {
        addMessage({
          from: "bot",
          text: "Message received. Our team will reply soon. For urgent matters call **+91 7811-965514**.",
          time: now(),
        });
        setSending(false);
      }, 700);
    } catch {
      setTimeout(() => {
        addMessage({ from: "bot", text: "Sorry, something went wrong. Please try again.", time: now() });
        setSending(false);
      }, 700);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-80 flex flex-col items-end gap-3">

      {/* Chat window */}
      {open && (
        <div
          className="w-[min(360px,calc(100vw-2.5rem))] flex flex-col bg-paper border border-rule overflow-hidden"
          style={{
            height: "min(520px, calc(100svh - 100px))",
            boxShadow: "0 24px 60px -20px rgba(15,30,61,0.35)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0 border-b border-rule">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 bg-ink flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-paper" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold-500 border-2 border-paper" />
              </div>
              <div>
                <p className="font-display font-semibold text-ink text-[14px] leading-tight">
                  Mughal House Support
                </p>
                <p className="text-ink-muted text-[11px] mt-0.5">
                  Online &middot; Usually replies in minutes
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-7 h-7 flex items-center justify-center text-ink-soft hover:text-ink"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ background: "#f6f2e8" }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}>
                {msg.from === "bot" && (
                  <div className="w-7 h-7 bg-paper border border-rule flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-3.5 h-3.5 text-ink-soft" />
                  </div>
                )}
                <div className={`max-w-[78%] flex flex-col gap-1 ${msg.from === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`px-3.5 py-2.5 text-[13.5px] leading-[1.55] ${
                      msg.from === "user"
                        ? "bg-ink text-paper"
                        : "bg-paper border border-rule text-ink"
                    }`}
                    dangerouslySetInnerHTML={{ __html: renderText(msg.text) }}
                  />
                  <span className="text-ink-faint text-[10px] px-1">{msg.time}</span>
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-paper border border-rule flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5 text-ink-soft" />
                </div>
                <div className="px-4 py-3 bg-paper border border-rule flex gap-1.5 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-ink-muted animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div className="shrink-0 border-t border-rule p-3 bg-paper">
            {step === "info" ? (
              <form onSubmit={handleInfoSubmit} className="flex flex-col gap-2">
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  required
                  placeholder="Your name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-paper border border-rule px-3 py-2 text-ink text-[13px] placeholder:text-ink-faint focus:outline-none focus:border-ink transition-colors duration-150"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-paper border border-rule px-3 py-2 text-ink text-[13px] placeholder:text-ink-faint focus:outline-none focus:border-ink transition-colors duration-150"
                />
                <button type="submit" className="btn btn-primary justify-center w-full">
                  Start chat
                </button>
              </form>
            ) : (
              <form onSubmit={handleSend} className="flex gap-2 items-end">
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  rows={1}
                  placeholder="Type a message…"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(e); }
                  }}
                  disabled={sending}
                  className="flex-1 bg-paper border border-rule px-3 py-2 text-ink text-[13px] placeholder:text-ink-faint focus:outline-none focus:border-ink transition-colors duration-150 resize-none overflow-hidden disabled:opacity-50"
                  style={{ minHeight: "40px", maxHeight: "100px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || sending}
                  aria-label="Send message"
                  className="w-10 h-10 bg-ink text-paper flex items-center justify-center hover:bg-navy-600 transition-colors duration-150 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* WhatsApp */}
      <a
        href="https://wa.me/917811965514"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-11 h-11 flex items-center justify-center bg-paper border border-rule hover:border-ink transition-colors duration-150"
        style={{ color: "#25D366", boxShadow: "0 6px 18px -8px rgba(15,30,61,0.25)" }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/+917811965514"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on Telegram"
        className="w-11 h-11 flex items-center justify-center bg-paper border border-rule hover:border-ink transition-colors duration-150"
        style={{ color: "#2AABEE", boxShadow: "0 6px 18px -8px rgba(15,30,61,0.25)" }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      </a>

      {/* Chat toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="relative w-12 h-12 flex items-center justify-center bg-ink text-paper hover:bg-navy-600 transition-colors duration-150"
        style={{ boxShadow: "0 8px 24px -8px rgba(15,30,61,0.45)" }}
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        {!open && (
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-500 border-2 border-paper" aria-label="Online" />
        )}
      </button>
    </div>
  );
}
