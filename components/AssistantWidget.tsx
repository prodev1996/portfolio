"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot } from "lucide-react";

type ChatAction = {
  label: string;
  href: string;
  external?: boolean;
};

type AssistantPrompt = {
  question: string;
  answer: string;
  highlights?: string[];
  actions?: ChatAction[];
};

const assistantTabs = {
  Work: {
    question: "show me your work",
    answer:
      "My work shows practical delivery across business applications, Microsoft 365 support, SQL-aware troubleshooting, live client websites, documentation, and post-launch support.",
    highlights: ["Business apps", "SQL-aware", "Post-launch support"],
  },
  "About me": {
    question: "tell me more about yourself",
    answer:
      "I am an application systems and support professional with experience in business applications, Microsoft 365, SQL/MySQL, documentation, troubleshooting, and structured operational support.",
    highlights: ["Business apps", "SQL/MySQL", "Application support"],
  },
  Skills: {
    question: "what skills do you bring?",
    answer:
      "My strongest mix is business applications support, Microsoft 365, SQL/MySQL, troubleshooting, documentation, reporting support, and practical delivery discipline.",
    highlights: ["Microsoft 365", "SQL/MySQL", "Troubleshooting"],
  },
  Contact: {
    question: "how can I contact you?",
    answer:
      "Email me, connect on LinkedIn, or use the direct message form. I am open to application systems, Microsoft 365, SQL support, business applications, and data-aware support roles.",
    actions: [
      { label: "Email", href: "mailto:bhandarirajiv25@gmail.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rajiv-bhandari25/",
        external: true,
      },
      { label: "Direct message form", href: "#contact" },
    ],
  },
} satisfies Record<string, AssistantPrompt>;

type AssistantTab = keyof typeof assistantTabs;
type ChatMessage = {
  role: "user" | "assistant";
  text: string;
  highlights?: string[];
  actions?: ChatAction[];
};

const initialChatMessages: ChatMessage[] = [
  {
    role: "assistant",
    text: "Hi, I am Rajiv's portfolio guide. Ask me about his application systems background, SQL-ready support skills, live projects, or contact details.",
    highlights: ["Systems", "Projects", "Skills", "Contact"],
  },
];

