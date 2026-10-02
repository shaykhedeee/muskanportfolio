const { chromium } = require('@playwright/test');
const fs = require('fs');
const http = require('http');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain',
};

function startServer(port = 3333) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/index.html';

      let filePath = path.join(__dirname, '..', 'out', reqPath);

      if (!fs.existsSync(filePath)) {
        if (fs.existsSync(filePath + '.html')) {
          filePath = filePath + '.html';
        } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
          filePath = path.join(filePath, 'index.html');
        }
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`Internal static server listening at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function generatePDFs() {
  const server = await startServer(3333);
  console.log('Launching browser to print PDFs...');
  const browser = await chromium.launch();
  
  try {
    // 1. Generate Resume PDF
    const resumePage = await browser.newPage({
      viewport: { width: 1200, height: 1600 }
    });
    await resumePage.goto('http://localhost:3333/resume', { waitUntil: 'networkidle' });
    
    // Hide sticky headers and top back links for print
    await resumePage.addStyleTag({
      content: `
        header { display: none !important; }
        footer { display: none !important; }
        a[href="#main-content"] { display: none !important; }
        .pt-28 { padding-top: 1rem !important; }
        @page { size: A4; margin: 15mm; }
      `
    });

    const resumePath = 'public/Muskan-Pareek-Interior-Designer-Resume.pdf';
    await resumePage.pdf({
      path: resumePath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' }
    });
    console.log('Generated Resume PDF:', fs.statSync(resumePath).size, 'bytes');

    if (!fs.existsSync('public/resume')) fs.mkdirSync('public/resume', { recursive: true });
    fs.copyFileSync(resumePath, 'public/resume/muskan-pareek-resume.pdf');

    // 2. Generate Portfolio PDF from /offline-portfolio
    const portfolioPage = await browser.newPage({
      viewport: { width: 1400, height: 1000 }
    });
    await portfolioPage.goto('http://localhost:3333/offline-portfolio', { waitUntil: 'networkidle' });
    
    await portfolioPage.addStyleTag({
      content: `
        header { display: none !important; }
        @page { size: A4 landscape; margin: 8mm; }
      `
    });

    const portfolioPath = 'public/Muskan-Pareek-Interior-Design-Portfolio.pdf';
    await portfolioPage.pdf({
      path: portfolioPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: '8mm', bottom: '8mm', left: '8mm', right: '8mm' }
    });
    console.log('Generated Portfolio PDF:', fs.statSync(portfolioPath).size, 'bytes');

    fs.copyFileSync(portfolioPath, 'public/resume/muskan-pareek-portfolio.pdf');
  } finally {
    await browser.close();
    server.close();
    console.log('All offline PDF deliverables generated successfully!');
  }
}

generatePDFs().catch(console.error);
