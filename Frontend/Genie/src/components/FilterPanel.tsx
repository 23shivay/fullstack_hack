import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface FilterPanelProps {
  onSearchChange?: (query: string) => void;
  onFilterChange?: (filters: any) => void;
}

const LOCATIONS = ["Remote", "San Francisco", "New York", "London", "Berlin", "Hybrid"];
const SENIORITY_LEVELS = ["Entry Level", "Mid Level", "Senior", "Lead", "Principal"];
const POPULAR_SKILLS = ["React", "Python", "TypeScript", "Node.js", "AWS", "SQL", "Machine Learning"];

export default function FilterPanel({ onSearchChange, onFilterChange }: FilterPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedSeniority, setSelectedSeniority] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSelection = (item: string, currentList: string[], setter: (list: string[]) => void) => {
    const newList = currentList.includes(item)
      ? currentList.filter(i => i !== item)
      : [...currentList, item];
    setter(newList);
    onFilterChange?.({ locations: selectedLocations, seniority: selectedSeniority, skills: selectedSkills });
  };

  const clearAll = () => {
    setSelectedLocations([]);
    setSelectedSeniority([]);
    setSelectedSkills([]);
    setSearchQuery("");
    onSearchChange?.("");
    onFilterChange?.({});
  };

  const hasFilters = selectedLocations.length > 0 || selectedSeniority.length > 0 || selectedSkills.length > 0 || searchQuery;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            onSearchChange?.(e.target.value);
          }}
          className="pl-9"
          data-testid="input-search-jobs"
        />
      </div>

      {hasFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={clearAll}
          className="w-full gap-2"
          data-testid="button-clear-filters"
        >
          <X className="h-4 w-4" />
          Clear All Filters
        </Button>
      )}

      <Card className="p-4">
        <h3 className="font-semibold mb-3">Location</h3>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((location) => (
            <Badge
              key={location}
              variant={selectedLocations.includes(location) ? "default" : "outline"}
              className="cursor-pointer hover-elevate"
              onClick={() => toggleSelection(location, selectedLocations, setSelectedLocations)}
              data-testid={`badge-location-${location.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {location}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-3">Seniority</h3>
        <div className="flex flex-wrap gap-2">
          {SENIORITY_LEVELS.map((level) => (
            <Badge
              key={level}
              variant={selectedSeniority.includes(level) ? "default" : "outline"}
              className="cursor-pointer hover-elevate"
              onClick={() => toggleSelection(level, selectedSeniority, setSelectedSeniority)}
              data-testid={`badge-seniority-${level.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {level}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {POPULAR_SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant={selectedSkills.includes(skill) ? "default" : "outline"}
              className="cursor-pointer hover-elevate"
              onClick={() => toggleSelection(skill, selectedSkills, setSelectedSkills)}
              data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}
