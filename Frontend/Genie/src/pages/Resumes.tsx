import { useState } from "react";
import Navbar from "@/components/Navbar";
import ResumeCard from "@/components/ResumeCard";
import ResumeUpload from "@/components/ResumeUpload";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Resumes() {
  const [showUpload, setShowUpload] = useState(false);

  const resumes = [
    {
      id: "1",
      name: "Sarah_Chen_Resume_2024.pdf",
      uploadedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      atsScore: 72,
    },
    {
      id: "2",
      name: "Sarah_Chen_Tech_Resume.pdf",
      uploadedDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      atsScore: 85,
    },
    {
      id: "3",
      name: "Sarah_Chen_Product_Resume.pdf",
      uploadedDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      atsScore: 68,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        user={{
          name: "Sarah Chen",
          email: "sarah.chen@example.com",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        }}
        onLogout={() => console.log('Logout')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Resumes</h1>
            <p className="text-muted-foreground">
              Manage and optimize your resumes for better job matches
            </p>
          </div>
          <Button
            onClick={() => setShowUpload(!showUpload)}
            className="gap-2"
            data-testid="button-add-resume"
          >
            <Plus className="h-5 w-5" />
            Add Resume
          </Button>
        </div>

        {showUpload && (
          <div className="mb-8">
            <ResumeUpload
              onUpload={(file) => {
                console.log('Uploaded:', file.name);
                setShowUpload(false);
              }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              {...resume}
              onOptimize={() => console.log('Optimize', resume.id)}
              onDelete={() => console.log('Delete', resume.id)}
              onDownload={() => console.log('Download', resume.id)}
            />
          ))}
        </div>

        {resumes.length === 0 && !showUpload && (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">No resumes uploaded yet</p>
            <Button onClick={() => setShowUpload(true)}>Upload Your First Resume</Button>
          </div>
        )}
      </div>
    </div>
  );
}
