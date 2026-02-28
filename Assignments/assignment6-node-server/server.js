const http = require('http');
const url = require('url');
const { readPublicFile } = require('./helpers/serveFile');

const PORT = 3000;

const ROUTES = {
  '/': 'home.html',        // allow root to serve home
  '/home': 'home.html',
  '/about': 'about.html',
  '/contact': 'contact.html',
};

function sendResponse(res, statusCode, headers = {}, body = '') {
  res.writeHead(statusCode, headers);
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  try {
    const parsed = url.parse(req.url);
    const pathname = decodeURIComponent(parsed.pathname);

    // Log request to console for demonstration
    console.log(`${new Date().toISOString()} - ${req.method} ${pathname}`);

    if (pathname.startsWith('/public/') || pathname.endsWith('.css') || pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) {
      let rel = pathname.startsWith('/public/') ? pathname.replace('/public/', '') : pathname.replace(/^\//, '');
      try {
        const { content, contentType } = await readPublicFile(rel);
        sendResponse(res, 200, { 'Content-Type': contentType }, content);
        return;
      } catch (err) {
      }
    }

    // Routing for pages
    if (ROUTES.hasOwnProperty(pathname)) {
      const file = ROUTES[pathname];
      const { content, contentType } = await readPublicFile(file);
      sendResponse(res, 200, { 'Content-Type': contentType }, content);
      return;
    }

    if (pathname === '/favicon.ico') {
      sendResponse(res, 204, { 'Content-Type': 'image/x-icon' }, '');
      return;
    }

    try {
      const { content, contentType } = await readPublicFile('404.html');
      sendResponse(res, 404, { 'Content-Type': contentType }, content);
    } catch (err) {
      sendResponse(res, 404, { 'Content-Type': 'text/plain; charset=utf-8' }, '404 Not Found');
    }

  } catch (err) {
    console.error('Server error:', err);
    // Internal Server Error
    sendResponse(res, 500, { 'Content-Type': 'text/plain; charset=utf-8' }, '500 Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/ (PID ${process.pid})`);
});
