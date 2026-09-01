import ResumeHeader from "@/components/ResumeHeader";
import ResumeSkillsDetailed from "@/components/ResumeSkillsDetailed";
import ResumeTimeline from "@/components/ResumeTimeline";
import ResumeEducation from "@/components/ResumeEducation";
import ResumeProjects from "@/components/ResumeProjects";

export default function ResumePage() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-bg px-4 pb-14 pt-24 sm:px-6 lg:px-8 print:min-h-0 print:overflow-visible print:px-0 print:pb-0 print:pt-6">
      <div className="mx-auto w-full max-w-6xl space-y-6 print:max-w-none print:space-y-4">
        <ResumeHeader />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] print:grid-cols-1 print:gap-4">
          <div className="space-y-6 print:space-y-4">
            <ResumeTimeline />
            <ResumeProjects />
          </div>
          <div className="space-y-6 print:space-y-4">
            <ResumeSkillsDetailed />
            <ResumeEducation />
          </div>
        </div>
        <p className="border-t border-border pt-6 text-xs text-text-faint">
          References available upon request.
        </p>
      </div>
    </section>
  );
}
