const http=require('http');//creating server
const server=http.createServer((req,res)=>{//so this starts when w open the server(like go to the url)
    console.log('request received');
    console.log('sending response');
    res.writeHead(200,"good",{"content-type" :"text/plain"});//write head is header of the response of http
    res.write("hello wolrd this is my first server");//write is the data that goes in the body of http which is displayed
    res.end();//should end the response
})
server.listen(3000);//listen to port

//http://localhost:3000