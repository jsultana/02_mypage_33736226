const http = require("http");
const port = 8000; // change to 8080 if 8000 is busy

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>My Page — 12345678</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height: 1.6; margin: 2rem; max-width: 70ch; }
    h1 { margin-bottom: .25rem; }
    h2 { margin-top: 1rem; color: #444; font-weight: 600; }
    p  { margin-top: 1rem; }
  </style>
</head>

<body>
  <h1>Hi, I’m Jannat  </h1>
  <h2>3rd-year BSc Computer Science @ Goldsmiths</h2>
  <p>I’m interested in data visualisation, AI ethics, and human-centred tech. This page is served by a tiny Node.js server I built in Lab 1.</p>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(port, () => {
  console.log(`MyPage listening at http://localhost:${port}`);
});
