import { test, expect } from "@playwright/test";

test.describe("Portfolio Curated: 5 Residential, 2 Commercial, 9 Furniture", () => {
  test("renders exactly 5 residential projects on /work/residential", async ({ page }) => {
    await page.goto("/work/residential");

    // Title and badge
    await expect(page.getByRole("heading", { name: "Residential Interiors" })).toBeVisible();
    await expect(page.getByText("5 Curated Homes")).toBeVisible();

    // Verify all 5 project titles are visible
    const residentialTitles = [
      "The Sarthak Residence",
      "Sunlit Abode",
      "The Meadow Home",
      "Terracotta Villa",
      "Mr. Vivek Residence",
    ];

    for (const title of residentialTitles) {
      await expect(page.getByRole("heading", { name: title, level: 3 })).toBeVisible();
    }

    // Verify there are exactly 5 project cards
    const caseStudyLinks = page.getByRole("link", { name: /View Case Study/i });
    await expect(caseStudyLinks).toHaveCount(5);
  });

  test("renders exactly 2 commercial projects on /work/commercial", async ({ page }) => {
    await page.goto("/work/commercial");

    // Title and badge
    await expect(page.getByRole("heading", { name: /Commercial/i })).toBeVisible();
    await expect(page.getByText("2 Selected Spaces")).toBeVisible();

    // Verify all 2 commercial project titles
    const commercialTitles = [
      "Olive & Oak",
      "Ekkat Boutique",
    ];

    for (const title of commercialTitles) {
      await expect(page.getByRole("heading", { name: title, level: 3 })).toBeVisible();
    }

    // Verify there are exactly 2 project cards
    const caseStudyLinks = page.getByRole("link", { name: /View Case Study/i });
    await expect(caseStudyLinks).toHaveCount(2);
  });

  test("renders exactly 9 bespoke furniture designs on /work/furniture", async ({ page }) => {
    await page.goto("/work/furniture");

    // Title and badge
    await expect(page.getByRole("heading", { name: /Custom Furniture/i })).toBeVisible();
    await expect(page.getByText("9 Bespoke Designs")).toBeVisible();

    // Verify all 9 piece codes F-01 through F-09
    for (let i = 1; i <= 9; i++) {
      const code = `F-0${i}`;
      await expect(page.getByText(code).first()).toBeVisible();
    }

    // Verify key titles exist
    await expect(page.getByRole("heading", { name: "Fluted Oak TV Credenza" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Monolithic Travertine Dining Table" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "System 32 Modular Master Wardrobe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Minimalist Arched Pooja Mandir" })).toBeVisible();

    // Verify there are exactly 9 furniture cards
    const inspectButtons = page.getByText("Inspect Technical Specs");
    await expect(inspectButtons).toHaveCount(9);
  });

  test("filters furniture categories and opens technical inspection modal", async ({ page }) => {
    await page.goto("/work/furniture");

    // Click 'Storage' filter pill
    const storagePill = page.getByRole("button", { name: /Storage/i });
    await storagePill.click();

    // Only 1 item under Storage: System 32 Modular Master Wardrobe
    await expect(page.getByRole("heading", { name: "System 32 Modular Master Wardrobe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fluted Oak TV Credenza" })).not.toBeVisible();

    // Click the wardrobe card to open the technical modal
    await page.getByRole("heading", { name: "System 32 Modular Master Wardrobe" }).click();

    // Verify dialog modal opened
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(/Engineering & System 32 Joinery Specifications/i)).toBeVisible();
    await expect(dialog.getByText("3600W × 650D × 2850H mm (Floor-to-Ceiling)")).toBeVisible();

    // Close modal via Escape key
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  });

  test("loads case studies for new residential and commercial projects", async ({ page }) => {
    // Check Terracotta Villa (Residential 04)
    await page.goto("/projects/terracotta-villa");
    await expect(page.getByRole("heading", { name: "Terracotta Villa" })).toBeVisible();
    await expect(page.getByText("Bengaluru").first()).toBeVisible();

    // Check Ekkat Boutique (Commercial 07)
    await page.goto("/projects/ekkat-boutique");
    await expect(page.getByRole("heading", { name: "Ekkat Boutique" })).toBeVisible();
    await expect(page.getByText("Jaipur").first()).toBeVisible();
  });

  test("renders Section 07 Design Decisions with Function, Material, and Detail cards", async ({ page }) => {
    await page.goto("/projects/the-calm-house");

    // Section 07 Heading
    await expect(page.getByRole("heading", { name: "Design Decisions" })).toBeVisible();
    await expect(page.getByText("SECTION 07 · FUNCTION · MATERIAL · DETAIL")).toBeVisible();

    // 3 Cards: FUNCTION, MATERIAL, DETAIL
    await expect(page.getByText("FUNCTION", { exact: true })).toBeVisible();
    await expect(page.getByText("MATERIAL", { exact: true })).toBeVisible();
    await expect(page.getByText("DETAIL", { exact: true })).toBeVisible();

    // Verify card content
    await expect(page.getByText(/Engineered dual-zone master bedroom/i)).toBeVisible();
    await expect(page.getByText(/Warm natural walnut veneer/i)).toBeVisible();
    await expect(page.getByText(/Neoclassical crown frieze mouldings/i)).toBeVisible();
  });

  test("navigates to bespoke furniture case studies with interactive CAD viewer and specs", async ({ page }) => {
    // Navigate to Fluted Oak TV Credenza case study

    await page.goto("/work/furniture/fluted-oak-tv-credenza");

    // Title and code
    await expect(page.getByRole("heading", { name: "Fluted Oak TV Credenza", exact: true, level: 1 })).toBeVisible();
    await expect(page.getByText("PIECE F-01")).toBeVisible();


    // Metric Badges (Width 2400 mm, Depth 520 mm, Height 480 mm)
    await expect(page.getByText("2400 mm").first()).toBeVisible();
    await expect(page.getByText("520 mm").first()).toBeVisible();
    await expect(page.getByText("480 mm").first()).toBeVisible();

    // CAD Section
    await expect(page.getByText(/Vector CAD Elevation Engine/i)).toBeVisible();
    await expect(page.getByText("CAD-FUR-F01-REV3")).toBeVisible();

    // Orthographic View Switching
    const sectionButton = page.getByRole("button", { name: /Side Section A-A/i });
    await sectionButton.click();
    await expect(page.getByText("MASONRY WALL LINE")).toBeVisible();

    // Cut-List & Hardware Schedule
    await expect(page.getByRole("heading", { name: /Factory Cut-List/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Blum & Häfele Hardware Schedule/i })).toBeVisible();

    // Test a second piece: System 32 Modular Master Wardrobe
    await page.goto("/work/furniture/system-32-modular-master-wardrobe");
    await expect(page.getByRole("heading", { name: "System 32 Modular Master Wardrobe", exact: true, level: 1 })).toBeVisible();
    await expect(page.getByText("PIECE F-03")).toBeVisible();

    await expect(page.getByText("3600 mm").first()).toBeVisible();
    await expect(page.getByText("2850 mm").first()).toBeVisible();
  });
});

