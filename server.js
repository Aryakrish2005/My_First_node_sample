const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    const filePath = path.join(__dirname, "notes.txt");

    fs.readFile(filePath, "utf8", (err, data) => {

        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Error reading notes.txt");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(data);
    });

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});