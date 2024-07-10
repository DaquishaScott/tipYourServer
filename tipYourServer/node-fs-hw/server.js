const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(function (request, response) {
    if (request.url === '/' && request.method === "GET") {
        fs.readFileSync('index.html', function (error, data) {
            if (error) {
                response.end();
            } else {
                response.writeHead(200, { "content-type": "text/html" });
                response.write(data);
                response.end();
            }
        });
    } else if (request.url === "/create-directory" && request.method === "GET") {
        fs.mkdir(path.join(__dirname, 'content'), { recursive: true }, (err) => {
            if (err) {
                response.end('Failed to create directory');
            } else {
                console.log('content folder created');
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end('Directory created');
            }
        });
    } else if (request.url === "/create-text" && request.method === "GET") {
        const filePath = path.join(__dirname, 'randomText.txt');
        fs.writeFile(filePath, 'This is some random text', (err) => {
            if (err) {
                response.end('Failed to create file');
            } else {
                console.log('randomText.txt created');
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end('File created');
            }
        });
    } else if (request.url === "/new-folder-and-file" && request.method === "GET") {
        const srcFilePath = path.join(__dirname, 'randomText.txt');
        const destDirPath = path.join(__dirname, 'content');
        const destFilePath = path.join(destDirPath, 'verbage.txt');

        fs.readFile(srcFilePath, 'utf8', (err, data) => {
            if (err) {
                response.end('Failed to read file');
            } else {
                fs.mkdir(destDirPath, { recursive: true }, (err) => {
                    if (err) {
                        response.end('Failed to create directory');
                    } else {
                        fs.writeFile(destFilePath, data, (err) => {
                            if (err) {
                                response.end('Failed to create file');
                            } else {
                                console.log('verbage.txt created');
                                response.writeHead(200, { 'Content-Type': 'text/plain' });
                                response.end('File created inside directory');

                                setTimeout(() => {
                                    fs.rmdir(destDirPath, { recursive: true }, (err) => {
                                        if (err) {
                                            console.error(err);
                                        } else {
                                            console.log('content folder deleted');
                                        }
                                    });
                                }, 7000);
                            }
                        });
                    }
                });
            }
        });
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Not Found');
    }
}).listen(3000, function () {
    console.log("Server Started!");
});