"use client";

import { useId, useMemo, useState } from "react";
import type { UIStrings } from "@/content/types";

/* ------------------------------------------------------------------ */
/*  Interactive decision-threshold explorer.                            */
/*  Synthetic set of 1,000 tumour samples (~37% malignant),             */
/*  deterministic — no randomness, no dependencies. Illustrative.       */
/* ------------------------------------------------------------------ */

const BINS = 50;
const N_POS = 372; // malignant
const N_NEG = 628; // benign

function shape(x: number, a: number, b: number) {
  return Math.pow(x, a) * Math.pow(1 - x, b);
}

function histogram(total: number, a: number, b: number) {
  const raw: number[] = [];
  let sum = 0;
  for (let i = 0; i < BINS; i++) {
    const center = (i + 0.5) / BINS;
    const v = shape(center, a, b);
    raw.push(v);
    sum += v;
  }
  const counts = raw.map((v) => (v / sum) * total);
  // integerise while preserving the total
  const floored = counts.map(Math.floor);
  const remainder = total - floored.reduce((s, v) => s + v, 0);
  const order = counts
    .map((v, i) => ({ i, frac: v - Math.floor(v) }))
    .sort((p, q) => q.frac - p.frac);
  for (let k = 0; k < remainder; k++) floored[order[k].i] += 1;
  return floored;
}

export function ThresholdExplorer({ t }: { t: UIStrings }) {
  const [threshold, setThreshold] = useState(0.5);
  const labelId = useId();

  const { negHist, posHist } = useMemo(
    () => ({
      negHist: histogram(N_NEG, 1.6, 5.5),
      posHist: histogram(N_POS, 4.5, 1.7),
    }),
    [],
  );

  const stats = useMemo(() => {
    let tp = 0;
    let fn = 0;
    let fp = 0;
    let tn = 0;
    for (let i = 0; i < BINS; i++) {
      const center = (i + 0.5) / BINS;
      if (center >= threshold) {
        tp += posHist[i];
        fp += negHist[i];
      } else {
        fn += posHist[i];
        tn += negHist[i];
      }
    }
    const sensitivity = tp + fn ? tp / (tp + fn) : 0;
    const specificity = tn + fp ? tn / (tn + fp) : 0;
    const precision = tp + fp ? tp / (tp + fp) : 0;
    return { tp, fn, fp, tn, sensitivity, specificity, precision };
  }, [threshold, negHist, posHist]);

  const W = 600;
  const H = 200;
  const maxCount = Math.max(...negHist, ...posHist, 1);
  const barW = W / BINS;
  const thX = threshold * W;

  const pct = (v: number) => `${(v * 100).toFixed(0)}%`;

  function bars(hist: number[], fill: string, opacity: number) {
    return hist.map((c, i) => {
      const h = (c / maxCount) * (H - 24);
      return (
        <rect
          key={i}
          x={i * barW + 0.5}
          y={H - 20 - h}
          width={barW - 1}
          height={h}
          fill={fill}
          fillOpacity={opacity}
        />
      );
    });
  }

  const metricRows = [
    { label: t.explorer.sensitivity, value: pct(stats.sensitivity) },
    { label: t.explorer.specificity, value: pct(stats.specificity) },
    { label: t.explorer.precision, value: pct(stats.precision) },
    { label: t.explorer.flagged, value: String(stats.tp + stats.fp) },
  ];

  const matrixRows = [
    { label: t.explorer.truePos, value: stats.tp },
    { label: t.explorer.falsePos, value: stats.fp },
    { label: t.explorer.trueNeg, value: stats.tn },
    { label: t.explorer.falseNeg, value: stats.fn },
  ];

  return (
    <figure className="not-prose my-2 rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <figcaption className="mb-1 text-lg font-semibold text-ink">
        {t.explorer.title}
      </figcaption>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
        {t.explorer.intro}
      </p>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full min-w-[420px]"
          role="img"
          aria-label={`${t.explorer.tableCaption}: ${t.explorer.sensitivity} ${pct(
            stats.sensitivity,
          )}, ${t.explorer.specificity} ${pct(stats.specificity)}`}
        >
          {/* flagged region */}
          <rect
            x={thX}
            y={0}
            width={W - thX}
            height={H - 20}
            fill="var(--primary)"
            fillOpacity={0.06}
          />
          {bars(negHist, "var(--muted)", 0.55)}
          {bars(posHist, "var(--primary)", 0.85)}
          {/* baseline */}
          <line
            x1={0}
            y1={H - 20}
            x2={W}
            y2={H - 20}
            stroke="var(--border)"
            strokeWidth={1}
          />
          {/* threshold line */}
          <line
            x1={thX}
            y1={0}
            x2={thX}
            y2={H - 20}
            stroke="var(--accent)"
            strokeWidth={2}
          />
          <text
            x={Math.min(thX + 6, W - 4)}
            y={12}
            fill="var(--accent)"
            fontSize={11}
            textAnchor={thX > W - 60 ? "end" : "start"}
          >
            τ = {threshold.toFixed(2)}
          </text>
          <text x={2} y={H - 6} fill="var(--muted)" fontSize={10}>
            0.0
          </text>
          <text
            x={W - 2}
            y={H - 6}
            fill="var(--muted)"
            fontSize={10}
            textAnchor="end"
          >
            1.0 — {t.explorer.threshold}
          </text>
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <span className="h-2.5 w-2.5 rounded-sm bg-muted/55" />
          {t.explorer.negatives} ({N_NEG})
        </span>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <span className="h-2.5 w-2.5 rounded-sm bg-primary/85" />
          {t.explorer.positives} ({N_POS})
        </span>
      </div>

      <label htmlFor={labelId} className="mt-5 block text-sm font-medium text-ink">
        {t.explorer.threshold}: <span className="font-mono">{threshold.toFixed(2)}</span>
      </label>
      <input
        id={labelId}
        type="range"
        min={0.05}
        max={0.95}
        step={0.01}
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="mt-2 w-full cursor-pointer accent-primary"
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metricRows.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-border bg-surface-2 p-4"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {m.label}
            </p>
            <p className="mt-1 text-2xl font-semibold text-ink">{m.value}</p>
          </div>
        ))}
      </div>

      <table className="mt-6 w-full border-collapse text-sm">
        <caption className="mb-2 text-left text-xs text-muted">
          {t.explorer.tableCaption} (τ = {threshold.toFixed(2)})
        </caption>
        <thead>
          <tr className="border-b border-border text-left text-muted">
            <th scope="col" className="py-2 font-medium">
              {t.explorer.metric}
            </th>
            <th scope="col" className="py-2 text-right font-medium">
              {t.explorer.count}
            </th>
          </tr>
        </thead>
        <tbody>
          {matrixRows.map((r) => (
            <tr key={r.label} className="border-b border-border/60">
              <th scope="row" className="py-2 font-normal text-ink/85">
                {r.label}
              </th>
              <td className="py-2 text-right font-mono text-ink">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
