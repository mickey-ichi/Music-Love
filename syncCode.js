const exec = require('child_process').exec;
const sys = require('sys');
const http = require('http');
const PORT = 8081;
const server = http.createServer(handleRequest);

server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

function handleRequest(request, response){
    exec("git pull", (e,o,std) => response.end(o));
}
