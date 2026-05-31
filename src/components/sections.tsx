import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Typewriter } from "./Typewriter";
import { BurstButterflies } from "./Butterflies";
import priiiCollage from "@/assets/priii-collage.png";
import memory2 from "@/assets/memory-2.jpg";
import memoryBg from "@/assets/memory-1.jpg";
import heroImg from "@/assets/hero-mountains.jpg";
import sunriseImg from "@/assets/sunrise.jpg";

/* ---- Reusable PRIII Name Component ---- */
function PriiiName({ size = "inherit", showBadge = false }: { size?: string; showBadge?: boolean }) {
  return (
    <span className="priii-wrapper" style={{ fontSize: size }}>
      <span className="priii-crown" style={{ fontSize: "0.7em", marginRight: "0.15em" }}>👑</span>
      <span
        className="priii-name"
        data-text="P R I I I"
        style={{ fontWeight: 600, letterSpacing: "0.1em" }}
      >
        P&thinsp;R&thinsp;I&thinsp;I&thinsp;I
      </span>
      <span style={{ display: "inline-flex", gap: "0.15em", marginLeft: "0.15em", fontSize: "0.75em" }}>
        <span className="priii-crown" style={{ animationDelay: "0.5s" }}>✨</span>
        <span className="priii-crown" style={{ animationDelay: "1s" }}>🌙</span>
      </span>
    </span>
  );
}

