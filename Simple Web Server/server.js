
// Import required core modules
const http = require("http");       // For creating the web server
const fs = require("fs").promises;  // For reading files asynchronously
const path = require("path");       // For handling file paths

// Define the port number where the server will listen
const PORT = 3000;

/**
 * Helper function to serve files**/

const serveFile = async (res, filePath, contentType, statusCode = 200) => {
  try {
    // Read the file asynchronously (utf8 for text files)
    const data = await fs.readFile(filePath, "utf8");
	// Set the HTTP response header with status code and content type
    res.writeHead(statusCode, { "Content-Type": contentType });
    // Send the file content as the response
    res.end(data);
  } catch (err) {
    // Handle errors if file cannot be read
    console.error("Error reading file:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 - Internal Server Error");
  }
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  const url = req.url; // Get the requested URL path
  console.log(`Requested Route: ${url}`);

  // Serve CSS files from the "public" folder
  if (url.match("\.css$")) {
    const cssPath = path.join(__dirname, "public", url);
    serveFile(res, cssPath, "text/css");
    return; // Exit after serving CSS
  }

  // Routing for HTML pages
  if (url === "/" || url === "/home") {
    // Serve Home page
    serveFile(res, path.join(__dirname, "views", "home.html"), "text/html");
  } else if (url === "/about") {
    // Serve About page
    serveFile(res, path.join(__dirname, "views", "about.html"), "text/html");
  } else if (url === "/contact") {
    // Serve Contact page
    serveFile(res, path.join(__dirname, "views", "contact.html"), "text/html");
  } else {
    // Serve custom 404 page for invalid routes
    serveFile(res, path.join(__dirname, "views", "404.html"), "text/html", 404);
  }
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});