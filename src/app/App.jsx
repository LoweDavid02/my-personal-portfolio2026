import { MotionConfig } from 'motion/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarProvider } from '../context/SidebarProvider.jsx';
import { ThemeProvider } from '../context/ThemeProvider.jsx';
import { PortfolioRoutes } from './router.jsx';

export function PortfolioAppShell() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <SidebarProvider>
          <PortfolioRoutes />
        </SidebarProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default function App() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const basename = baseUrl !== '/' && baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  return (
    <BrowserRouter basename={basename === '/' ? undefined : basename}>
      <PortfolioAppShell />
    </BrowserRouter>
  );
}
