import { useMemo } from "react";

function Butterfly({ color = "gold" }: { color?: "gold" | "purple" | "white" }) {
  const fill =
    color === "gold"
      ? "oklch(0.85 0.18 85)"
      : color === "purple"
      ? "oklch(0.7 0.22 295)"
      : "oklch(0.98 0.01 90)";
  return (
    <svg width="28" height="22" viewBox="0 0 40 32" className="butterfly-wing">
      <g>
        <ellipse cx="12" cy="12" rx="11" ry="9" fill={fill} opacity="0.9" />
        <ellipse cx="28" cy="12" rx="11" ry="9" fill={fill} opacity="0.9" />
        <ellipse cx="14" cy="22" rx="7" ry="6" fill={fill} opacity="0.7" />
        <ellipse cx="26" cy="22" rx="7" ry="6" fill={fill} opacity="0.7" />
        <rect x="19" y="6" width="2" height="22" rx="1" fill="oklch(0.2 0.05 270)" />
      </g>
    </svg>
  );
}

export function Butterflies({ count = 6 }: { count?: number }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 80 + 5,
        dur: Math.random() * 20 + 20,
        delay: Math.random() * -30,
        color: (["gold", "purple", "white"] as const)[i % 3],
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden">
      {flies.map((f) => (
        <div
          key={f.id}
          className="butterfly-x absolute"
          style={{
            top: `${f.top}%`,
            ["--dur" as string]: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <div className="butterfly-y">
            <Butterfly color={f.color} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function BurstButterflies({ count = 30 }: { count?: number }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        dur: Math.random() * 8 + 6,
        delay: Math.random() * 2,
        color: (["gold", "purple", "white"] as const)[i % 3],
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {flies.map((f) => (
        <div
          key={f.id}
          className="butterfly-x absolute"
          style={{
            top: `${f.top}%`,
            ["--dur" as string]: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
          }}
        >
          <div className="butterfly-y">
            <Butterfly color={f.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
