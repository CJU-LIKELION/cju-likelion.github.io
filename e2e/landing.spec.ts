import { expect, test } from "@playwright/test";

const SECTION_IDS = ["intro", "vision", "about", "class", "curriculum", "roadmap", "apply"];
const HEADER_HEIGHT = 64;

test("sections exist", async ({ page }) => {
  await page.goto("/");

  await Promise.all(SECTION_IDS.map((id) => expect(page.locator(`#${id}`)).toBeVisible()));
});

test("header anchor offset keeps section visible under fixed header", async ({ page }) => {
  await page.goto("/#about");

  await expect.poll(async () => {
    return page.locator("#about").evaluate((el) => el.getBoundingClientRect().top);
  }).toBeGreaterThanOrEqual(HEADER_HEIGHT);
});

test("scrollspy sets aria-current on the active roadmap nav link", async ({ page }) => {
  await page.goto("/");

  await page.evaluate((headerHeight) => {
    const roadmap = document.getElementById("roadmap");
    if (!roadmap) {
      return;
    }

    const y = roadmap.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  }, HEADER_HEIGHT);

  const roadmapNavLink = page.locator('nav[aria-label="Primary"] a[href="#roadmap"]');
  await expect.poll(async () => roadmapNavLink.getAttribute("aria-current")).toBe("true");
});

test("dot navigation is hidden on mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.locator('nav[aria-label="Primary"]')).toBeHidden();
});

test.describe("reduced motion", () => {
  test("nav click uses non-animated scrolling and updates hash", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });

    await page.addInitScript(() => {
      const original = Element.prototype.scrollIntoView;
      const win = window as typeof window & { __scrollBehaviors?: string[] };

      win.__scrollBehaviors = [];

      Element.prototype.scrollIntoView = function scrollIntoViewPatched(arg?: ScrollIntoViewOptions | boolean) {
        if (typeof arg === "object" && arg !== null) {
          const behavior = arg.behavior ?? "auto";
          win.__scrollBehaviors?.push(behavior);
        }

        if (typeof arg === "boolean" || arg === undefined) {
          win.__scrollBehaviors?.push("auto");
        }

        return original.call(this, arg as never);
      };
    });

    await page.goto("/");
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "auto" }));

    await page.locator('nav[aria-label="Primary"] a[href="#roadmap"]').click();

    await expect(page).toHaveURL(/#roadmap$/);

    const lastScrollBehavior = await page.evaluate(() => {
      const behaviors = (window as Window & { __scrollBehaviors?: string[] }).__scrollBehaviors ?? [];
      return {
        last: behaviors[behaviors.length - 1] ?? null,
        hasAuto: behaviors.includes("auto"),
      };
    });
    expect(lastScrollBehavior.hasAuto).toBe(true);

    const immediateScrollY = await page.evaluate(() => window.scrollY);
    expect(immediateScrollY).toBeGreaterThan(0);
  });
});

test("theme bootstrap follows prefers-color-scheme dark", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  await expect.poll(async () => {
    return page.evaluate(() => document.documentElement.classList.contains("dark"));
  }).toBe(true);
});

test("theme bootstrap follows prefers-color-scheme light", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");

  await expect.poll(async () => {
    return page.evaluate(() => document.documentElement.classList.contains("dark"));
  }).toBe(false);
});
