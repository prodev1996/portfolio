import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <section className="not-found section-shell">
      <p className="eyebrow">Page not found</p>
      <h1>A little off track.</h1>
      <p>
        This page doesn’t exist. There’s plenty of work to explore back home.
      </p>
      <Link className="text-link" href="/">
        <ArrowLeft size={18} aria-hidden="true" /> Back to portfolio
      </Link>
    </section>
  );
}
