import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function main() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  const page = await context.newPage();
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console error: ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    errors.push(`Page error: ${err.message}`);
  });

  const outputDir = path.resolve('public/screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const routes = [
    { url: 'http://localhost:3000/', name: '01-home-hero' },
    { url: 'http://localhost:3000/#projects', name: '02-home-projects' },
    { url: 'http://localhost:3000/#work', name: '03-home-work' },
    { url: 'http://localhost:3000/#process', name: '04-home-process' },
    { url: 'http://localhost:3000/#style', name: '05-home-style' },
    { url: 'http://localhost:3000/#contact', name: '06-home-contact' },
    { url: 'http://localhost:3000/about', name: '07-about-page' },
    { url: 'http://localhost:3000/projects', name: '08-projects-directory' },
    { url: 'http://localhost:3000/projects/the-calm-house', name: '09-project-case-study' },
    { url: 'http://localhost:3000/work/furniture', name: '10-furniture-hub' },
    { url: 'http://localhost:3000/work/furniture/system-32-modular-master-wardrobe', name: '11-furniture-detail' },
    { url: 'http://localhost:3000/resume', name: '12-resume-page' },
  ];

  for (const r of routes) {
    console.log(`Navigating to ${r.url}...`);
    await page.goto(r.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    const filePath = path.join(outputDir, `${r.name}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`Saved screenshot: ${filePath}`);
  }

  console.log(`\nCompleted verification. Logged errors: ${errors.length}`);
  if (errors.length > 0) {
    console.error(errors.join('\n'));
  }

  await browser.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
