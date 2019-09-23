var http = require('http');
var fs = require('fs');

http.createServer(
    function(req, res) {
        res.writeHead( 200, {'Content-Type': 'text/html'});
        var obj = {
            f: 'J',
            l: 'D'
        };
        res.end(JSON.stringify(obj));
    }
).listen(1337, '127.0.0.1');