const { chromium } = require('@playwright/test');
const fs = require('fs');

async function generatePDFs() {
  console.log('Launching browser to print PDFs...');
  const browser = await chromium.launch();
  
  // 1. Generate Resume PDF
  const resumePage = await browser.newPage({
    viewport: { width: 1200, height: 1600 }
  });
  await resumePage.goto('http://localhost:3000/resume', { waitUntil: 'networkidle' });
  
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

  // Copy to legacy path
  fs.copyFileSync(resumePath, 'public/resume/muskan-pareek-resume.pdf');

  // 2. Generate Portfolio PDF from /work
  const portfolioPage = await browser.newPage({
    viewport: { width: 1200, height: 1800 }
  });
  await portfolioPage.goto('http://localhost:3000/work/residential', { waitUntil: 'networkidle' });
  
  await portfolioPage.addStyleTag({
    content: `
      header { display: none !important; }
      footer { display: none !important; }
      a[href="#main-content"] { display: none !important; }
      .pt-28 { padding-top: 1rem !important; }
      @page { size: A4 landscape; margin: 15mm; }
    `
  });

  const portfolioPath = 'public/Muskan-Pareek-Interior-Design-Portfolio.pdf';
  await portfolioPage.pdf({
    path: portfolioPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' }
  });
  console.log('Generated Portfolio PDF:', fs.statSync(portfolioPath).size, 'bytes');

  // Copy to legacy path
  fs.copyFileSync(portfolioPath, 'public/resume/muskan-pareek-portfolio.pdf');

  await browser.close();
  console.log('All offline PDF deliverables generated successfully!');
}

generatePDFs().catch(console.error);
