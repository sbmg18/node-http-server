var http = require('http');

var proxy = http.createServer(function(request, response) {
    console.log(request.headers['user-agent']);
    response.writeHead(200);
    response.write("<h1>Hello from http server.</h1>");
    response.end("Ending response...");
});

proxy.listen(3000, () => {
    console.log("Listening on port 3000.");
});