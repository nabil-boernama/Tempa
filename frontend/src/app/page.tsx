import { BackendStatus } from "@/components/backend-status";

// Placeholder skeleton (#7). Landing page sebenarnya dikerjakan di #9 mengikuti hi-fi #8.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">Tempa</h1>
      <p className="max-w-md text-zinc-600 dark:text-zinc-400">
        Persiapan karier: analisis skill gap dan gladi wawancara suara dengan AI.
      </p>
      <BackendStatus />
    </main>
  );
}
