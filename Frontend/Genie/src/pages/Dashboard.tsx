import { useState } from "react";
import Navbar from "@/components/Navbar";
import DomainSelector from "@/components/DomainSelector";
import FilterPanel from "@/components/FilterPanel";
import JobCard from "@/components/JobCard";
import StatsCard from "@/components/StatsCard";
import GenerateModal from "@/components/GenerateModal";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Send, Filter } from "lucide-react";

export default function Dashboard() {
  const [selectedDomains, setSelectedDomains] = useState(["Software Engineering", "Data Science"]);
  const [showFilters, setShowFilters] = useState(false);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: "", jobTitle: "", company: "" });
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set(["1"]));

  const jobs = [
    {
      id: "1",
      title: "Senior Full Stack Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      domain: "Software Engineering",
      seniority: "Senior",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      applicationUrl: "https://example.com/apply/1",
      matchScore: 85,
    },
    {
      id: "2",
      title: "Machine Learning Engineer",
      company: "DataAI Solutions",
      location: "New York, NY (Hybrid)",
      domain: "Data Science",
      seniority: "Mid Level",
      skills: ["Python", "TensorFlow", "PyTorch", "SQL", "Docker"],
      postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      applicationUrl: "https://example.com/apply/2",
      matchScore: 78,
    },
    {
      id: "3",
      title: "Frontend Developer",
      company: "DesignStudio",
      location: "Remote",
      domain: "Software Engineering",
      seniority: "Mid Level",
      skills: ["React", "TypeScript", "Tailwind CSS", "Figma"],
      postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      applicationUrl: "https://example.com/apply/3",
      matchScore: 92,
    },
  ];

  const handleGenerateCoverLetter = (job: typeof jobs[0]) => {
    setModalConfig({
      title: "Generate Cover Letter",
      jobTitle: job.title,
      company: job.company,
    });
    setShowGenerateModal(true);
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(jobId)) {
        newSet.delete(jobId);
      } else {
        newSet.add(jobId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar
        user={{
          name: "Sarah Chen",
          email: "sarah.chen@example.com",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        }}
        onLogout={() => console.log('Logout')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard title="Saved Jobs" value={savedJobs.size} icon={Briefcase} trend={{ value: 12, label: "from last week" }} />
          <StatsCard title="Resumes" value={3} icon={FileText} />
          <StatsCard title="Applications" value={8} icon={Send} trend={{ value: -5, label: "from last week" }} />
        </div>

        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <DomainSelector
            selectedDomains={selectedDomains}
            onDomainsChange={setSelectedDomains}
          />
          <Button
            variant="outline"
            className="lg:hidden gap-2"
            onClick={() => setShowFilters(!showFilters)}
            data-testid="button-toggle-filters"
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
            <FilterPanel
              onSearchChange={(query) => console.log('Search:', query)}
              onFilterChange={(filters) => console.log('Filters:', filters)}
            />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recommended Jobs</h2>
              <p className="text-sm text-muted-foreground">{jobs.length} jobs found</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  {...job}
                  saved={savedJobs.has(job.id)}
                  onSave={() => toggleSaveJob(job.id)}
                  onViewMatch={() => console.log('View match for', job.id)}
                  onGenerateCoverLetter={() => handleGenerateCoverLetter(job)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {showGenerateModal && (
        <GenerateModal
          {...modalConfig}
          onClose={() => setShowGenerateModal(false)}
          onGenerate={(prompt) => console.log('Generate:', prompt)}
        />
      )}
    </div>
  );
}
