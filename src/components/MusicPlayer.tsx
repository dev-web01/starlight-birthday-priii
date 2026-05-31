import { useEffect, useRef, useState } from "react";
import songSrc from "@/assets/ReelAudio-64972.mp3";

export function MusicPlayer({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoStart) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.3;
    a.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [autoStart]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.volume = 0.3;
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  const bars = [0.4, 0.7, 1, 0.7, 0.5, 0.8, 0.4];

  return (
    <>
      <audio ref={audioRef} src={songSrc} loop preload="auto" />
      <button
        onClick={toggle}
        className="glass-strong fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-foreground transition hover:scale-105 pulse-glow"
        aria-label="Toggle music"
        style={{ minWidth: "48px" }}
      >
        {/* Animated sound bars when playing, note icon when paused */}
        <div className="flex items-end gap-[3px] h-5">
          {playing ? (
            bars.map((h, i) => (
              <div
                key={i}
                className="sound-bar rounded-full"
                style={{
                  width: "3px",
                  height: `${h * 20}px`,
                  background: "linear-gradient(to top, oklch(0.75 0.22 310), oklch(0.85 0.16 85))",
                  ["--dur" as string]: `${0.4 + i * 0.1}s`,
                  animationDelay: `${i * 0.07}s`,
                }}
              />
            ))
          ) : (
            <span className="text-xl">🎵</span>
          )}
        </div>
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          {playing ? (
            <span className="text-gradient-gold">♪ Playing for Priii</span>
          ) : (
            "Play Music"
          )}
        </span>
      </button>
    </>
  );
}
