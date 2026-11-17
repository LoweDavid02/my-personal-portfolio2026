import { RotateCcw } from 'lucide-react';
import { getCategoryById } from '../../data/categories.js';
import { Button } from '../ui/Button.jsx';
import { EmptyState } from '../ui/EmptyState.jsx';

export function ProjectEmptyState({ category = 'all', search = '', tech = '', onReset }) {
  const categoryObj = category !== 'all' ? getCategoryById(category) : null;

  let title = 'No matching projects found';
  let description =
    'Try adjusting your search keywords, category selection, or technology filter to see available work.';

  if (categoryObj && !search && !tech) {
    title = `No standalone ${categoryObj.label} entries yet`;
    description = `Each project is assigned one primary category to keep the directory accurate. Related ${categoryObj.shortLabel} capabilities can still be explored inside All Projects or via technology filters.`;
  } else if (category !== 'all' && !categoryObj) {
    title = 'Unrecognized project category';
    description = `The requested category "${category}" does not match a defined portfolio category. Reset filters to view all documented projects.`;
  }

  return (
    <EmptyState
      title={title}
      description={description}
      action={
        <Button variant="primary" size="md" onClick={onReset}>
          <RotateCcw size={15} aria-hidden="true" />
          <span>Reset all filters</span>
        </Button>
      }
    />
  );
}
