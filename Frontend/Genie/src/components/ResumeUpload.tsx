import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
import { useState } from "react";

interface ResumeUploadProps {
  onUpload?: (file: File) => void;
}

export default function ResumeUpload({ onUpload }: ResumeUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      onUpload?.(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onUpload?.(file);
    }
  };

  return (
    <Card
      className={`p-8 border-2 border-dashed transition-colors ${
        isDragging ? 'border-primary bg-primary/5' : 'border-border'
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      data-testid="card-resume-upload"
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="bg-primary/10 p-4 rounded-full">
          {selectedFile ? (
            <FileText className="h-8 w-8 text-primary" />
          ) : (
            <Upload className="h-8 w-8 text-primary" />
          )}
        </div>
        <div>
          <h3 className="font-semibold mb-1">
            {selectedFile ? selectedFile.name : 'Upload your resume'}
          </h3>
          <p className="text-sm text-muted-foreground">
            {selectedFile
              ? 'File ready to upload'
              : 'Drag and drop your PDF resume here or click to browse'}
          </p>
        </div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
          id="resume-upload"
          data-testid="input-resume-file"
        />
        <Button asChild>
          <label htmlFor="resume-upload" className="cursor-pointer">
            {selectedFile ? 'Change File' : 'Choose File'}
          </label>
        </Button>
      </div>
    </Card>
  );
}
