export default function ProjectFilters({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = active === category.id;
        return (
          <button 
            key={category.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive 
                ? 'bg-violet-500 text-ink-100'
                : 'border border-border text-ink-400 hover:border-violet-400/50 hover:text-ink-100' 
            }`} 
          >
            {category.label} 
          </button>
        );
      })}
    </div>
  );
}