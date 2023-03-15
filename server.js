const http = require('http');

const server = http.createServer( (req, res) => {
    console.log("My name is Shiv Kumar");
    res.end("Shiv Kumar");
});

server.listen(4000,"127.0.0.1", () => {
    console.log("listening at 4000");
})