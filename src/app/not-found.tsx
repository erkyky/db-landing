import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0d121a] px-6 text-center">
      <p className="mb-4 font-sans text-sm uppercase tracking-[0.3em] text-[#cca885]">
        404
      </p>
      <h1 className="font-serif text-4xl font-semibold text-white md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md font-serif text-lg leading-relaxed text-white/50">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-2xl border border-[#cca885]/30 px-8 py-3 font-serif text-sm text-[#cca885] transition-colors hover:bg-[#cca885]/10"
      >
        Return Home
      </Link>
    </div>
  );
}
