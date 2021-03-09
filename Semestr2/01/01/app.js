const http = require("http");

const app = http.createServer((request, response) => {
    response.end("Hello World");
});

app.listen(4700);
