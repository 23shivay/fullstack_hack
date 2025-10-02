import { useEffect, useMemo, useState } from "react";

const DEFAULT_MESSAGES = [
  "Polishing pixels…",
  "Teaching AI to fetch jobs…",
  "Convincing HR bots we're friendly…",
  "Optimizing resumes with extra sparkle…",
  "Untangling cover letter metaphors…",
  "Bribing the loading bar to move…",
  "Summoning interview luck…",
  "Rendering ambition in 3D…",
];

export default function LoadingOverlay({ messages = DEFAULT_MESSAGES }: { messages?: string[] }) {
  const [index, setIndex] = useState(0);
  const safeMessages = useMemo(() => (messages.length ? messages : DEFAULT_MESSAGES), [messages]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeMessages.length);
    }, 1200);
    return () => clearInterval(id);
  }, [safeMessages.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
      <div className="rounded-md border border-border bg-card/80 px-4 py-3 text-sm text-muted-foreground shadow-sm">
        {safeMessages[index]}
      </div>
    </div>
  );
}


