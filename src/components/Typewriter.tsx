import { useEffect, useState } from "react";

export function Typewriter({
  lines,
  startDelay = 300,
  charDelay = 50,
  pauseBetween = 1200,
  className = "",
  onDone,
}: {
  lines: string[];
  startDelay?: number;
  charDelay?: number;
  pauseBetween?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (lineIdx >= lines.length) {
      onDone?.();
      return;
    }
    const line = lines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setCurrent(line.slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, charDelay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setShown((s) => [...s, line]);
        setCurrent("");
        setCharIdx(0);
        setLineIdx(lineIdx + 1);
      }, pauseBetween);
      return () => clearTimeout(t);
    }
  }, [started, charIdx, lineIdx, lines, charDelay, pauseBetween, onDone]);

  return (
    <div className={className}>
      {shown.map((l, i) => (
        <p key={i} className="fade-in mb-4">
          {l}
        </p>
      ))}
      {lineIdx < lines.length && (
        <p className="cursor">{current}</p>
      )}
    </div>
  );
}
