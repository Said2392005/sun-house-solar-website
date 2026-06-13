const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);

  const sections = [
    { name: 'hero', scrollY: 0 },
    { name: 'about', scrollY: 900 },
    { name: 'services', scrollY: 1800 },
    { name: 'products', scrollY: 2800 },
    { name: 'brands', scrollY: 3800 },
    { name: 'whychooseus', scrollY: 4700 },
    { name: 'greenvolt', scrollY: 5800 },
    { name: 'gallery', scrollY: 6800 },
    { name: 'contact', scrollY: 7800 },
    { name: 'footer', scrollY: 99999 },
  ];

  for (const s of sections) {
    await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), s.scrollY);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `/tmp/ss_${s.name}.png` });
    console.log('✓', s.name);
  }

  // mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/ss_mobile.png' });
  console.log('✓ mobile');

  await browser.close();
  console.log('done');
})();
