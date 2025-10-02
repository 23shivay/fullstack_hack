import FilterPanel from '../FilterPanel';

export default function FilterPanelExample() {
  return (
    <div className="max-w-xs">
      <FilterPanel
        onSearchChange={(query) => console.log('Search:', query)}
        onFilterChange={(filters) => console.log('Filters:', filters)}
      />
    </div>
  );
}
