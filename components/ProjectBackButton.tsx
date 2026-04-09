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
    <button type="button" onClick={handleBack} className="btn-outline">
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