/* ---- Floating Particles ---- */
function FloatingParticles({ count = 12 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            left: `${(i / count) * 100}%`,
            bottom: "0",
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            background: i % 3 === 0
              ? "oklch(0.85 0.16 85 / 0.8)"
              : i % 3 === 1
              ? "oklch(0.75 0.22 310 / 0.7)"
              : "oklch(0.65 0.25 260 / 0.6)",
            ["--dur" as string]: `${6 + (i * 1.3) % 8}s`,
            ["--delay" as string]: `${(i * 0.7) % 5}s`,
            ["--drift" as string]: `${(i % 2 === 0 ? 1 : -1) * (20 + (i % 40))}px`,
            boxShadow: `0 0 6px currentColor`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- OPENING ---------- */
export function Opening() {
  const [showTitle, setShowTitle] = useState(false);
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Mountains under starry sky"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <FloatingParticles count={16} />
      {/* Drifting clouds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="cloud-drift absolute h-20 w-80 rounded-full bg-white/5 blur-3xl"
            style={{ top: `${15 + i * 20}%`, ["--dur" as string]: `${60 + i * 20}s`, animationDelay: `${-i * 20}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        {!showTitle ? (
          <Typewriter
            className="text-lg sm:text-xl md:text-3xl font-display text-foreground/90 text-glow-soft min-h-[60vh] flex flex-col justify-center"
            lines={[
              "Out of billions of people...",
              "Out of millions of conversations...",
              "Somehow...",
              "Our paths crossed.",
              "And honestly...",
              "I'm grateful they did.",
            ]}
            charDelay={55}
            pauseBetween={1100}
            onDone={() => setTimeout(() => setShowTitle(true), 800)}
          />
        ) : (
          <div className="fade-in">
            <h1 className="font-display font-light tracking-tight leading-tight"
              style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}>
              <span className="text-gradient-gold text-glow block">HAPPY BIRTHDAY</span>
              <span className="block mt-2">
                <PriiiName />
              </span>
            </h1>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-foreground/70 italic max-w-2xl mx-auto px-2">
              A small corner of the internet made for someone who unknowingly became a favorite part of my day.
            </p>
            <div className="mt-10 sm:mt-12 text-foreground/50 text-sm animate-bounce">↓ scroll ↓</div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- NEVER PLANNED ---------- */
export function NeverPlanned() {
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl md:text-5xl text-gradient-aurora mb-12">Things I Never Planned</h2>
        <div className="glass rounded-3xl p-8 md:p-14">
          <Typewriter
            className="text-lg md:text-2xl font-display text-foreground/90 leading-relaxed"
            lines={[
              "I never planned to wait for someone's message.",
              "I never planned to smile at random notifications.",
              "I never planned to think about someone before sleeping.",
              "And yet...",
              "Here we are.",
            ]}
            charDelay={45}
            pauseBetween={1000}
          />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- MEMORY GALLERY ---------- */
function CrazyEmptySlot({ label }: { label: string }) {
  const orbits = ["💜", "🌙", "✨", "🦋", "💛", "⭐", "🌸", "💫"];
  return (
    <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden crazy-empty-slot flex flex-col items-center justify-center">
      {/* Animated gradient bg */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, oklch(0.12 0.08 295), oklch(0.08 0.05 270), oklch(0.15 0.10 310))",
        animation: "auroraWave 6s ease infinite",
        backgroundSize: "300% 300%"
      }} />
      {/* Grid scan lines */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, oklch(1 0 0 / 0.3) 20px, oklch(1 0 0 / 0.3) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, oklch(1 0 0 / 0.3) 20px, oklch(1 0 0 / 0.3) 21px)"
      }} />
      {/* Orbiting emojis */}
      {orbits.map((emoji, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            animation: `orbit-${i % 2 === 0 ? 'cw' : 'ccw'} ${5 + i * 0.7}s linear infinite`,
            top: "50%",
            left: "50%",
            transformOrigin: `${55 + i * 10}px 0px`,
            marginTop: `-${55 + i * 10}px`,
            fontSize: "1.2rem",
            filter: "drop-shadow(0 0 6px oklch(0.85 0.16 85))",
          }}
        >
          {emoji}
        </div>
      ))}
      {/* Center content */}
      <div className="relative z-10 text-center px-4">
        <div className="text-5xl sm:text-6xl mb-3" style={{ filter: "drop-shadow(0 0 20px oklch(0.85 0.16 85))" }}>📸</div>
        <p className="priii-name text-lg sm:text-xl font-bold" data-text="MORE MEMORIES" style={{
          fontSize: "clamp(0.9rem, 3vw, 1.25rem)",
          letterSpacing: "0.2em"
        }}>MORE MEMORIES</p>
        <p className="mt-2 text-foreground/50 text-xs sm:text-sm italic">coming soon...</p>
        <div className="mt-4 flex justify-center gap-2">
          {[0.3, 0.5, 0.7, 0.5, 0.3].map((h, i) => (
            <div key={i} className="sound-bar w-1 sm:w-1.5 bg-[oklch(0.85_0.16_85)] rounded-full"
              style={{ height: `${h * 28}px`, ["--dur" as string]: `${0.5 + i * 0.15}s`, animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      {/* Corner decorations */}
      <div className="absolute top-3 left-3 text-xl opacity-60" style={{ animation: "float 3s ease-in-out infinite" }}>💜</div>
      <div className="absolute top-3 right-3 text-xl opacity-60" style={{ animation: "float 3s ease-in-out infinite", animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-3 left-3 text-xl opacity-60" style={{ animation: "float 3s ease-in-out infinite", animationDelay: "1.5s" }}>🌙</div>
      <div className="absolute bottom-3 right-3 text-xl opacity-60" style={{ animation: "float 3s ease-in-out infinite", animationDelay: "0.5s" }}>💫</div>
    </div>
  );
}

export function MemoryGallery() {
  const [open, setOpen] = useState<string | null>(null);
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6">
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient-gold mb-4">Memory Gallery</h2>
        <p className="text-foreground/70 italic mb-10 sm:mb-16">Every picture of you is a reason to smile. 📸</p>

        {/* Big collage — full width */}
        <div className="mb-6 sm:mb-8">
          {!img1Error ? (
            <button
              onClick={() => setOpen(priiiCollage)}
              className="group relative w-full glass rounded-2xl sm:rounded-3xl overflow-hidden float hover:scale-[1.02] transition-transform duration-500 glow-gold block"
            >
              {/* Polaroid tape strips */}
              <div className="absolute top-0 left-1/3 w-16 h-4 z-10 rotate-[-2deg]" style={{ background: "oklch(0.85 0.16 85 / 0.5)", backdropFilter: "blur(2px)", borderRadius: "2px" }} />
              <div className="absolute top-0 right-1/4 w-12 h-4 z-10 rotate-[3deg]" style={{ background: "oklch(0.75 0.22 310 / 0.5)", backdropFilter: "blur(2px)", borderRadius: "2px" }} />
              <div className="aspect-[16/9] sm:aspect-[2/1] overflow-hidden">
                <img
                  src={priiiCollage}
                  alt="Priii collage"
                  loading="lazy"
                  onError={() => setImg1Error(true)}
                  className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-background/80 to-transparent">
                <p className="font-display text-base sm:text-xl text-gradient-gold italic">Two different moods. Both equally beautiful. 💜</p>
              </div>
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: "linear-gradient(135deg, transparent 30%, oklch(1 0 0 / 0.08) 50%, transparent 70%)"
              }} />
            </button>
          ) : (
            <div className="w-full">
              <CrazyEmptySlot label="Main Photo" />
              <p className="mt-3 text-foreground/40 text-xs">📌 Replace <code className="text-foreground/60">src/assets/priii-collage.jpg</code> with your photo</p>
            </div>
          )}
        </div>

        {/* Second photo row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Memory 2 slot */}
          <div className="col-span-1">
            {!img2Error ? (
              <button
                onClick={() => setOpen(memory2)}
                className="group relative w-full glass rounded-2xl sm:rounded-3xl overflow-hidden float hover:scale-[1.03] transition-transform duration-500 glow-purple block"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="absolute top-0 left-1/4 w-10 h-3 z-10 rotate-[2deg]" style={{ background: "oklch(0.75 0.22 310 / 0.5)", borderRadius: "2px" }} />
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={memory2}
                    alt="Memory 2"
                    loading="lazy"
                    onError={() => setImg2Error(true)}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-background/80 to-transparent">
                  <p className="font-display text-sm sm:text-base text-foreground/80 italic">A moment, captured. 🌙</p>
                </div>
              </button>
            ) : (
              <div>
                <CrazyEmptySlot label="Memory 2" />
                <p className="mt-3 text-foreground/40 text-xs">📌 Replace <code className="text-foreground/60">src/assets/memory-2.jpg</code></p>
              </div>
            )}
          </div>

          {/* Quote card */}
          <div className="col-span-1 glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center glow-border-animated float" style={{ animationDelay: "0.8s", minHeight: "300px" }}>
            <div className="text-4xl mb-4" style={{ filter: "drop-shadow(0 0 12px oklch(0.85 0.16 85))"}}>💌</div>
            <blockquote className="font-display text-lg sm:text-xl text-gradient-aurora italic text-center leading-relaxed">
              "if beauty had a definition, these pictures would be the example."
            </blockquote>
            <div className="mt-6 flex gap-3 text-2xl">
              {["💜", "✨", "🌙", "✨", "💜"].map((e, i) => (
                <span key={i} className="priii-crown" style={{ animationDelay: `${i * 0.3}s`, fontSize: "1.2rem" }}>{e}</span>
              ))}
            </div>
            <p className="mt-4 text-foreground/50 text-xs sm:text-sm italic">— saved. cherished. always.</p>
          </div>
        </div>
      </Reveal>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-xl p-4 sm:p-6 fade-in"
        >
          <div className="relative w-full max-w-4xl">
            <img src={open} alt="Memory" className="rounded-2xl sm:rounded-3xl glow-gold max-h-[85vh] w-full object-contain" />
            <p className="mt-4 sm:mt-6 text-center text-foreground/80 italic font-display text-base sm:text-lg">
              Some moments deserve a permanent place in memory.
            </p>
            <p className="mt-2 text-center text-foreground/40 text-xs sm:text-sm">tap anywhere to close</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- MOUNTAIN JOURNEY ---------- */
const MILESTONES = [
  { icon: "🏔️", title: "Stranger", msg: "Two strangers in a world of billions. That's how it always starts." },
  { icon: "☕", title: "Random Conversations", msg: "Random words turning into something I started looking forward to." },
  { icon: "😂", title: "Shared Laughs", msg: "Inside jokes that nobody else would understand. And honestly, that's the best part." },
  { icon: "🌙", title: "Late Night Talks", msg: "Funny how some of the best conversations happen when everyone else is asleep." },
  { icon: "🦋", title: "Butterfly Moments", msg: "Tiny moments. Big butterflies. I don't think you noticed... but I did." },
  { icon: "🎂", title: "Today", msg: "And here we are. Celebrating you. Exactly as you deserve to be celebrated." },
];

export function MountainJourney() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient-aurora mb-4">The Mountain Journey</h2>
        <p className="text-foreground/70 italic mb-10 sm:mb-16">A trail of moments. Tap each peak.</p>

        <div className="relative">
          {/* Winding trail SVG */}
          <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <path
              d="M 80 540 Q 200 460 280 400 T 480 280 T 720 80"
              stroke="url(#trail)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 8"
            />
            <defs>
              <linearGradient id="trail" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.55 0.18 295)" />
                <stop offset="100%" stopColor="oklch(0.85 0.16 85)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {MILESTONES.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                className={`glass rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 hover:glow-purple text-center ${
                  active === i ? "glow-gold scale-105" : ""
                }`}
                style={{ marginTop: `${(i % 2) * 20}px` }}
              >
                <div className="text-3xl sm:text-4xl mb-2">{m.icon}</div>
                <div className="font-display text-sm sm:text-lg text-gradient-gold leading-tight">{m.title}</div>
              </button>
            ))}
          </div>

          {active !== null && (
            <div className="mt-6 sm:mt-10 glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-2xl mx-auto fade-in glow-border-animated">
              <div className="text-2xl sm:text-3xl mb-3">{MILESTONES[active].icon} {MILESTONES[active].title}</div>
              <p className="text-foreground/85 font-display text-lg sm:text-xl italic">{MILESTONES[active].msg}</p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- BUTTERFLY COUNTER ---------- */
export function ButterflyCounter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [burst, setBurst] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const targets = [100, 500, 1000, 5000, 9999];
        let idx = 0;
        const step = () => {
          if (idx >= targets.length) {
            setTimeout(() => {
              setError(true);
              setBurst(true);
              setTimeout(() => setBurst(false), 9000);
            }, 600);
            return;
          }
          const target = targets[idx];
          const start = idx === 0 ? 0 : targets[idx - 1];
          const dur = 900;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            setCount(Math.round(start + (target - start) * p));
            if (p < 1) requestAnimationFrame(tick);
            else {
              idx++;
              setTimeout(step, 350);
            }
          };
          requestAnimationFrame(tick);
        };
        step();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6">
      <FloatingParticles count={8} />
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xl sm:text-2xl text-foreground/80 mb-6">
          Butterflies Caused By <PriiiName size="1em" /> 🦋
        </p>
        <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-12 glow-border-animated">
          {!error ? (
            <div
              className="font-display text-gradient-gold text-glow tabular-nums"
              style={{ fontSize: "clamp(3.5rem, 18vw, 8rem)" }}
            >
              {count.toLocaleString()}
            </div>
          ) : (
            <div className="fade-in">
              <div className="text-4xl sm:text-5xl mb-4">⚠️</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-display text-destructive">OVERFLOW ERROR</div>
              <p className="mt-4 text-foreground/80 text-base sm:text-lg">System cannot count this many butterflies.</p>
              <p className="mt-2 text-foreground/50 text-sm italic">That's on you, Priii. 🦋</p>
            </div>
          )}
        </div>
      </div>
      {burst && <BurstButterflies count={40} />}
    </section>
  );
}

/* ---------- CONSTELLATION OF COMPLIMENTS ---------- */
const COMPLIMENTS = [
  "You're easier to talk to than most people.",
  "Your mindset is refreshing.",
  "Your honesty stands out.",
  "Your childish side is adorable.",
  "You make ordinary conversations memorable.",
  "Your energy feels genuine.",
  "You have a beautiful way of seeing things.",
  "You're more amazing than you think.",
  "Your presence feels comforting.",
  "Some people are interesting. You are unforgettable.",
  "Talking to you feels effortless.",
  "You make late nights feel less lonely.",
  "Your laugh is dangerously contagious.",
  "You think in colors most people can't see.",
  "You don't try to be different. You just are.",
  "Your kindness sneaks up on people.",
  "You make everyday words sound new.",
  "You handle things gracefully, even when you don't realize it.",
  "Your curiosity is a quiet superpower.",
  "You have a softness that the world doesn't deserve, but needs.",
  "Your smile fixes things you didn't break.",
  "You make silence feel safe.",
  "You're the favorite character in your own story.",
  "Your thoughts are worth listening to.",
  "You make the ordinary feel oddly poetic.",
  "Even your overthinking is endearing.",
  "You're proof that good people still exist.",
  "Your vibe is rare. Don't water it down.",
  "You light up rooms without trying.",
  "You are, quite simply, the kind of person someone remembers forever.",
];

export function Constellation() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [popup, setPopup] = useState<string | null>(null);

  const stars = COMPLIMENTS.map((_, i) => ({
    top: 8 + Math.random() * 80,
    left: 5 + Math.random() * 90,
    size: 8 + Math.random() * 8,
  }));

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6">
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient-aurora mb-4">Constellation of Compliments</h2>
        <p className="text-foreground/70 italic mb-2">Tap a star. Catch a truth.</p>
        <p className="text-foreground/50 text-sm mb-8 sm:mb-10">
          {revealed.size} / {COMPLIMENTS.length} discovered
        </p>

        <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] glass rounded-2xl sm:rounded-3xl overflow-hidden">
          {stars.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setRevealed((r) => new Set(r).add(i));
                setPopup(COMPLIMENTS[i]);
              }}
              className="absolute rounded-full transition-all hover:scale-150"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                background: revealed.has(i) ? "oklch(0.85 0.16 85)" : "white",
                boxShadow: revealed.has(i)
                  ? "0 0 20px oklch(0.85 0.16 85)"
                  : "0 0 8px rgba(255,255,255,0.8)",
                animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                minWidth: "16px",
                minHeight: "16px",
              }}
              aria-label={`Star ${i + 1}`}
            />
          ))}
        </div>
      </Reveal>

      {popup && (
        <div
          onClick={() => setPopup(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4 sm:p-6 fade-in"
        >
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-lg w-full text-center glow-gold">
            <div className="text-3xl sm:text-4xl mb-4">⭐</div>
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-foreground/95">{popup}</p>
            <p className="mt-4 sm:mt-6 text-sm text-foreground/50">tap anywhere to close</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- WHAT'S SPECIAL ---------- */
export function WhatsSpecial() {
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-3xl">
        <div className="glass-strong rounded-3xl p-8 md:p-14">
          <p className="text-center font-display text-3xl md:text-4xl text-gradient-gold mb-10">
            What's special about me?
          </p>
          <Typewriter
            className="font-display text-xl md:text-2xl text-foreground/90 leading-relaxed text-center"
            lines={[
              "Honestly...",
              "I'm still figuring that out.",
              "Maybe it's how straightforward you are.",
              "Maybe it's your mindset.",
              "Maybe it's your honesty.",
              "Maybe it's your cute childish side.",
              "Maybe it's the way conversations with you never feel forced.",
              "Or maybe...",
              "Some people are simply special without needing a reason.",
            ]}
            charDelay={40}
            pauseBetween={900}
          />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- IF WE WERE IN THE MOUNTAINS ---------- */
export function IfMountains() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img src={memoryBg} alt="Mountain night" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div className="glass rounded-3xl p-8 md:p-14">
          <Typewriter
            className="font-display text-xl md:text-2xl text-foreground/95 leading-relaxed"
            lines={[
              "If we were sitting on a mountain right now...",
              "I'd probably point at the stars.",
              "Just to avoid admitting...",
              "That you'd still be the prettiest thing in my view.",
            ]}
            charDelay={50}
            pauseBetween={1300}
          />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- BOOK OF LIKES ---------- */
const PAGES = [
  "Your honesty.",
  "Your mindset.",
  "Your smile.",
  "Your way of talking.",
  "Your random thoughts.",
  "Your childish side.",
  "The comfort I feel talking to you.",
  "The way you make ordinary days feel special.",
  "And probably a hundred other things I haven't discovered yet.",
];

export function BookOfLikes() {
  const [page, setPage] = useState(0);
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">Things I Like About You</h2>
        <p className="text-foreground/70 italic mb-10">Turn the page.</p>

        <div className="relative aspect-[5/4] md:aspect-[3/2] glass-strong rounded-3xl overflow-hidden flex items-center justify-center p-10 glow-purple">
          <div key={page} className="fade-in text-center">
            <div className="text-sm text-foreground/50 mb-4 tracking-widest uppercase">
              Page {page + 1} / {PAGES.length}
            </div>
            <p className="font-display text-2xl md:text-4xl text-gradient-aurora leading-snug">
              {PAGES[page]}
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="glass rounded-full px-6 py-2 text-sm font-medium hover:scale-105 transition disabled:opacity-30"
          >
            ← Prev
          </button>
          <button
            onClick={() => setPage((p) => Math.min(PAGES.length - 1, p + 1))}
            disabled={page === PAGES.length - 1}
            className="glass rounded-full px-6 py-2 text-sm font-medium hover:scale-105 transition disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- SECRET BUTTON ---------- */
export function SecretButton() {
  const [clicked, setClicked] = useState(false);
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        {!clicked ? (
          <button
            onClick={() => setClicked(true)}
            className="glass-strong rounded-full px-10 py-6 font-display text-2xl text-foreground hover:scale-105 transition pulse-glow"
          >
            DO NOT CLICK 👀
          </button>
        ) : (
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <Typewriter
              className="font-display text-xl md:text-2xl text-foreground/95 leading-relaxed"
              lines={[
                "I knew you'd click this.",
                "That's one of the reasons I like you.",
                "Curious people are dangerous.",
                "Especially when they're cute.",
              ]}
              charDelay={45}
              pauseBetween={1100}
            />
          </div>
        )}
      </Reveal>
    </section>
  );
}

/* ---------- HIDDEN LETTER ---------- */
export function HiddenLetter() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl md:text-5xl text-gradient-aurora mb-10">A Hidden Letter</h2>

        {!open ? (
          <button onClick={() => setOpen(true)} className="group inline-block hover:scale-105 transition">
            <div className="relative w-72 h-48 mx-auto">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[oklch(0.85_0.16_85)] to-[oklch(0.7_0.18_70)] glow-gold" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-[oklch(0.9_0.14_85)] to-[oklch(0.75_0.18_70)] rounded-t-xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-3xl">💌</div>
            </div>
            <p className="mt-6 text-foreground/70 italic">tap to open</p>
          </button>
        ) : (
          <div className="glass-strong rounded-3xl p-8 md:p-12 text-left fade-in glow-gold">
            <Typewriter
              className="font-display text-lg md:text-xl text-foreground/95 leading-relaxed space-y-3"
              lines={[
                "You once asked me what was special about you.",
                "And honestly...",
                "I spent more time thinking about that question than I probably should have.",
                "The truth is...",
                "I don't think it's just one thing.",
                "It's the way you talk.",
                "The way you think.",
                "The way you make people feel comfortable.",
                "The way you somehow became important without even trying.",
                "And that's rare.",
              ]}
              charDelay={35}
              pauseBetween={800}
            />
          </div>
        )}
      </Reveal>
    </section>
  );
}

/* ---------- DESTINY ---------- */
export function Destiny() {
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div className="glass rounded-3xl p-10 md:p-16">
          <div className="text-5xl mb-6">🌠</div>
          <Typewriter
            className="font-display text-2xl md:text-3xl text-gradient-gold leading-relaxed"
            lines={[
              "Maybe we met by chance.",
              "Maybe not.",
              "Either way...",
              "I'm glad we did.",
            ]}
            charDelay={55}
            pauseBetween={1300}
          />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FINAL ENDING ---------- */
export function FinalEnding() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <img src={sunriseImg} alt="Mountain sunrise" className="absolute inset-0 h-full w-full object-cover opacity-50" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      <FloatingParticles count={20} />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-14">
          <Typewriter
            className="font-display text-base sm:text-lg md:text-2xl text-foreground/95 leading-relaxed"
            lines={[
              "I don't know where life will take us.",
              "I don't know how many conversations we'll have.",
              "I don't know what the future looks like.",
              "But I do know this...",
              "Meeting you was one of the most unexpected and beautiful things that happened to me this year.",
              "And if I could wish for one thing today...",
              "I'd wish for your smile to stay exactly the way it is.",
              "Because the world becomes a little better every time you use it.",
            ]}
            charDelay={35}
            pauseBetween={900}
          />

          <div className="mt-10 sm:mt-12">
            <div className="font-display font-light tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}>
              <span className="text-gradient-gold text-glow block">HAPPY BIRTHDAY</span>
              <span className="block mt-3">
                <PriiiName />
              </span>
            </div>
            <div className="mt-6 sm:mt-8 space-y-2 text-foreground/85 font-display text-base sm:text-lg md:text-xl">
              <p>Keep chasing mountains.</p>
              <p>Keep collecting memories.</p>
              <p>Keep being yourself.</p>
              <p className="text-gradient-aurora">The world needs more people like you.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- FINAL SECRET ---------- */
export function FinalSecret() {
  return (
    <section className="relative py-32 px-6">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Typewriter
          className="font-display text-lg md:text-2xl text-foreground/90 leading-relaxed italic"
          lines={[
            "You once said nobody is interested in you.",
            "I still think that's the biggest lie you've ever told me.",
          ]}
          charDelay={50}
          pauseBetween={1800}
        />
        <p className="mt-16 text-foreground/70 font-display text-base md:text-lg fade-in" style={{ animationDelay: "4s" }}>
          — From someone who's really glad he met you ❤️
        </p>
      </Reveal>
      <div className="h-32" />
    </section>
  );
}
