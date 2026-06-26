import ResumeHeader from "@/components/ResumeHeader";
import ResumeSkillsDetailed from "@/components/ResumeSkillsDetailed";
import ResumeTimeline from "@/components/ResumeTimeline";
import ResumeEducation from "@/components/ResumeEducation";
import ResumeProjects from "@/components/ResumeProjects";

export default function ResumePage() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_8%,rgba(139,92,246,0.18),transparent_32%),radial-gradient(circle_at_80%_22%,rgba(245,158,11,0.08),transparent_28%),linear-gradient(180deg,#090713_0%,#120f1d_52%,#080711_100%)]" />
      <div className="pointer-events-none absolute left-[-90px] top-48 h-80 w-80 rounded-full bg-[#8b5cf6]/16 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-[-100px] h-80 w-80 rounded-full bg-[#ec4899]/10 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl space-y-6">
        <ResumeHeader />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <ResumeTimeline />
            <ResumeProjects />
          </div>
          <div className="space-y-6">
            <ResumeSkillsDetailed />
            <ResumeEducation />
          </div>
        </div>
      </div>
    </section>
  );
}
