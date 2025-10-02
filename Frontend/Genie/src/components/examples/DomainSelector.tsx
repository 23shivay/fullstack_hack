import DomainSelector from '../DomainSelector';
import { useState } from 'react';

export default function DomainSelectorExample() {
  const [domains, setDomains] = useState(["Software Engineering", "Data Science"]);
  
  return (
    <DomainSelector
      selectedDomains={domains}
      onDomainsChange={(newDomains) => {
        setDomains(newDomains);
        console.log('Domains changed:', newDomains);
      }}
    />
  );
}
