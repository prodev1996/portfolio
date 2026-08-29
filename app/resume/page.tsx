import ResumeHeader from "@/components/ResumeHeader";
import ResumeSkillsDetailed from "@/components/ResumeSkillsDetailed";
import ResumeTimeline from "@/components/ResumeTimeline";
import ResumeEducation from "@/components/ResumeEducation";
import ResumeProjects from "@/components/ResumeProjects";

export default function ResumePage() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-bg px-4 pb-14 pt-24 sm:px-6 lg:px-8">
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