function getAssistantResponse(question: string): ChatMessage {
  const lowerQuestion = question.toLowerCase();

  if (
    lowerQuestion.includes("hello") ||
    lowerQuestion.includes("hi") ||
    lowerQuestion.includes("hey")
  ) {
    return {
      role: "assistant",
      text: "Hi there! Welcome to Rajiv's portfolio. How can I assist you today?",
    };
  }

  if (
    lowerQuestion.includes("how are you") ||
    lowerQuestion.includes("how r u") ||
    lowerQuestion.includes("how you")
  ) {
    return {
      role: "assistant",
      text: "I'm here to help you explore Rajiv's work. Ask me about projects, skills, experience, or contact details.",
    };
  }

  if (
    lowerQuestion.includes("work") ||
    lowerQuestion.includes("project") ||
    lowerQuestion.includes("website") ||
    lowerQuestion.includes("portfolio")
  ) {
    return {
      role: "assistant",
      text: assistantTabs.Work.answer,
      highlights: assistantTabs.Work.highlights,
    };
  }

  if (
    lowerQuestion.includes("skill") ||
    lowerQuestion.includes("tech") ||
    lowerQuestion.includes("tool") ||
    lowerQuestion.includes("stack")
  ) {
    return {
      role: "assistant",
      text: assistantTabs.Skills.answer,
      highlights: assistantTabs.Skills.highlights,
    };
  }

  if (
    lowerQuestion.includes("contact") ||
    lowerQuestion.includes("email") ||
    lowerQuestion.includes("linkedin") ||
    lowerQuestion.includes("call") ||
    lowerQuestion.includes("message")
  ) {
    return {
      role: "assistant",
      text: assistantTabs.Contact.answer,
      actions: assistantTabs.Contact.actions,
    };
  }

  if (
    lowerQuestion.includes("experience") ||
    lowerQuestion.includes("job") ||
    lowerQuestion.includes("role") ||
    lowerQuestion.includes("background")
  ) {
    return {
      role: "assistant",
      text: "My background combines application systems support, Microsoft 365, database-backed development exposure, structured reporting, and data quality habits that support SQL-focused work.",
      highlights: ["Application systems", "Database work", "Reporting"],
    };
  }

  if (
    lowerQuestion.includes("data") ||
    lowerQuestion.includes("sql") ||
    lowerQuestion.includes("power bi") ||
    lowerQuestion.includes("report")
  ) {
    return {
      role: "assistant",
      text: "I bring SQL/MySQL foundations, data validation habits, reporting support exposure, and growing knowledge of SQL Server, T-SQL, data migration, and verification-style work.",
      highlights: ["SQL/MySQL", "Reporting", "Data migration"],
    };
  }

  return {
    role: "assistant",
    text: assistantTabs["About me"].answer,
    highlights: assistantTabs["About me"].highlights,
  };
}

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<AssistantTab | null>(null);
  const [assistantInput, setAssistantInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(initialChatMessages);
  const chatViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = chatViewportRef.current;
    if (!viewport) return;
    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: "smooth",
    });
  }, [chatMessages, isOpen]);

  const askAssistant = (tab: AssistantTab) => {
    const reply: AssistantPrompt = assistantTabs[tab];
    setActiveTab(tab);
    setChatMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: reply.question },
      {
        role: "assistant",
        text: reply.answer,
        highlights: reply.highlights,
        actions: reply.actions,
      },
    ]);
  };

  const handleAssistantSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = assistantInput.trim();
    if (!question) return;

    const response = getAssistantResponse(question);
    setChatMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: question },
      response,
    ]);
    setAssistantInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[min(380px,calc(100vw-1rem))] overflow-hidden rounded-[24px] border border-white/10 bg-[#050505]/88 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-3xl sm:mb-4"
          >
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#6f67df] to-[#c55b9e] shadow-[0_0_12px_rgba(111,103,223,0.24)]">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Portfolio Assistant</h3>
                  <p className="text-[10px] text-[#a1a1aa] uppercase tracking-wider">Online</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-[#a1a1aa] transition hover:bg-white/10 hover:text-white"
                aria-label="Close portfolio assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              ref={chatViewportRef}
              className="assistant-scroll max-h-[350px] min-h-[250px] space-y-4 overflow-y-auto p-4"
            >
              {chatMessages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}-${message.text}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] text-sm leading-relaxed ${
                      message.role === "user"
                        ? "rounded-2xl rounded-tr-sm bg-[#6f67df] px-4 py-2.5 text-white"
                        : "rounded-2xl rounded-tl-sm bg-white/5 border border-white/5 px-4 py-3 text-[#d8d1e6]"
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.highlights?.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {message.highlights.map((item) => (
                          <span key={item} className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] font-semibold text-[#c9c1d8]">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {message.actions?.length ? (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {message.actions.map((action) => (
                          <a
                            key={action.label}
                            href={action.href}
                            target={action.external ? "_blank" : undefined}
                            rel={action.external ? "noopener noreferrer" : undefined}
                            className="rounded-full border border-[#6f67df]/35 bg-[#6f67df]/10 px-2.5 py-1 text-[11px] font-semibold text-[#d9d2ff] transition hover:bg-[#6f67df]/18 hover:text-white"
                          >
                            {action.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/5 bg-black/20 p-3">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {(Object.keys(assistantTabs) as AssistantTab[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => askAssistant(item)}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                      activeTab === item
                        ? "border-[#6f67df]/35 bg-[#6f67df]/16 text-white"
                        : "border-white/5 bg-transparent text-[#a1a1aa] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <form
                onSubmit={handleAssistantSubmit}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 transition-colors focus-within:border-[#6f67df]/45"
              >
                <input
                  value={assistantInput}
                  onChange={(event) => setAssistantInput(event.target.value)}
                  className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#71717a]"
                  placeholder="Ask me anything..."
                  aria-label="Ask the portfolio assistant"
                />
                <button
                  type="submit"
                  disabled={!assistantInput.trim()}
                  className="rounded-full bg-[#6f67df] p-1.5 text-white transition hover:bg-[#847ce8] disabled:opacity-50"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6f67df] to-[#c55b9e] shadow-[0_8px_26px_rgba(111,103,223,0.3)] transition-shadow hover:shadow-[0_12px_34px_rgba(111,103,223,0.4)] sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-md transition group-hover:opacity-30" />
        {isOpen ? (
          <X className="relative h-5 w-5 text-white sm:h-6 sm:w-6" />
        ) : (
          <MessageCircle className="relative h-5 w-5 text-white sm:h-6 sm:w-6" />
        )}
      </motion.button>
    </div>
  );
}
