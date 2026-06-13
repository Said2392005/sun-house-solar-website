const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(2000);

  // Scroll through entire page slowly to trigger all inView animations
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Total page height:', totalHeight);

  // Scroll slowly to trigger all animations
  for (let y = 0; y <= totalHeight; y += 400) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // Now capture each section
  const shots = [
    ['hero', 0], ['about', 950], ['services_top', 1900], ['services_btm', 2800],
    ['products', 3700], ['brands', 5000], ['whyus', 5900], ['greenvolt', 7100],
    ['gallery', 8400], ['contact', 9600], ['footer', 99999]
  ];

  for (const [name, y] of shots) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `/tmp/v2_${name}.png` });
    console.log('✓', name);
  }

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/v2_mobile.png' });
  console.log('✓ mobile');

  await browser.close();
})();
