import { useState } from "react";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [hide, setHide] = useState(false);
  
  const handleEnter = () => {
    setHide(true);
    // Let the fade animation finish before unmounting
    setTimeout(() => {
      onDone();
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-1000 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              ["--dur" as string]: `${Math.random() * 3 + 1.5}s`,
              ["--delay" as string]: `${Math.random() * 3}s`,
              boxShadow: "0 0 6px rgba(255,255,255,0.6)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
      <div className="relative text-center px-6 flex flex-col items-center">
        <p className="font-display text-xl md:text-3xl text-gradient-gold text-glow italic fade-in mb-8">
          Some moments are meant to be kept forever.
        </p>
        <button
          onClick={handleEnter}
          className="glass-strong px-8 py-3 rounded-full text-foreground hover:scale-105 transition font-display text-lg tracking-wide pulse-glow fade-up"
          style={{ animationDelay: "1s" }}
        >
          Tap to open 💌
        </button>
      </div>
    </div>
  );
}
