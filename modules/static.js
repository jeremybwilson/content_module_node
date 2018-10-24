const fs   = require('fs');
const path = require('path');

module.exports = (request, response)  => {
fs.exists('.' + request.url, (exists)  => {
    if (exists) {
        if (request.url === '/') {
            fs.readFile('./views/index.html', 'utf8', (errors, contents)  => {
                response.write(contents);
                response.end();
            });
        } else {
            fs.readFile('.' + path.dirname(request.url) + '/' + path.basename(request.url), (errors, contents) => {
                response.write(contents);
                response.end();
            });
        }
        } else {
            response.end('File not Found!!!');
        }
    })
};