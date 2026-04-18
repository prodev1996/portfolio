"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Download,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const assistantTabs = {
  Work: {
    question: "show me your work",
    answer:
      "I have delivered and maintained live client websites, including deployment, DNS, SSL, content updates, and post-launch support.",
    highlights: ["Glide Education", "Prime Roof Care", "Deployment + support"],
  },
  "About me": {
    question: "tell me more about yourself",
    answer:
      "I am an Adelaide-based application support professional focused on Microsoft 365, business systems, access support, documentation, SQL, and Power BI.",
    highlights: ["Adelaide based", "Application support", "Data direction"],
  },
  Skills: {
    question: "what skills do you bring?",
    answer:
      "My strongest mix is Microsoft 365 support, systems troubleshooting, reporting, and practical web delivery.",
    highlights: ["Microsoft 365", "SQL + Power BI", "React + Next.js"],
  },
  Contact: {
    question: "how can I contact you?",
    answer:
      "You can email me, connect on LinkedIn, or use the message form below. I am open to application support, business systems, and reporting-focused roles in Adelaide.",
    highlights: ["Email", "LinkedIn", "Direct message form"],
  },
};

type AssistantTab = keyof typeof assistantTabs;
type ChatMessage = {
  role: "user" | "assistant";
  text: string;
  highlights?: string[];
};

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
      highlights: assistantTabs.Contact.highlights,
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
      text: "I have experience across application support, ICT/data support, full-stack development, and structured reporting work.",
      highlights: ["Application support", "Data support", "Web delivery"],
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
      text: "I am building deeper reporting skills with SQL and Power BI, supported by dashboard and analysis projects.",
      highlights: ["SQL", "Power BI", "Reporting projects"],
    };
  }

  return {
    role: "assistant",
    text: assistantTabs["About me"].answer,
    highlights: assistantTabs["About me"].highlights,
  };
}

const aboutCards = [
  {
    icon: ShieldCheck,
    title: "User support",
    desc: "Troubleshooting access, Microsoft 365, and everyday system issues with calm follow-through.",
  },
  {
    icon: BarChart3,
    title: "Reporting mindset",
    desc: "Using Excel, SQL, and Power BI practice to turn repeated issues into clearer insight.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Ownership",
    desc: "Taking work from requirement to launch, update, and support without leaving loose ends.",
  },
];

const skillGroups = [
  {
    label: "Application Support",
    note: "Handling access, Microsoft 365 issues, user questions, and day-to-day system support.",
    items: ["Microsoft 365", "SharePoint", "Teams", "Exchange", "User Access"],
  },
  {
    label: "Systems & Identity",
    note: "Working across accounts, devices, basic identity, hosting, DNS, and environment setup.",
    items: ["Windows", "Active Directory", "Azure AD", "Intune", "DNS", "SSL"],
  },
  {
    label: "Reporting & Analysis",
    note: "Turning structured records and repeated issues into clearer reports and business questions.",
    items: ["SQL", "Power BI", "Excel Reporting", "Data Accuracy", "Dashboards"],
  },
  {
    label: "Web Delivery",
    note: "Building and maintaining client websites as proof of ownership, delivery, and support.",
    items: ["React", "Next.js", "Tailwind", "Deployment", "Client Updates"],
  },
];

const movingSkillRows = [
  [
    "Microsoft 365",
    "SharePoint",
    "Teams",
    "Exchange",
    "Active Directory",
    "Azure AD",
    "User Access",
    "Troubleshooting",
  ],
  [
    "SQL",
    "Power BI",
    "Excel Reporting",
    "PowerShell",
    "Documentation",
    "React",
    "Next.js",
    "DNS + SSL",
  ],
];

const timeline = [
  {
    year: "2022 - Now",
    role: "IT Application Support Consultant",
    place: "Freelance / Contract",
    summary: "Supporting small business systems while owning website deployment and live updates.",
    points: ["Microsoft 365 support", "Access and workflow issues", "Live websites maintained"],
  },
  {
    year: "2024 - 2025",
    role: "Administrative Assistant",
    place: "SA Mushrooms",
    summary: "Supported records, reporting, documentation, and ICT/data tasks in an operational team.",
    points: ["ICT and data support", "Excel reporting", "Documentation improvement"],
  },
  {
    year: "2020 - 2022",
    role: "Full Stack Developer",
    place: "Eydean",
    summary: "Built and maintained web applications, APIs, and database-backed features.",
    points: ["Web applications", "APIs", "Stakeholder delivery"],
  },
];

const otherFocus = [
  {
    icon: Database,
    title: "SQL analysis",
    desc: "Customer, sales, and product queries using joins, grouping, and business questions.",
  },
  {
    icon: BarChart3,
    title: "Power BI dashboard",
    desc: "KPI cards, trends, and visuals that explain what changed.",
  },
  {
    icon: Workflow,
    title: "Support notes",
    desc: "Repeatable notes for common support issues, access changes, and workflow fixes.",
  },
];

