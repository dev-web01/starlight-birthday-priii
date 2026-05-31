import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { StarField } from "@/components/StarField";
import { Butterflies } from "@/components/Butterflies";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MusicPlayer } from "@/components/MusicPlayer";
import {
  Opening,
  NeverPlanned,
  MemoryGallery,
  MountainJourney,
  ButterflyCounter,
  Constellation,
  WhatsSpecial,
  IfMountains,
  BookOfLikes,
  SecretButton,
  HiddenLetter,
  Destiny,
  FinalEnding,
  FinalSecret,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday Priii 😚🤍" },
      { name: "description", content: "A cinematic birthday letter — mountains, stars, butterflies, and a few things never said out loud." },
      { property: "og:title", content: "Happy Birthday Priii 😚🤍" },
      { property: "og:description", content: "A small corner of the internet made for someone who unknowingly became a favorite part of my day." },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative">
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <StarField count={140} shootingCount={4} />
      <Butterflies count={7} />
      {loaded && <MusicPlayer autoStart />}

      <Opening />
      <NeverPlanned />
      <MemoryGallery />
      <MountainJourney />
      <ButterflyCounter />
      <Constellation />
      <WhatsSpecial />
      <IfMountains />
      <BookOfLikes />
      <SecretButton />
      <HiddenLetter />
      <Destiny />
      <FinalEnding />
      <FinalSecret />
    </main>
  );
}
