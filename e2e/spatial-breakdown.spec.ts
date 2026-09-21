import { test, expect } from "@playwright/test";

test.describe("Spatial Design Breakdown: Interactive Architectural Section", () => {
  test("renders signature Spatial Design Breakdown on /projects/the-calm-house", async ({ page }) => {
    await page.goto("/projects/the-calm-house");

    // Locate the Spatial Breakdown Section
    const spatialSection = page.locator("#spatial-breakdown");
    await expect(spatialSection).toBeVisible();

    // Check Header elements
    await expect(spatialSection.getByText("SPATIAL DESIGN BREAKDOWN")).toBeVisible();
    await expect(spatialSection.getByRole("heading", { name: "Inside the Space" })).toBeVisible();
    await expect(spatialSection.getByText("From plan to spatial reality.")).toBeVisible();

    // Check Process Navigation
    await expect(spatialSection.getByText("DESIGN LOGIC")).toBeVisible();
    await expect(spatialSection.getByText("FINAL SPACE", { exact: true })).toBeVisible();

    // Check Floor Plan (image or SVG)
    const floorPlanArea = spatialSection.locator(".max-w-\\[360px\\]");
    await expect(floorPlanArea).toBeVisible();

    // Check 5 Hotspots exist
    for (const num of ["01", "02", "03", "04", "05"]) {
      const hotspotBtn = spatialSection.getByRole("button", { name: new RegExp(`Hotspot ${num}:`) });
      await expect(hotspotBtn).toBeVisible();
    }
  });

  test("interactive hotspots synchronize model annotation and floor plan pin", async ({ page }) => {
    await page.goto("/projects/the-calm-house");

    const spatialSection = page.locator("#spatial-breakdown");
    await expect(spatialSection).toBeVisible();

    // Click on Hotspot 03 (Sacred Alabaster Mandir Sanctum)
    const hotspot03 = spatialSection.getByRole("button", { name: /Hotspot 03:/ });
    await hotspot03.click();

    // Verify Active Annotation Card updates
    await expect(spatialSection.getByRole("heading", { name: "Sacred Alabaster Mandir Sanctum" }).first()).toBeVisible();
    await expect(spatialSection.getByText(/hanging brass bells/).first()).toBeVisible();

    // Click on Hotspot 01 (Backlit Arched Headboard Niche)
    const hotspot01 = spatialSection.getByRole("button", { name: /Hotspot 01:/ });
    await hotspot01.click();

    // Verify Active Annotation Card updates to Headboard
    await expect(spatialSection.getByRole("heading", { name: "Backlit Arched Headboard Niche" }).first()).toBeVisible();
    await expect(spatialSection.getByText(/Warm indirect 2700K/).first()).toBeVisible();
  });

  test("material swatches and design highlights render with labels", async ({ page }) => {
    await page.goto("/projects/the-calm-house");

    const spatialSection = page.locator("#spatial-breakdown");

    // Check design highlights
    await expect(spatialSection.getByText("Master Suite Sanctuary").first()).toBeVisible();
    await expect(spatialSection.getByText("Fluted Glass Joinery").first()).toBeVisible();
    await expect(spatialSection.getByText("Sacred Mandir Sanctum").first()).toBeVisible();

    // Check material swatches
    await expect(spatialSection.getByText("Translucent Alabaster")).toBeVisible();
    await expect(spatialSection.getByText("Natural Honey Walnut")).toBeVisible();
    await expect(spatialSection.getByText("Champagne Brass")).toBeVisible();
  });

  test("clicking mini final-render thumbnail opens lightbox with keyboard navigation", async ({ page }) => {
    await page.goto("/projects/the-calm-house");

    const spatialSection = page.locator("#spatial-breakdown");

    // Click on the first final-render thumbnail
    const firstThumb = spatialSection.locator('button[type="button"]:has(img[alt*="living"])').first();
    if (await firstThumb.isVisible()) {
      await firstThumb.click();
    } else {
      // Fallback selector for render preview strip
      const previewBtn = spatialSection.locator(".grid-cols-4 button").first();
      await previewBtn.click();
    }

    // Lightbox modal should be visible
    const lightbox = page.locator('div[role="dialog"][aria-label="Final Space Render Lightbox"]');
    await expect(lightbox).toBeVisible();

    // Press Escape to close modal
    await page.keyboard.press("Escape");
    await expect(lightbox).not.toBeVisible();
  });

  test("renders Spatial Design Breakdown on /projects/sunlit-abode (Project 02)", async ({ page }) => {
    await page.goto("/projects/sunlit-abode");

    const spatialSection = page.locator("#spatial-breakdown");
    await expect(spatialSection).toBeVisible();

    await expect(spatialSection.getByText("SPATIAL DESIGN BREAKDOWN")).toBeVisible();
    await expect(spatialSection.getByText("Great Room & Kitchen Study")).toBeVisible();
    await expect(spatialSection.getByRole("heading", { name: "Fluted Media Wall" }).first()).toBeVisible();
    await expect(spatialSection.getByText("Natural Teak")).toBeVisible();
  });

  test("renders Spatial Design Breakdown on /projects/the-meadow-home (Project 03)", async ({ page }) => {
    await page.goto("/projects/the-meadow-home");

    const spatialSection = page.locator("#spatial-breakdown");
    await expect(spatialSection).toBeVisible();

    await expect(spatialSection.getByText("SPATIAL DESIGN BREAKDOWN")).toBeVisible();
    await expect(spatialSection.getByText("Master Suite & Private Lounge Study")).toBeVisible();
    await expect(spatialSection.getByRole("heading", { name: "Floating Fluted Timber Headboard" }).first()).toBeVisible();
    await expect(spatialSection.getByText("White Oak Veneer")).toBeVisible();
  });

  test("projects without spatial study omit section cleanly without breaking layout", async ({ page }) => {
    await page.goto("/projects/olive-and-oak");

    // Spatial breakdown section should NOT be present on projects without it
    const spatialSection = page.locator("#spatial-breakdown");
    await expect(spatialSection).toHaveCount(0);

    // Page still renders headline and hero properly
    await expect(page.getByRole("heading", { name: "Olive & Oak" })).toBeVisible();
  });
});
