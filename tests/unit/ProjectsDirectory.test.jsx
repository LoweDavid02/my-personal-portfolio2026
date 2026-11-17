import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { PortfolioAppShell } from '../../src/app/App.jsx';

function LocationSpy() {
  const loc = useLocation();
  return <div data-testid="location-spy">{`${loc.pathname}${loc.search}`}</div>;
}

function renderProjectsApp(initialEntry = '/projects') {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <PortfolioAppShell />
      <LocationSpy />
    </MemoryRouter>
  );
}

describe('Projects Directory & Case Study Routing', () => {
  it('renders all documented projects and synchronizes category & tech filters with URL', async () => {
    const user = userEvent.setup();
    renderProjectsApp('/projects');

    expect(
      await screen.findByRole('heading', { name: 'Project Directory', level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByText(/Showing/i)).toHaveTextContent('Showing 3 of 3 projects');

    // Filter by Mobile Apps category
    await user.click(screen.getByRole('button', { name: /Mobile Apps/i }));
    expect(screen.getByTestId('location-spy')).toHaveTextContent('/projects?category=mobile');
    expect(screen.getByText(/Showing/i)).toHaveTextContent('Showing 1 of 3 projects');
    expect(screen.getByText('OpenDoor Mobile')).toBeInTheDocument();

    // Reset all filters
    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getByTestId('location-spy')).toHaveTextContent('/projects');
    expect(screen.getByText(/Showing/i)).toHaveTextContent('Showing 3 of 3 projects');

    // Filter by Technology (PostgreSQL)
    await user.click(screen.getByRole('button', { name: 'PostgreSQL' }));
    expect(screen.getByTestId('location-spy')).toHaveTextContent('tech=postgresql');
    expect(screen.getByText(/Showing/i)).toHaveTextContent('Showing 1 of 3 projects');
  });

  it('filters via search input, supports sorting, and shows empty state on no match', async () => {
    const user = userEvent.setup({ delay: null });
    renderProjectsApp('/projects');

    const searchInput = await screen.findByLabelText('Search projects');
    await user.type(searchInput, 'San Vicente');

    expect(screen.getByText(/Showing/i)).toHaveTextContent('Showing 1 of 3 projects');
    expect(screen.getByText('Barangay San Vicente Ticketing System')).toBeInTheDocument();

    await user.clear(searchInput);
    await user.type(searchInput, 'unmatched-keyword-xyz');
    expect(await screen.findByText('No matching projects found')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Reset all filters' }));
    expect(screen.getByText(/Showing/i)).toHaveTextContent('Showing 3 of 3 projects');

    const sortSelect = screen.getByLabelText('Sort by');
    await user.selectOptions(sortSelect, 'title-asc');
    expect(screen.getByTestId('location-spy')).toHaveTextContent('sort=title-asc');
  });

  it('navigates to project case study page and handles unknown slug gracefully', async () => {
    const user = userEvent.setup();
    renderProjectsApp('/projects');

    const barangayLink = await screen.findByRole('link', {
      name: 'Barangay San Vicente Ticketing System',
    });
    await user.click(barangayLink);

    await waitFor(() => {
      expect(screen.getByTestId('location-spy')).toHaveTextContent(
        '/projects/barangay-ticketing-system'
      );
    });

    expect(
      await screen.findByRole('heading', {
        name: 'Web-Based Service Request & Ticketing Management System',
        level: 1,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Architecture' })).toBeInTheDocument();
  });

  it('displays project not-found state for invalid slug', async () => {
    renderProjectsApp('/projects/non-existent-slug');
    expect(await screen.findByText('Project Case Study Not Found')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Back to All Projects' })).toBeInTheDocument();
  });
});
