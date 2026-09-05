import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-start justify-center px-6"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-primary">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-ink">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/en"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-ink"
      >
        Back to home
      </Link>
    </main>
  );
}
