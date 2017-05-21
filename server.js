var http = require('http');

const port = process.env.PORT || 3000;

var proxy = http.createServer(function(request, response) {
    console.log(request.headers['user-agent']);
    response.writeHead(200);
    response.write("<h1>Hello from http server.</h1>");
    response.end("Ending response...");
});

proxy.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});