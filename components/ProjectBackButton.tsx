"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProjectBackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/#projects");
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back to the previous page"
      className="btn-outline focus-visible:ring-2 focus-visible:ring-[#6f67df] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090713]"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
