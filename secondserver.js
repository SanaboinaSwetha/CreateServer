var http=require('http');

var imp=require('./secondmodule');
http.createServer(function(req,res){
   
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(imp.sample());
    res.end();
}).listen(2456);
//or method 2 
// var http=require('http');

// var imp=require('./secondmodule');
// http.createServer(function(req,res){
   
// const msg=imp.sample();
// console.log(msg);
// res.write(msg);
// res.end();
//     res.end();
// }).listen(2456);