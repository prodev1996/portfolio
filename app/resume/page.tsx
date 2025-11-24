import Navbar from "../../components/Navbar";
import ResumeHeader from "../../components/ResumeHeader";
import ResumeTimeline from "../../components/ResumeTimeline";
import ResumeSkills from "../../components/ResumeSkills";
import ResumeEducation from "../../components/ResumeEducation";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="mx-auto max-w-5xl px-4">
          <ResumeHeader />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr,1.3fr]">
            {/* Left column – Experience timeline */}
            <div>
              <ResumeTimeline />
            </div>

            {/* Right column – Skills & Education */}
            <div className="space-y-8">
              <ResumeSkills />
              <ResumeEducation />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Rajiv Bhandari. All rights reserved.</p>
          <p>Resume view • Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
