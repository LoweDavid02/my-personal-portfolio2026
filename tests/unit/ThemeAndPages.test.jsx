import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PortfolioAppShell } from '../../src/app/App.jsx';

describe('Theme Toggle, Resume & Contact Pages', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('toggles theme and persists preference in localStorage', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <PortfolioAppShell />
      </MemoryRouter>
    );

    const lightBtn = await screen.findByRole('button', { name: 'Light' });
    await user.click(lightBtn);

    expect(window.localStorage.getItem('ld-portfolio-theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    const darkBtn = screen.getByRole('button', { name: 'Dark' });
    await user.click(darkBtn);

    expect(window.localStorage.getItem('ld-portfolio-theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('shows Download and Open PDF actions when resume PDF exists, and fallback notice when missing', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: true,
      headers: new Headers({ 'content-type': 'application/pdf' }),
    });

    const { unmount } = render(
      <MemoryRouter initialEntries={['/resume']}>
        <PortfolioAppShell />
      </MemoryRouter>
    );

    expect(await screen.findByRole('link', { name: 'Download PDF' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Open PDF' })).toBeInTheDocument();
    unmount();

    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      ok: false,
      headers: new Headers({ 'content-type': 'text/html' }),
    });

    render(
      <MemoryRouter initialEntries={['/resume']}>
        <PortfolioAppShell />
      </MemoryRouter>
    );

    expect(await screen.findByText('Resume PDF file not yet available')).toBeInTheDocument();
  });

  it('renders verified contact links and constructs functional mailto href', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <PortfolioAppShell />
      </MemoryRouter>
    );

    const directEmailLink = await screen.findByRole('link', { name: 'Direct Email Link' });
    expect(directEmailLink).toHaveAttribute('href', 'mailto:lowedavidctubat02@gmail.com');

    await user.type(screen.getByLabelText('Subject'), 'Internship Inquiry');
    await user.type(screen.getByLabelText('Message'), 'Hello Lowe');

    await waitFor(() => {
      const composeLink = screen.getByRole('link', { name: 'Open in Email Client' });
      expect(composeLink.getAttribute('href')).toContain('subject=Internship+Inquiry');
      expect(composeLink.getAttribute('href')).toContain('body=Hello+Lowe');
    });
  });
});
