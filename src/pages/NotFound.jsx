import { ArrowLeft, Compass } from 'lucide-react';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { Button } from '../components/ui/Button.jsx';
import { EmptyState } from '../components/ui/EmptyState.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The requested portfolio route could not be found.',
    canonicalPath: '/404',
  });

  return (
    <MainContainer className="py-12">
      <EmptyState
        icon={Compass}
        title="404 — Page Not Found"
        description="The page you requested does not exist or may have moved. Use the sidebar navigation or return to the homepage."
        action={
          <>
            <Button variant="primary" size="md" to="/">
              <ArrowLeft size={15} aria-hidden="true" />
              <span>Return Home</span>
            </Button>
            <Button variant="secondary" size="md" to="/projects">
              <span>Browse Projects</span>
            </Button>
          </>
        }
      />
    </MainContainer>
  );
}
