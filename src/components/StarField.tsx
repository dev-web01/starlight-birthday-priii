import { useMemo } from "react";

export function StarField({ count = 120, shootingCount = 3 }: { count?: number; shootingCount?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        dur: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      })),
    [count]
  );
  const shooters = useMemo(
    () =>
      Array.from({ length: shootingCount }, (_, i) => ({
        id: i,
        top: Math.random() * 50,
        left: -10,
        delay: i * 4 + Math.random() * 8,
      })),
    [shootingCount]
  );

  return (
    <div 
      className="pointer-events-none fixed -left-[10vw] -right-[10vw] -top-[10vh] h-[120vh] overflow-hidden -z-10"
      style={{ transform: 'translateY(calc(var(--scroll) * -0.15px)) translateZ(0)', willChange: 'transform' }}
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            ["--dur" as string]: `${s.dur}s`,
            ["--delay" as string]: `${s.delay}s`,
            boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,0.8)`,
          }}
        />
      ))}
      {shooters.map((s) => (
        <span
          key={`sh-${s.id}`}
          className="shooting-star absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: "120px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, white, transparent)",
            ["--delay" as string]: `${s.delay}s`,
            filter: "drop-shadow(0 0 6px white)",
          }}
        />
      ))}
    </div>
  );
}
