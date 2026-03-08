import { expect, test } from "@playwright/test";

const SECTION_IDS = ["intro", "vision", "about", "team", "curriculum", "roadmap", "apply"];

test("sections exist", async ({ page }) => {
  await page.goto("/");

  for (const id of SECTION_IDS) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
});

test("header anchor offset keeps section visible under fixed header", async ({ page }) => {
  await page.goto("/#about");

  await expect.poll(async () => {
    return page.locator("#about").evaluate((el) => el.getBoundingClientRect().top);
  }).toBeGreaterThanOrEqual(64);
});

test("scrollspy sets aria-current on the active roadmap nav link", async ({ page }) => {
  await page.goto("/");

  await page.evaluate(() => {
    const roadmap = document.getElementById("roadmap");
    if (!roadmap) {
      return;
    }

    const y = roadmap.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  });

  const roadmapNavLink = page.locator('nav[aria-label="Primary"] a[href="#roadmap"]');
  await expect.poll(async () => roadmapNavLink.getAttribute("aria-current")).toBe("true");
});

test("mobile menu keeps focus trapped and closes on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const toggle = page.getByTestId("mobile-nav-toggle");
  const panel = page.getByTestId("mobile-nav-panel");

  await toggle.click();
  await expect(panel).toBeVisible();

  for (let i = 0; i < 10; i += 1) {
    await page.keyboard.press("Tab");
    const isFocusInsidePanel = await panel.evaluate((el) => el.contains(document.activeElement));
    expect(isFocusInsidePanel).toBe(true);
  }

  await page.keyboard.press("Escape");
  await expect(panel).toBeHidden();
  await expect(toggle).toBeFocused();
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

test("theme toggle updates html.dark and localStorage.theme", async ({ page }) => {
  await page.goto("/");

  const before = await page.evaluate(() => document.documentElement.classList.contains("dark"));

  await page.getByTestId("theme-toggle").click();

  const after = await page.evaluate(() => document.documentElement.classList.contains("dark"));
  expect(after).toBe(!before);

  const storedTheme = await page.evaluate(() => localStorage.getItem("theme"));
  expect(storedTheme).toBe(after ? "dark" : "light");
});

test("theme bootstrap applies stored dark mode on first render", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("theme", "dark");
  });

  await page.goto("/");

  await expect.poll(async () => {
    return page.evaluate(() => document.documentElement.classList.contains("dark"));
  }).toBe(true);
});
