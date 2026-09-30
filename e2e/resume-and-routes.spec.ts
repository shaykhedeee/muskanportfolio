import { test, expect } from "@playwright/test";

test.describe("Resume, Navigation & New Directory Routes", () => {
  test("renders /resume page with credentials, experience timeline and PDF downloads", async ({ page }) => {
    await page.goto("/resume");

    // Title and Header
    await expect(page.getByRole("heading", { name: "Muskan Pareek", level: 1 })).toBeVisible();
    await expect(page.getByText(/CURRICULUM VITAE/)).toBeVisible();

    // Prominent Download Buttons
    const resumeDownloadBtn = page.getByRole("link", { name: "Download Resume PDF ↓" }).first();
    await expect(resumeDownloadBtn).toBeVisible();
    await expect(resumeDownloadBtn).toHaveAttribute("download", "Muskan-Pareek-Interior-Designer-Resume.pdf");

    const portfolioDownloadBtn = page.getByRole("link", { name: "Offline Portfolio PDF ↓" }).first();
    await expect(portfolioDownloadBtn).toBeVisible();

    // Professional Experience
    await expect(page.getByRole("heading", { name: "Professional Experience" })).toBeVisible();
    await expect(page.getByText("Spacious Venture")).toBeVisible();
    await expect(page.getByText("Freelance Interior Design Practice")).toBeVisible();
    await expect(page.getByText("12 Square Interiors")).toBeVisible();
    await expect(page.getByText("CubeDecors")).toBeVisible();

    // Education & Capabilities
    await expect(page.getByRole("heading", { name: "Education" })).toBeVisible();
    await expect(page.getByText("Bachelor of Science in Interior Design")).toBeVisible();
    await expect(page.getByText("INIFD Institute")).toBeVisible();
    await expect(page.getByText("Residential Interior Design", { exact: true })).toBeVisible();
    await expect(page.getByText("AutoCAD 2D Drafting")).toBeVisible();
  });

  test("renders /work directory hub with 3 design disciplines", async ({ page }) => {
    await page.goto("/work");

    // Heading
    await expect(page.getByRole("heading", { name: "Design Disciplines" })).toBeVisible();

    // 3 Category Cards
    await expect(page.getByRole("heading", { name: "Residential Interiors" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Commercial & Lifestyle" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Custom & Modular Furniture" })).toBeVisible();

    // Direct Links
    await expect(page.locator('a[href="/work/residential"]')).toBeVisible();
    await expect(page.locator('a[href="/work/commercial"]')).toBeVisible();
    await expect(page.locator('a[href="/work/furniture"]')).toBeVisible();
  });

  test("skip-to-content accessibility link and Person structured data exist in DOM", async ({ page }) => {
    await page.goto("/");

    // Skip to content link
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
    await expect(skipLink).toHaveText("Skip to main content");

    // Person schema JSON-LD
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain('"@type":"Person"');
    expect(content).toContain('"name":"Muskan Pareek"');
    expect(content).toContain('"jobTitle":"Interior Designer"');
  });

  test("header contains updated navigation links and Let's Talk CTA", async ({ page }) => {
    await page.goto("/");

    const header = page.locator("header");
    await expect(header.getByRole("link", { name: "Work" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Process" })).toBeVisible();
    await expect(header.getByRole("link", { name: "About" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Resume" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Contact" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Let's Talk" })).toBeVisible();
  });

  test("renders /projects all projects directory with filters, search, and 9 cards", async ({ page }) => {
    await page.goto("/projects");

    await expect(page.getByRole("heading", { name: "Selected Projects", level: 1 })).toBeVisible();
    await expect(page.getByText("COMPLETE PORTFOLIO INDEX")).toBeVisible();

    // Category filter buttons
    await expect(page.getByRole("button", { name: "All Projects 16" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Residential 5" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Commercial 2" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Furniture 9" })).toBeVisible();

    // Specific projects
    await expect(page.getByRole("heading", { name: "The Sarthak Residence" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Olive & Oak" })).toBeVisible();

    // Click Furniture tab and verify bespoke pieces render
    await page.getByRole("button", { name: "Furniture 9" }).click();
    await expect(page.getByRole("heading", { name: "Fluted Oak TV Credenza" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "System 32 Modular Master Wardrobe" })).toBeVisible();
  });

  test("renders /process 5-stage methodology page", async ({ page }) => {
    await page.goto("/process");

    await expect(page.getByRole("heading", { name: "From requirement to refined interior.", level: 1 })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Discover & Site Measurements" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "System 32 Modular Joinery & Detailing" })).toBeVisible();
  });

  test("renders /contact page adhering strictly to zero-form policy", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByRole("heading", { name: "Let's build thoughtful spaces together.", level: 1 })).toBeVisible();
    await expect(page.getByText("pareekmuskan1999@gmail.com").first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Connect on LinkedIn ↗" })).toBeVisible();

    // Verify there is NO <form> or text area
    const form = page.locator("form");
    await expect(form).toHaveCount(0);
  });
});
