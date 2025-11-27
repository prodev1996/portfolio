"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Infrastructure & Support",
    items: [
      "Windows 10/11",
      "Active Directory",
      "Microsoft 365",
      "Azure AD",
      "Exchange / Outlook",
      "Intune & Endpoint Manager",
      "VPN & Remote Access",
    ],
  },
  {
    title: "Networking & Systems",
    items: [
      "Network Design",
      "Switching & Routing",
      "VLAN / WLAN",
      "Firewalls",
      "DNS / DHCP",
      "VPN (Site & Client)",
    ],
  },
  {
    title: "Development",
    items: [
      "JavaScript / TypeScript",
      "React & Next.js",
      "Node.js",
      "Python",
      "Django",
      "REST APIs",
      "MySQL / MongoDB",
    ],
  },
  {
    title: "Tools & Practices",
    items: [
      "Ticketing Systems",
      "Monitoring & Alerts",
      "CI/CD basics",
      "Git & GitHub",
      "Documentation",
      "End-user Training",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95 py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Core Skills
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              The toolkit I bring to your team
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-[15px]">
              I combine **hands-on IT support** experience with **modern full-stack
              development**, so I can own both infrastructure and product-side work –
              from fixing a VPN issue to shipping a new feature.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 px-4 py-3 text-xs text-slate-200 shadow-[0_18px_40px_rgba(16,185,129,0.35)] sm:max-w-xs">
            <p className="font-medium text-emerald-300">
              What this means for you
            </p>
            <p className="mt-1 text-[11px] text-slate-300">
              Less back-and-forth between “devs” and “IT” – I can talk both
              languages and help close the gap.
            </p>
          </div>
        </div>

        {/* Skill grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: 0.08 * groupIndex,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-slate-950/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.95)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%)]" />
              <div className="relative">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-[13px] text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
