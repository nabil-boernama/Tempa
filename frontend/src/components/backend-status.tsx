"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type Status = "checking" | "ok" | "down";

// Dipanggil dari browser (bukan server) supaya konfigurasi CORS backend ikut teruji.
export function BackendStatus() {
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${API_URL}/health`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((body: { status?: string }) => setStatus(body.status === "ok" ? "ok" : "down"))
      .catch(() => {
        if (!controller.signal.aborted) setStatus("down");
      });

    return () => controller.abort();
  }, []);

  const label = {
    checking: "Memeriksa backend…",
    ok: "Backend terhubung",
    down: "Backend tidak terjangkau",
  }[status];

  const dot = {
    checking: "bg-zinc-400",
    ok: "bg-emerald-500",
    down: "bg-red-500",
  }[status];

  return (
    <p className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400" role="status">
      <span className={`size-2 rounded-full ${dot}`} aria-hidden />
      {label}
      <code className="font-mono text-xs text-zinc-500">{API_URL}/health</code>
    </p>
  );
}
