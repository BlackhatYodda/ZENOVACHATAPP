import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-4 pt-24 text-center sm:px-6">
      <p className="text-6xl font-semibold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-8 rounded-full bg-brand px-5 py-2.5 font-semibold text-white">
        Back to home
      </Link>
    </main>
  );
}
