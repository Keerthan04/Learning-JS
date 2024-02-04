const express=require('express');//first install express by npm install express
const app=express();

//uses as static-learn what it means
app.use(express.static('public'));

//startin my routes(to tell how and diff requests handler with help of path and http verb)
//home route(/)(always when started this route)
app.get('/',(req,res)=>{
    console.log("request revieved");
    res.send("Welocme to my website this is my first server and this is my response to my request")
    console.log("response sent");
})
//2nd routee 
app.get('/about',(req,res)=>{
    console.log("request revieved");
    //console.log(req);//seeing my req object
    res.send("this is my about page")//just sends and the same prints as a plain text
    console.log("response sent");
    //console.log(res);//seeing my response object
})
//created a dummy route
const students={
    1:{name:"keerthana",course:"bca"},
    2:{name:"prarthana",course:"bca"},
    3:{name:"Jayalaxmi",course:"bca"},
}
app.get('/students',(req,res)=>{
    res.send(students)
})
//creating a dynamic route
app.get('/students/:id',(req,res)=>{
    console.log(req.params)//the object req.params will have now {id : "whatever id passed in route"}
    req.send(students[req.params.id]);//we are using it to extract the id from the url(access property and use it as a key)
})
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})
//to stop in teminal type ctrl + c and always start server  and see
//whenever a change is made here wont reflect in already running server so shd restart server ctrl+c then restart