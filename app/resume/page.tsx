import ResumeHeader from "@/components/ResumeHeader";
import ResumeSkillsDetailed from "@/components/ResumeSkillsDetailed";
import ResumeTimeline from "@/components/ResumeTimeline";
import ResumeEducation from "@/components/ResumeEducation";
import ResumeProjects from "@/components/ResumeProjects";

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
      <ResumeHeader />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <ResumeTimeline />
          <ResumeProjects />
        </div>
        <div className="space-y-8">
          <ResumeSkillsDetailed />
          <ResumeEducation />
        </div>
      </div>
    </section>
  );
}
