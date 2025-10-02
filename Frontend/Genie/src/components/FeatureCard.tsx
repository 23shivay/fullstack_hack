import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="p-6 hover-elevate bg-transparent text-white font-semibold">
      <div className="space-y-4 text-white font-semibold">
        <div className="bg-transparent p-3 rounded-lg text-white font-semibold">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className=" text-gray-400">{description}</p>
      </div>
    </Card>
  );
}
