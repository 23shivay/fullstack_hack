import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Target,
  FileText,
  Mail,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: Target,
      title: "Smart Job Matching",
      description:
        "Our AI analyzes thousands of jobs and matches you with opportunities that fit your skills, experience, and career goals.",
    },
    {
      icon: FileText,
      title: "Resume Optimizer",
      description:
        "Get AI-powered suggestions to improve your resume's ATS compatibility and increase your chances of landing interviews.",
    },
    {
      icon: Mail,
      title: "AI Cover Letters and Cold Emails",
      description:
        "Generate personalized cover letters and cold emails tailored to each job application in seconds.",
    },
    {
      icon: TrendingUp,
      title: "Match Score Analytics",
      description:
        "See how well you match with each job opening with our percentage-based scoring system.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data is encrypted and secure. We never share your information without permission.",
    },
    {
      icon: Sparkles,
      title: "Continuous Updates",
      description:
        "Get notified about new job postings that match your profile as soon as they're available.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar onLogin={() => console.log("Login clicked")} />

      <HeroSection onGetStarted={() => console.log("Get started clicked")} />

      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-transparent relative">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4 premium-gradient-text
        bg-clip-text text-transparent"
            >
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Genie combines{" "}
              <span className="text-white font-semibold">powerful AI</span>{" "}
              technology with an{" "}
              <span className="text-white font-semibold">
                intuitive interface
              </span>{" "}
              to make job searching{" "}
              <span className="text-purple-300">effortless</span> and
              <span className="text-indigo-300"> effective</span>.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-gray-900 via-black to-gray-900 
            border border-gray-800 rounded-2xl p-6 
            shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 
            transition-all duration-300"
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-0 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 premium-gradient-text bg-clip-text text-transparent">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of job seekers who have found their dream roles with
            Genie.
          </p>
          <br />

          <Button
            size="lg"
            onClick={() => console.log("Get started clicked")}
            className="p-3"
            data-testid="button-cta-bottom"
          >
            Get Started Free
          </Button>

          {/* OR text */}
          <div className="my-6">
            <p className="text-gray-400 font-semibold text-lg">OR</p>
          </div>

          {/* Meet the Developers link */}
          <div>
  <a
    href="/developers"
    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold premium-gradient-text hover:scale-105 transition-transform duration-300"
  >
    Meet the Developers
  </a>
</div>

        </div>
      </section>

      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Genie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
