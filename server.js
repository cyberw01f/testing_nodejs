const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
       fs.writeFileSync('message.txt','DUMMY');
       res.statusCode = 302;
       res.setHeader('Location','/');
       return res.end();
    }
    
});


server.listen(3000);