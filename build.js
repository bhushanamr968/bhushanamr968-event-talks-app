const fs = require('fs');
const path = require('path');

const outputDir = 'dist';
const outputFile = path.join(outputDir, 'index.html');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Read the source files
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

// Inject CSS and JS into the HTML
const finalHtml = html
    .replace(`    <link rel="stylesheet" href="style.css">`, `    <style>
${css}
    </style>`)
    .replace(`    <script src="script.js"></script>`, `    <script>
${js}
    </script>`);

// Write the final HTML to the output file
fs.writeFileSync(outputFile, finalHtml, 'utf8');

console.log(`Successfully built the serverless website to ${outputFile}`);
