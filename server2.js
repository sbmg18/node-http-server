const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello from server</h1>");
    res.end();
}).listen(3000, () => {
    console.log("Server is up on port 3000.");
});