export default function CosmicPortfolio() {
  const [activeTab, setActiveTab] = useState<AssistantTab | null>(null);
  const [assistantInput, setAssistantInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const chatViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = chatViewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: "smooth",
    });
  }, [chatMessages]);

  const askAssistant = (tab: AssistantTab) => {
    const reply = assistantTabs[tab];
    setActiveTab(tab);
    setChatMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: reply.question },
      {
        role: "assistant",
        text: reply.answer,
        highlights: reply.highlights,
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
    <>
      <section
        id="home"
        className="cosmic-field relative isolate min-h-svh overflow-hidden px-5 pb-8 pt-20 sm:px-8 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-0 cosmic-aurora" />
        <div className="planet planet-one" />
        <div className="planet planet-two" />
        <div className="planet planet-three" />
        <div className="orbit-path orbit-path-one" />
        <div className="orbit-path orbit-path-two" />
        <motion.div
          className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#8b5cf6]/20 blur-3xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.82, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="mx-auto flex max-w-5xl flex-col items-center text-center"
          >
            <motion.div
              className="relative h-24 w-24 overflow-hidden rounded-full border border-white/10 bg-[#1b1528] shadow-[0_30px_90px_rgba(139,92,246,0.22)] sm:h-32 sm:w-32 lg:h-36 lg:w-36"
              animate={{ y: [0, -10, 0], rotate: [0, -2, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/profile-hero.png"
                alt="Rajiv Bhandari"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>

            <p className="mt-5 text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl lg:text-[2.8rem]">
              Hi, I&apos;m{" "}
              <span className="bg-[linear-gradient(90deg,#8b5cf6,#ec4899,#f59e0b)] bg-clip-text text-transparent">
                Rajiv Bhandari
              </span>
            </p>

            <motion.div
              className="mt-5 w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#120f1d]/78 p-3 shadow-[0_40px_140px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <div
                ref={chatViewportRef}
                className="assistant-scroll h-[clamp(210px,31svh,320px)] space-y-4 overflow-y-auto overscroll-contain px-1 py-2 pr-2 sm:px-2"
              >
                {chatMessages.length === 0 ? (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-xl font-bold tracking-[-0.04em] text-[#5f586f] sm:text-2xl">
                      Ask me anything about Rajiv...
                    </p>
                  </div>
                ) : (
                  chatMessages.map((message, index) => (
                    <motion.div
                      key={`${message.role}-${index}-${message.text}`}
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.28 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[88%] text-left text-base leading-7 ${
                          message.role === "user"
                            ? "rounded-t-[22px] rounded-bl-[22px] bg-[#8b5cf6] px-5 py-3 font-bold tracking-[-0.02em] text-white"
                            : "assistant-bubble rounded-[24px] border border-white/10 bg-[#101014] px-5 py-4 font-medium tracking-[-0.025em] text-[#f1edf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-6 sm:py-5"
                        }`}
                      >
                        <p>{message.text}</p>
                        {message.highlights?.length ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {message.highlights.map((item) => (
                              <span key={item} className="cosmic-chip">
                                {item}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {(Object.keys(assistantTabs) as AssistantTab[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => askAssistant(item)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                      activeTab === item
                        ? "border-[#8b5cf6]/60 bg-[#8b5cf6] text-white shadow-[0_14px_34px_rgba(139,92,246,0.28)]"
                        : "border-white/10 bg-[#14141a] text-[#a9a3b8] hover:border-[#8b5cf6]/50 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <form
                onSubmit={handleAssistantSubmit}
                className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-[#101014] px-5 py-3 text-left text-[#777184] transition focus-within:border-[#8b5cf6]/60"
              >
                <MessageCircle className="h-5 w-5" />
                <input
                  value={assistantInput}
                  onChange={(event) => setAssistantInput(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#d8d1e6] outline-none placeholder:text-[#777184] sm:text-base"
                  placeholder="Ask me anything about Rajiv..."
                  aria-label="Ask the portfolio assistant"
                />
                <button
                  type="submit"
                  className="text-[#8b5cf6] transition hover:scale-110 hover:text-[#ec4899]"
                  aria-label="Send question"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="strengths" className="section-shell px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Strengths"
            title="Support, systems, and reporting."
            subtitle="A practical mix for application support and analyst-style roles."
          />
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#120f1d]/82 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
            >
              <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[#ec4899]/12 blur-3xl" />
              <p className="relative text-xs font-black uppercase tracking-[0.28em] text-[#f0abfc]">
                Core profile
              </p>
              <h3 className="relative mt-5 text-3xl font-black leading-[0.95] tracking-[-0.07em] text-white sm:text-4xl">
                Calm in the messy middle.
              </h3>
              <p className="relative mt-4 max-w-xl text-sm leading-7 text-[#c9c1d8]">
                I connect user issues, business systems, documentation, and reporting so teams get practical fixes instead of confusion.
              </p>
              <div className="relative mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {["Support", "Systems", "Data"].map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.045] px-3 py-3 text-center"
                  >
                    <p className="text-base font-black text-white">{item}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#777184]">
                      focus
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {aboutCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#120f1d]/72 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-[#8b5cf6]/40"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#8b5cf6] via-[#ec4899] to-[#f59e0b] opacity-70" />
                  <div className="flex flex-col gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.055] text-[#c084fc] transition group-hover:scale-110">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#777184]">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.05em] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#bdb5cc]">{card.desc}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Experience"
            title="Experience that connects users, systems, and data."
            subtitle="A clearer view of how the work translates into application support and analyst-style roles."
          />
          <div className="relative grid gap-5 lg:grid-cols-3">
            <div className="absolute left-1/2 top-12 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b5cf6]/45 to-transparent lg:block" />
            {timeline.map((item, index) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="cosmic-card group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#d8b4fe]">
                    {item.year}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-[#ec4899] shadow-[0_0_26px_rgba(236,72,153,0.85)] transition group-hover:scale-150" />
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.05em] text-white">
                  {item.role}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#8f87a0]">
                  {item.place}
                </p>
                <p className="mt-5 text-sm leading-7 text-[#c9c1d8]">
                  {item.summary}
                </p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-[#d8d1e6]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0abfc]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Projects"
            title="Two live client builds."
            subtitle="A quick look at real client work without over-explaining it."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 38 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.08, duration: 0.7 }}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-[42px] border border-white/10 bg-[#120f1d]/82 p-4 shadow-[0_46px_150px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:p-5"
              >
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8b5cf6]/18 blur-3xl transition duration-700 group-hover:bg-[#ec4899]/20" />
                <div className="absolute bottom-0 left-10 h-px w-2/3 bg-gradient-to-r from-[#8b5cf6]/0 via-[#8b5cf6]/70 to-transparent" />

                <Link
                  href={`/projects/${project.slug}`}
                  className="group/image relative block min-h-[300px] overflow-hidden rounded-[30px] border border-white/10 bg-[#090712] sm:min-h-[360px] lg:min-h-[320px]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-92 transition duration-700 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070610] via-[#070610]/12 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#f0abfc]">
                      {project.liveLabel}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">
                      {project.title}
                    </h3>
                  </div>
                </Link>

                <div className="relative flex flex-1 flex-col p-3 pt-7 sm:p-5 sm:pt-8">
                  <p className="text-base leading-7 text-[#d8d1e6]">{project.outcome}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className="cosmic-chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <Link href={`/projects/${project.slug}`} className="btn-primary">
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <a href={project.liveUrl} className="btn-outline">
                      Open Website
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Skills"
            title="Skills with practical context."
            subtitle="Not just tools: what I use them for, and how they support the role direction."
          />
          <div className="-mx-5 overflow-hidden py-8 sm:-mx-8 lg:-mx-10">
            {movingSkillRows.map((row, rowIndex) => (
              <div key={row.join("-")} className="skill-marquee mb-8 last:mb-0">
                <motion.div
                  className="flex min-w-max gap-6 px-5 sm:px-8 lg:px-10"
                  animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{
                    duration: rowIndex % 2 === 0 ? 28 : 32,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...row, ...row].map((skill, index) => (
                    <div key={`${skill}-${index}`} className="skill-tile">
                      <div className="skill-icon">
                        {skill
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-lg font-black uppercase tracking-[0.04em] text-white">
                          {skill}
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#777184]">
                          Technology
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.08 }}
                className="cosmic-card"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[#f0abfc]">
                  {group.label}
                </p>
                <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#c9c1d8]">
                  {group.note}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="cosmic-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="growth" className="section-shell px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Growth"
            title="Current focus."
            subtitle="The next proof points: SQL practice, Power BI reporting, and repeatable support workflows."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {otherFocus.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="cosmic-card group"
              >
                <div className="flex items-start justify-between">
                  <item.icon className="h-7 w-7 text-[#c084fc]" />
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-black text-[#777184]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-black tracking-[-0.05em] text-white transition group-hover:text-[#f0abfc]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[#bdb5cc]">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[40px] border border-white/10 bg-[#120f1d]/80 p-6 shadow-[0_40px_140px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0abfc]">Contact</p>
            <h2 className="mt-4 text-3xl font-black leading-[1] tracking-[-0.06em] text-white sm:text-5xl">
              Let&apos;s connect.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#c9c1d8]">
              Open to application support, business systems, and reporting-focused roles in Adelaide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:max-w-sm">
              <a href="mailto:bhandarirajiv25@gmail.com" className="btn-primary">
                <Mail className="h-4 w-4" />
                Email Rajiv
              </a>
              <a
                href="https://www.linkedin.com/in/rajiv-bhandari25/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <Link href="/resume" className="btn-outline">
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mb-9 max-w-3xl"
    >
      <p className="text-xs font-black uppercase tracking-[0.32em] text-[#f0abfc]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-[1] tracking-[-0.06em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#c9c1d8]">
        {subtitle}
      </p>
    </motion.div>
  );
}
