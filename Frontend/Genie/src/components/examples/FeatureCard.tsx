import FeatureCard from '../FeatureCard';
import { Sparkles } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <div className="max-w-sm">
      <FeatureCard
        title="AI-Powered Matching"
        description="Our advanced AI analyzes your resume and matches you with the perfect job opportunities based on your skills and experience."
        icon={Sparkles}
      />
    </div>
  );
}
