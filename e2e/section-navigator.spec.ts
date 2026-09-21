import { test, expect } from "@playwright/test";

test.describe("Section Navigator, Momentum Lock & Route Verification", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "0");
  });

  test("rapid wheel momentum cannot skip sections (momentum lock)", async ({ page }) => {
    // Starting on section 0 (Hero)
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "0");

    // Spam multiple wheel events rapidly simulating inertia / momentum trackpad flick
    for (let i = 0; i < 5; i++) {
      await page.mouse.wheel(0, 300);
      await page.waitForTimeout(30);
    }

    // Wait for transition animation to complete (~1000ms)
    await page.waitForTimeout(1100);

    // It MUST advance only to section 1 (Selected Projects) and NOT skip to section 2, 3, or beyond
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "1");
  });

  test("Selected Projects internal rail advances project states before moving to next section", async ({ page }) => {
    // Navigate to Section 1
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1100);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "1");
    await expect(page.locator("html")).toHaveAttribute("data-project-index", "0");

    // Gesture down inside Section 1 -> moves project rail from 0 to 1
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(700);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "1");
    await expect(page.locator("html")).toHaveAttribute("data-project-index", "1");

    // Gesture down inside Section 1 -> moves project rail from 1 to 2
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(700);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "1");
    await expect(page.locator("html")).toHaveAttribute("data-project-index", "2");

    // Gesture down inside Section 1 -> moves project rail from 2 to 3 (end of rail)
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(700);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "1");
    await expect(page.locator("html")).toHaveAttribute("data-project-index", "3");

    // Next downward gesture advances out of Section 1 to Section 2 (Explore All My Work)
    await page.mouse.wheel(0, 300);
    await page.waitForTimeout(1100);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "2");
  });

  test("keyboard navigation advances and retreats sections", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "0");

    // ArrowDown advances to section 1
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1100);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "1");

    // ArrowUp retreats to section 0
    await page.keyboard.press("ArrowUp");
    await page.waitForTimeout(1100);
    await expect(page.locator("html")).toHaveAttribute("data-active-section", "0");
  });

  test("7-step progress navigation and URL hash updates", async ({ page }) => {
    // Click on "Explore All My Work" (Section index 2)
    const navBtn = page.getByRole("button", { name: "Go to Explore All My Work" });
    await navBtn.click();
    await page.waitForTimeout(1100);

    await expect(page.locator("html")).toHaveAttribute("data-active-section", "2");
    expect(page.url()).toContain("#work");
  });

  test("About page renders complete journey timeline and strengths", async ({ page }) => {
    await page.goto("/about");
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Designing spaces with");
    await expect(page.getByText("Spacious Venture")).toBeVisible();
    await expect(page.getByText("Giftyaari — Handcrafted Brand Venture")).toBeVisible();
    await expect(page.getByRole("heading", { name: "AutoCAD Drafting" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "SketchUp Modelling" })).toBeVisible();
  });

  test("Project case study page renders full 10-section breakdown", async ({ page }) => {
    await page.goto("/projects/sunlit-abode");
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Sunlit Abode");
    await expect(page.getByText("Project Story / Design Brief")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Space Planning" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Moodboard & Material Direction" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "3D Visualizations" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Design Decisions" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Outcome / Final Feel" })).toBeVisible();
  });

  test("Category page renders filtered portfolio items", async ({ page }) => {
    await page.goto("/work/residential");
    await page.waitForLoadState("networkidle");

    await expect(page.getByRole("heading", { level: 1 })).toContainText("Residential Interiors");
    await expect(page.getByText("The Sarthak Residence")).toBeVisible();
    await expect(page.getByText("Sunlit Abode")).toBeVisible();
  });
});
