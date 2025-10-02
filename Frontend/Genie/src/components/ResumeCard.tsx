import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Trash2, Sparkles, Download } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface ResumeCardProps {
  id: string;
  name: string;
  uploadedDate: Date;
  atsScore?: number;
  onOptimize?: () => void;
  onDelete?: () => void;
  onDownload?: () => void;
}

export default function ResumeCard({
  name,
  uploadedDate,
  atsScore,
  onOptimize,
  onDelete,
  onDownload,
}: ResumeCardProps) {
  return (
    <Card className="p-6 bg-[#181c24] rounded-2xl hover-elevate font-semibold">
      <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="bg-primary/10 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1 line-clamp-1 text-foreground" data-testid="text-resume-name">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Uploaded {formatDistanceToNow(uploadedDate, { addSuffix: true })}
                </p>
              </div>
            </div>
          </div>

          {atsScore !== undefined && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ATS Compatibility</span>
                <Badge
                  variant={atsScore >= 70 ? "default" : atsScore >= 40 ? "outline" : "destructive"}
                  className={atsScore >= 70 ? "bg-chart-2" : ""}
                >
                  {atsScore}%
                </Badge>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    atsScore >= 70 ? 'bg-chart-2' : atsScore >= 40 ? 'bg-chart-3' : 'bg-destructive'
                  }`}
                  style={{ width: `${atsScore}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={onOptimize}
              className="flex-1"
              data-testid="button-optimize-resume"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Optimize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDownload}
              data-testid="button-download-resume"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onDelete}
              data-testid="button-delete-resume"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
    </Card>
  );
    
}
