"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaClipboardCheck,
  FaUsers,
  FaDatabase,
} from "react-icons/fa";

const valueCards = [
  {
    icon: <FaHeadset />,
    title: "User Support",
    text: "Comfortable supporting users, handling issues patiently, and communicating clearly with both technical and non-technical people.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Reliable Delivery",
    text: "I value consistency, documentation, follow-through, and getting practical work done properly in real business environments.",
  },
  {
    icon: <FaUsers />,
    title: "Team Fit",
    text: "I work well across operations, support, and project work, which helps me fit into mixed technical and business teams.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Awareness",
    text: "I also bring structured thinking around records, reporting, admin workflows, and improving how information is managed.",
  },
];

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Support-first, practical, and ready for real business environments"
      subtitle="My background combines technical support, digital tools, business operations, documentation, and client-facing website work. That gives me a practical foundation for Australian IT support and support analyst roles."
      className="bg-slate-950/70"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6 sm:p-8"
        >
          <p className="text-sm leading-8 text-slate-300 sm:text-[15px]">
            I’m an Adelaide-based ICT professional with experience in user
            support, Microsoft 365, troubleshooting, documentation, website
            administration, and day-to-day digital operations. My work has
            included helping users, supporting systems, managing updates,
            maintaining records, and delivering practical solutions that are
            useful in real business settings.
          </p>

          <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-[15px]">
            What makes my profile strong is that I’m not only technical. I also
            understand reliability, communication, structured work, and how
            technology supports daily operations. That makes me a good fit for
            roles where employers need someone dependable, adaptable, and able
            to solve issues calmly.
          </p>

          <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-[15px]">
            I’m especially interested in roles such as IT Support, ICT Support,
            Service Desk, Support Analyst, Application Support, and positions
            that combine support with reporting, systems administration, or
            process improvement.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
            <p className="text-sm leading-7 text-slate-300">
              My goal is simple: join a strong team, support users well, keep
              systems running smoothly, and continue growing into higher-value
              support and data-focused roles over time.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-3xl border border-slate-800/80 bg-slate-950/95 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-emerald-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {card.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}