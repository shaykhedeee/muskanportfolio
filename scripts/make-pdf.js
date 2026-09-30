const fs = require('fs');
const path = require('path');

const resumeDir = path.join(__dirname, '..', 'public', 'resume');
fs.mkdirSync(resumeDir, { recursive: true });

function makeSimplePdf(title, author) {
  const content = `BT /F1 24 Tf 72 712 Td (${title}) Tj 0 -36 Td /F1 14 Tf (${author}) Tj 0 -24 Td /F1 12 Tf (Interior Designer - Bengaluru, India) Tj 0 -20 Td (Email: pareekmuskan1999@gmail.com) Tj ET`;
  const len = Buffer.byteLength(content, 'utf8');
  return `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${len} >>
stream
${content}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000226 00000 n 
0000000293 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${345 + len}
%%EOF`;
}

fs.writeFileSync(path.join(resumeDir, 'muskan-pareek-resume.pdf'), makeSimplePdf('Muskan Pareek - Professional Resume', 'Muskan Pareek'));
fs.writeFileSync(path.join(resumeDir, 'muskan-pareek-portfolio.pdf'), makeSimplePdf('Muskan Pareek - Selected Portfolio', 'Muskan Pareek'));
console.log('PDFs successfully written to public/resume');
