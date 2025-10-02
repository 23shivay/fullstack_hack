import JobCard from '../JobCard';

export default function JobCardExample() {
  return (
    <div className="max-w-2xl">
      <JobCard
        id="1"
        title="Senior Full Stack Engineer"
        company="TechCorp Inc."
        location="San Francisco, CA (Remote)"
        domain="Software Engineering"
        seniority="Senior"
        skills={["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"]}
        postedDate={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)}
        applicationUrl="https://example.com/apply"
        saved={false}
        matchScore={85}
        onSave={() => console.log('Save clicked')}
        onViewMatch={() => console.log('View match clicked')}
        onGenerateCoverLetter={() => console.log('Generate cover letter clicked')}
        onGenerateColdEmail={() => console.log('Generate cold email clicked')}
      />
    </div>
  );
}
