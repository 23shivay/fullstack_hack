import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, Copy, Loader2 } from "lucide-react";
import { useState } from "react";

interface GenerateModalProps {
  title: string;
  jobTitle: string;
  company: string;
  onClose: () => void;
  onGenerate?: (customPrompt?: string) => void;
}

export default function GenerateModal({ title, jobTitle, company, onClose, onGenerate }: GenerateModalProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    onGenerate?.(customPrompt);
    
    setTimeout(() => {
      setGeneratedContent(`Dear Hiring Manager,\n\nI am writing to express my strong interest in the ${jobTitle} position at ${company}. With my extensive background in software development and proven track record of delivering high-impact projects, I am confident in my ability to contribute to your team's success.\n\nMy experience aligns perfectly with the requirements outlined in your job posting. I have successfully led multiple cross-functional teams, implemented scalable solutions, and consistently delivered results that exceed expectations.\n\nI would welcome the opportunity to discuss how my skills and experience can benefit ${company}. Thank you for considering my application.\n\nBest regards`);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    console.log('Copied to clipboard');
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-card-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button size="icon" variant="ghost" onClick={onClose} data-testid="button-close-modal">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Job Details</h3>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">{jobTitle}</span> at {company}
            </p>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Additional Instructions (Optional)
            </label>
            <Textarea
              placeholder="Add any specific points you want to highlight..."
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              rows={3}
              data-testid="input-custom-prompt"
            />
          </div>

          {!generatedContent && (
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full"
              data-testid="button-generate"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate'
              )}
            </Button>
          )}

          {generatedContent && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Generated Content</h3>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={copyToClipboard}
                  data-testid="button-copy"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
              <Card className="p-4 bg-muted/50">
                <p className="whitespace-pre-wrap text-sm" data-testid="text-generated-content">
                  {generatedContent}
                </p>
              </Card>
              <Button
                variant="outline"
                onClick={handleGenerate}
                className="w-full"
                data-testid="button-regenerate"
              >
                Regenerate
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
