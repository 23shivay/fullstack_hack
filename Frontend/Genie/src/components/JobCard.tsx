import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bookmark, ExternalLink, Sparkles, MapPin, Briefcase, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  domain: string;
  seniority: string;
  skills: string[];
  postedDate: Date;
  applicationUrl: string;
  saved?: boolean;
  matchScore?: number;
  onSave?: () => void;
  onViewMatch?: () => void;
  onGenerateCoverLetter?: () => void;
  onGenerateColdEmail?: () => void;
}

export default function JobCard({
  title,
  company,
  location,
  domain,
  seniority,
  skills,
  postedDate,
  applicationUrl,
  saved = false,
  matchScore,
  onSave,
  onViewMatch,
  onGenerateCoverLetter,
  onGenerateColdEmail,
}: JobCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold mb-1 line-clamp-2" data-testid="text-job-title">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-company">
              {company}
            </p>
          </div>
          <Button
            size="icon"
            variant={saved ? "default" : "outline"}
            onClick={onSave}
            data-testid="button-save-job"
          >
            <Bookmark className={saved ? "fill-current" : ""} />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            {seniority}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {formatDistanceToNow(postedDate, { addSuffix: true })}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{domain}</Badge>
          {skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline" className="bg-primary/10">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline">+{skills.length - 3} more</Badge>
          )}
        </div>

        {matchScore !== undefined && (
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Match Score</p>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    matchScore >= 70 ? 'bg-chart-2' : matchScore >= 40 ? 'bg-chart-3' : 'bg-destructive'
                  }`}
                  style={{ width: `${matchScore}%` }}
                />
              </div>
            </div>
            <span className="text-2xl font-bold" data-testid="text-match-score">
              {matchScore}%
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          <Button
            variant="default"
            className="flex-1"
            onClick={() => window.open(applicationUrl, '_blank')}
            data-testid="button-apply"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply
          </Button>
          {matchScore !== undefined && (
            <Button
              variant="outline"
              onClick={onViewMatch}
              data-testid="button-view-match"
            >
              View Match
            </Button>
          )}
          <Button
            variant="outline"
            onClick={onGenerateCoverLetter}
            data-testid="button-generate-cover-letter"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Cover Letter
          </Button>
          <Button
            variant="outline"
            onClick={onGenerateColdEmail}
            data-testid="button-generate-cold-email"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Cold Email
          </Button>
        </div>
      </div>
    </Card>
  );
}
