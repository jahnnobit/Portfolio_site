/**
 * Tiny dependency-free area chart for project cards.
 * Decorative but data-driven; hidden from assistive tech (label sits beside it).
 */
export function SparkChart({ data }: { data: number[] }) {
  const w = 320;
  const h = 90;
  const pad = 4;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const span = max - min || 1;

  const pts = data.map((d, i) => {
    const x = pad + (i * (w - pad * 2)) / (data.length - 1);
    const y = h - pad - ((d - min) / span) * (h - pad * 2);
    return [x, y] as const;
  });

  const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-full w-full"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#spark-fill)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r="3.5"
        fill="var(--accent)"
      />
    </svg>
  );
}
