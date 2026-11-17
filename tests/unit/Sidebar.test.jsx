import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PortfolioAppShell } from '../../src/app/App.jsx';

function renderAtRoute(initialEntry = '/') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <PortfolioAppShell />
    </MemoryRouter>
  );
}

describe('Collapsible Sidebar & Navigation', () => {
  it('renders expanded sidebar by default and persists collapsed state', async () => {
    const user = userEvent.setup();
    const { unmount } = renderAtRoute('/');

    const aside = await screen.findByLabelText('Sidebar');
    expect(aside).toHaveAttribute('data-collapsed', 'false');

    const collapseBtn = screen.getByRole('button', { name: 'Collapse sidebar' });
    await user.click(collapseBtn);

    expect(aside).toHaveAttribute('data-collapsed', 'true');
    expect(window.localStorage.getItem('ld-portfolio-sidebar-collapsed')).toBe('true');

    // Remounting preserves persisted collapsed state
    unmount();
    renderAtRoute('/about');
    const remountedAside = await screen.findByLabelText('Sidebar');
    expect(remountedAside).toHaveAttribute('data-collapsed', 'true');
  });

  it('expands sidebar when clicking a group icon in collapsed mode', async () => {
    window.localStorage.setItem('ld-portfolio-sidebar-collapsed', 'true');
    const user = userEvent.setup();
    renderAtRoute('/');

    const aside = await screen.findByLabelText('Sidebar');
    expect(aside).toHaveAttribute('data-collapsed', 'true');

    const expandProjectsBtn = screen.getByRole('button', {
      name: 'Expand sidebar and open Projects',
    });
    await user.click(expandProjectsBtn);

    expect(aside).toHaveAttribute('data-collapsed', 'false');
    expect(await screen.findByRole('link', { name: 'Full-Stack Web' })).toBeInTheDocument();
  });

  it('toggles accordion groups and highlights active nested routes', async () => {
    const user = userEvent.setup();
    renderAtRoute('/projects?category=full-stack-web');

    const fullStackLink = await screen.findByRole('link', { name: 'Full-Stack Web' });
    expect(fullStackLink).toHaveAttribute('aria-current', 'page');

    const projectsGroupBtn = screen.getByRole('button', { name: 'Projects' });
    expect(projectsGroupBtn).toHaveAttribute('aria-expanded', 'true');

    await user.click(projectsGroupBtn);
    await waitFor(() => {
      expect(projectsGroupBtn).toHaveAttribute('aria-expanded', 'false');
    });

    await user.click(projectsGroupBtn);
    expect(projectsGroupBtn).toHaveAttribute('aria-expanded', 'true');
  });

  it('opens mobile drawer and closes on Escape or navigation', async () => {
    const user = userEvent.setup();
    renderAtRoute('/');

    const openMenuBtn = await screen.findByRole('button', { name: 'Open navigation menu' });
    await user.click(openMenuBtn);

    const dialog = await screen.findByRole('dialog', { name: 'Site navigation' });
    expect(dialog).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: 'Site navigation' })).not.toBeInTheDocument();
    });

    // Re-open and close via clicking Contact inside mobile drawer
    await user.click(openMenuBtn);
    const mobileDialog = await screen.findByRole('dialog', { name: 'Site navigation' });
    const contactLink = mobileDialog.querySelector('a[href="/contact"]');
    expect(contactLink).not.toBeNull();
    await user.click(contactLink);

    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: 'Site navigation' })).not.toBeInTheDocument();
    });
    expect(await screen.findByRole('heading', { name: 'Contact', level: 1 })).toBeInTheDocument();
  });
});
