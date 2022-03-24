const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to SCA Cloud School Application')
        res.end()
    }   

})

const port = process.env.PORT||3000
server.listen(port);
