// Minimal HTTP server that returns the server time in JSON
const http = require('http');
const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  if (req.url === '/time') {
    const now = Date.now();
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end(JSON.stringify({ serverTime: now, iso: new Date(now).toISOString() }));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
  }
};

const server = http.createServer(requestHandler);
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
