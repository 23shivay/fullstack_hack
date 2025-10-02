import ResumeCard from '../ResumeCard';

export default function ResumeCardExample() {
  return (
    <div className="max-w-md">
      <ResumeCard
        id="1"
        name="Sarah_Chen_Resume_2024.pdf"
        uploadedDate={new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)}
        atsScore={72}
        onOptimize={() => console.log('Optimize clicked')}
        onDelete={() => console.log('Delete clicked')}
        onDownload={() => console.log('Download clicked')}
      />
    </div>
  );
}
