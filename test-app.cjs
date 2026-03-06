const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('pageerror', err => {
    console.error('Page Error: ' + err.toString());
    process.exit(1);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Console Error: ' + msg.text());
      // Do not exit on all console errors, but we can log them
    }
  });

  await page.goto('http://localhost:8888', { waitUntil: 'networkidle0' });
  
  // Check if root has content
  const html = await page.$eval('#root', el => el.innerHTML);
  if (html.trim().length === 0) {
    console.error('White screen detected: #root is empty!');
    process.exit(1);
  }
  
  console.log('App loaded successfully. Content length: ', html.length);
  await browser.close();
})();
