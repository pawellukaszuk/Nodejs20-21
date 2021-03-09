const http = require("http");

const app = http.createServer((request, response) => {
    const urlObject = new URL(`http://${request.headers.host}${request.url}`);
    
    if (urlObject.pathname === "/users") {
        response.writeHead(200, {"Content-type":"text/plain"})
        response.write("Hello from Users path");
    }
    else if (urlObject.pathname === "/comments") {
        response.writeHead(200, {"Content-type":"text/plain"})
        response.write("Hello from Comments path");
    }

    response.end();
});

app.listen(4700);
