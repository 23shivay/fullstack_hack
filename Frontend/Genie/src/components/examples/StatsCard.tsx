import StatsCard from '../StatsCard';
import { Briefcase } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="max-w-xs">
      <StatsCard
        title="Saved Jobs"
        value={24}
        icon={Briefcase}
        trend={{ value: 12, label: 'from last week' }}
      />
    </div>
  );
}
