import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ThreeHero from "./ThreeHero";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  const isMobile = useIsMobile();
  return (
    <div className="relative overflow-hidden bg-transparent">
      {/* Full background */}
      <div className="fixed inset-0 -z-20">
        <ThreeHero />
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-28">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="premium-gradient-text">Find Your Dream Job</span>{" "}
            with
            <span
              className="premium-animated-text text-5xl sm:text-6xl lg:text-7xl font-extrabold ml-2"
              style={{ display: "inline-block" }}
            >
              Genie
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="premium-gradient-text">AI-powered</span> job
            search,
            <span className="premium-animated-text">
              {" "}
              resume optimization
            </span>{" "}
            and
            <span className="premium-gradient-text">
              {" "}
              tailored cover letters
            </span>
            .
          </p>
          <h2 className="relative text-center text-5xl sm:text-6xl font-extrabold mt-8">
            <span
              className="bg-clip-text text-transparent bg-cover bg-center"
              style={{
                backgroundImage: "url('/premium-car.jpg')",
              }}
            >
              Stop Searching. Start Matching.
            </span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={onGetStarted}
              data-testid="button-get-started"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-8 w-8" />
            </Button>
            <Button
              size="lg"
              onClick={onGetStarted}
              data-testid="button-get-started"
            >
              View Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Stats section */}
      {/* Stats section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        {!isMobile && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="pt-8 flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow">
                  10k+
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Active Jobs
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow">
                  95%
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Match Accuracy
                </p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow">
                  5k+
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Happy Users
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
