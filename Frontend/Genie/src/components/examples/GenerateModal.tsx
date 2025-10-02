import GenerateModal from '../GenerateModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function GenerateModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <GenerateModal
          title="Generate Cover Letter"
          jobTitle="Senior Full Stack Engineer"
          company="TechCorp Inc."
          onClose={() => setIsOpen(false)}
          onGenerate={(prompt) => console.log('Generate with prompt:', prompt)}
        />
      )}
    </div>
  );
}
