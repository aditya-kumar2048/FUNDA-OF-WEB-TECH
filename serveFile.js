const fs = require('fs').promises;
const path = require('path');

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html; charset=utf-8';
    case '.css':  return 'text/css; charset=utf-8';
    case '.js':   return 'application/javascript; charset=utf-8';
    case '.json': return 'application/json; charset=utf-8';
    case '.png':  return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    default:      return 'application/octet-stream';
  }
}

async function readPublicFile(relPath) {
  const base = path.join(__dirname, '..', 'public');
  const safePath = path.join(base, path.normalize(relPath).replace(/^(\.\.(\/|\\|$))+/, ''));
  const content = await fs.readFile(safePath);
  const contentType = getContentType(safePath);
  return { content, contentType };
}

module.exports = { readPublicFile };
