import { Check, CircleDashed, Loader } from "lucide-react";

import type { Status } from "@/data/roadmap-data";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<Status, string> = {
  done: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  active:
    "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300",
  planned: "border-border bg-muted/60 text-muted-foreground",
};

/** Small status chip used on phases, milestones and projects. */
export function StatusPill({
  status,
  label,
  className,
}: {
  status: Status;
  label: string;
  className?: string;
}) {
  const Icon =
    status === "done" ? Check : status === "active" ? Loader : CircleDashed;

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        STATUS_STYLES[status],
        className,
      )}
    >
      <Icon className="size-3" aria-hidden="true" />
      {label}
    </span>
  );
}

/** Timeline node: filled for done, pulsing for active, hollow for planned. */
export function StatusDot({ status }: { status: Status }) {
  if (status === "active") {
    return (
      <span className="relative flex size-3">
        <span className="ai-ping absolute inline-flex size-full rounded-full bg-violet-500/70" />
        <span className="relative inline-flex size-3 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
      </span>
    );
  }

  if (status === "done") {
    return (
      <span className="flex size-3 rounded-full bg-emerald-500" />
    );
  }

  return (
    <span className="flex size-3 rounded-full border-2 border-border bg-background" />
  );
}

/** Gradient progress bar. `value` is 0–100. */
export function ProgressBar({
  value,
  className,
  label,
}: {
  value: number;
  className?: string;
  label?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className="ai-progress-fill h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
