import { FeaturedProjects } from '../components/projects/FeaturedProjects.jsx';
import { AboutPreviewSection } from '../components/sections/AboutPreviewSection.jsx';
import { ContactCtaSection } from '../components/sections/ContactCtaSection.jsx';
import { DevelopmentApproachSection } from '../components/sections/DevelopmentApproachSection.jsx';
import { HeroSection } from '../components/sections/HeroSection.jsx';
import { TechnicalExpertiseSection } from '../components/sections/TechnicalExpertiseSection.jsx';
import { MainContainer } from '../components/layout/MainContainer.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

export default function Home() {
  usePageMeta({
    title: null,
    description:
      'Portfolio of Lowe David C. Tubat, Full-Stack Web Developer specializing in React, Laravel, PostgreSQL, MySQL, and React Native.',
    canonicalPath: '/',
  });

  return (
    <MainContainer className="space-y-16 lg:space-y-20">
      <HeroSection />
      <FeaturedProjects />
      <TechnicalExpertiseSection />
      <DevelopmentApproachSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </MainContainer>
  );
}
