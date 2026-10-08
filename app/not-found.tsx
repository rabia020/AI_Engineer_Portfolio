import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 pt-16">
      <div className="text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Project not found.</h1>
        <p className="mt-3 text-slate-500 dark:text-slate-400">The page you requested does not exist.</p>
        <Link href="/#projects" className="button-primary mt-7">
          <ArrowLeft size={15} /> Back to projects
        </Link>
      </div>
    </main>
  );
}
