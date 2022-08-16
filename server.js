const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html');

    let path = './display/';
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;        
    }
    
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
        }
        res.write(data)
        res.end();
    })

})

app.listen(5050, () => {
    console.log('listening at port 5050')
})