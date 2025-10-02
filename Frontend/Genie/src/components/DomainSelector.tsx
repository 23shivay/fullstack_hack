import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useState } from "react";

const AVAILABLE_DOMAINS = [
  "Software Engineering",
  "Data Science",
  "Product Management",
  "Design",
  "Marketing",
  "Sales",
  "Finance",
  "Operations",
  "Human Resources",
  "Customer Success",
];

interface DomainSelectorProps {
  selectedDomains?: string[];
  onDomainsChange?: (domains: string[]) => void;
}

export default function DomainSelector({ selectedDomains = [], onDomainsChange }: DomainSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDomain = (domain: string) => {
    const newDomains = selectedDomains.includes(domain)
      ? selectedDomains.filter(d => d !== domain)
      : [...selectedDomains, domain];
    onDomainsChange?.(newDomains);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
        data-testid="button-domain-selector"
      >
        Domains {selectedDomains.length > 0 && `(${selectedDomains.length})`}
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute left-0 top-full mt-2 w-80 p-4 z-50 max-h-96 overflow-y-auto bg-[#181c24] rounded-2xl text-white shadow-xl">
            <div className="space-y-3">
              <h3 className="font-semibold text-sm text-white">Select Job Domains</h3>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_DOMAINS.map((domain) => (
                  <Badge
                    key={domain}
                    variant={selectedDomains.includes(domain) ? "default" : "outline"}
                    className="cursor-pointer hover-elevate"
                    onClick={() => toggleDomain(domain)}
                    data-testid={`badge-domain-${domain.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {domain}
                    {selectedDomains.includes(domain) && (
                      <X className="ml-1 h-3 w-3" />
                    )}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
