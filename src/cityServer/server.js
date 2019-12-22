 
const http = require('http');
const russia = require('./russia.json.js.js');

const app = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");

    req.on('error', err => {
        console.error(err);
        res.statusCode = 400;
        res.end('400: Bad Request');
        console.error(err);
        return;
    });

    if(req.url === '/') {
      res.end(JSON.stringify(russia));
    }
});
app.listen(3001);