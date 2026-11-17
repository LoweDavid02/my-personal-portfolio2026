import { expect, test } from '@playwright/test';

test.describe('Portfolio E2E Verification', () => {
  test('desktop sidebar collapse, portal tooltips, persistence, keyboard controls, and hierarchical project navigation work cleanly', async ({
    page,
  }) => {
    const errors = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    await expect(
      page.getByRole('heading', {
        name: 'Building digital solutions that solve real-world problems.',
        level: 1,
      })
    ).toBeVisible();

    const sidebar = page.getByRole('complementary', { name: 'Sidebar' });
    await expect(sidebar).toHaveAttribute('data-collapsed', 'false');

    // Keyboard collapse sidebar and verify reload persistence
    const collapseBtn = page.getByRole('button', { name: 'Collapse sidebar' });
    await collapseBtn.focus();
    await page.keyboard.press('Enter');
    await expect(sidebar).toHaveAttribute('data-collapsed', 'true');

    // Verify collapsed tooltip renders unclipped outside the 72px rail
    await expect(sidebar).toHaveCSS('width', '72px');
    await page.getByRole('link', { name: 'Resume / CV' }).hover();
    const tooltip = page.getByRole('tooltip', { name: 'Resume / CV' });
    await expect(tooltip).toBeVisible();
    const tooltipBox = await tooltip.boundingBox();
    expect(tooltipBox.x).toBeGreaterThanOrEqual(72);

    await page.reload();
    await expect(page.getByRole('complementary', { name: 'Sidebar' })).toHaveAttribute(
      'data-collapsed',
      'true'
    );

    // Expand via collapsed group button and navigate to Full-Stack Web category
    await page.getByRole('button', { name: 'Expand sidebar and open Projects' }).click();
    await expect(page.getByRole('complementary', { name: 'Sidebar' })).toHaveAttribute(
      'data-collapsed',
      'false'
    );

    await page.getByRole('link', { name: 'Full-Stack Web', exact: true }).click();
    await expect(page).toHaveURL(/\/projects\?category=full-stack-web/);
    await expect(
      page.getByRole('heading', { name: 'Full-Stack Web Applications', level: 1 })
    ).toBeVisible();

    // Refresh retains URL filter and back navigation works
    await page.reload();
    await expect(page.getByText('Showing 3 of 4 projects')).toBeVisible();

    await page.getByRole('button', { name: 'PostgreSQL' }).click();
    await expect(page).toHaveURL(/tech=postgresql/);
    await expect(page.getByText('Showing 1 of 4 projects')).toBeVisible();

    await page.goBack();
    await expect(page).toHaveURL(/\/projects\?category=full-stack-web$/);
    await expect(page.getByText('Showing 3 of 4 projects')).toBeVisible();

    // Navigate to case study and inspect screenshot modal
    await page
      .getByRole('link', { name: 'Barangay San Vicente Ticketing System', exact: true })
      .click();
    await expect(page).toHaveURL(/\/projects\/barangay-ticketing-system/);
    await expect(page.getByLabel('Breadcrumb')).toContainText(
      'Barangay San Vicente Ticketing System'
    );

    await page.getByRole('button', { name: /Inspect screenshot/i }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).toBeHidden();

    expect(errors).toEqual([]);
  });

  test('all routes, images, theme persistence, resume PDF, and 404/empty states work without network or runtime errors', async ({
    page,
  }) => {
    const errors = [];
    const failedResponses = [];
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('response', (res) => {
      if (res.status() >= 400 && !res.url().includes('favicon')) {
        failedResponses.push(`${res.status()} ${res.url()}`);
      }
    });

    await page.setViewportSize({ width: 1280, height: 800 });

    const routesWithImages = [
      '/',
      '/about',
      '/projects',
      '/projects/barangay-ticketing-system',
      '/projects/opendoor-consultation-booking-system',
      '/projects/opendoor-mobile-application',
      '/projects/bitforge-it-services',
    ];

    for (const route of routesWithImages) {
      await page.goto(route, { waitUntil: 'networkidle' });
      const brokenImages = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img'))
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.getAttribute('src'))
      );
      expect(brokenImages, `Broken images on ${route}`).toEqual([]);
    }

    // Verify BitForge live Render URL renders on case study page
    await page.goto('/projects/bitforge-it-services');
    await expect(page.getByRole('link', { name: 'Live Demo' })).toHaveAttribute(
      'href',
      'https://bitforge-it-services-management.onrender.com'
    );

    // Fragment navigation to #skills
    await page.goto('/about#skills');
    await expect(page.getByRole('heading', { name: 'Technical Skills' })).toBeInViewport();

    // Empty category state and Reset action
    await page.goto('/projects?category=frontend');
    await expect(page.getByText('No standalone Frontend Development entries yet')).toBeVisible();
    await page.getByRole('button', { name: 'Reset all filters' }).click();
    await expect(page.getByText('Showing 4 of 4 projects')).toBeVisible();

    // Unknown slug and 404 route handling
    await page.goto('/projects/unknown-project-slug');
    await expect(page.getByText('Project Case Study Not Found')).toBeVisible();
    await page.goto('/does-not-exist');
    await expect(page.getByText('404 — Page Not Found')).toBeVisible();

    // Switch theme to Light and verify persistence across reload
    await page.goto('/');
    await page.getByRole('button', { name: 'Light', exact: true }).click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await page.reload();
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    // Verify Resume page and PDF download endpoint
    await page.goto('/resume');
    const downloadLink = page.getByRole('link', { name: 'Download PDF' });
    await expect(downloadLink).toBeVisible();
    const pdfHref = await downloadLink.getAttribute('href');
    const res = await page.request.get(pdfHref);
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('application/pdf');

    // Verify Contact page
    await page.goto('/contact');
    await expect(page.getByRole('link', { name: 'Direct Email Link' })).toHaveAttribute(
      'href',
      'mailto:lowedavidctubat02@gmail.com'
    );

    expect(errors).toEqual([]);
    expect(failedResponses).toEqual([]);
  });

  for (const viewport of [
    { name: 'mobile-320', width: 320, height: 568 },
    { name: 'mobile-375', width: 375, height: 812 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'desktop-1024', width: 1024, height: 768 },
    { name: 'desktop-1440', width: 1440, height: 900 },
  ]) {
    test(`responsive layout has no horizontal overflow at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      for (const route of [
        '/',
        '/about',
        '/projects',
        '/projects/barangay-ticketing-system',
        '/experience',
        '/resume',
        '/contact',
      ]) {
        await page.goto(route);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > window.innerWidth
        );
        expect(overflow, `Overflow detected on ${route} at ${viewport.name}`).toBe(false);
      }

      if (viewport.width < 768) {
        await page.goto('/');
        await page.getByRole('button', { name: 'Open navigation menu' }).click();
        await expect(page.getByRole('dialog', { name: 'Site navigation' })).toBeVisible();
        await page.keyboard.press('Escape');
        await expect(page.getByRole('dialog', { name: 'Site navigation' })).toBeHidden();
      }
    });
  }
});
