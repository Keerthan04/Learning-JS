const express=require('express');//first install express by npm install express
const app=express();
//learn sending post put requests because browser send get requests mostly

//uses as static-learn what it means
app.use(express.static('public'));

//starting my routes(to tell how and diff requests handler with help of path and http verb)
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
let students={
    1:{name:"keerthana",course:"bca"},
    2:{name:"prarthana",course:"bca"},
    3:{name:"Jayalaxmi",course:"bca"},
}
app.get('/students',(req,res)=>{
    res.send(students);
})
//creating a dynamic route
app.get('/students/:id',(req,res)=>{//params always has : before them in route
    //the object req.params will have now {id : "whatever id passed in route"}
    //setting status codes and sending response
    const getbyid= students[req.params.id]
    if(getbyid){
        res.send(students[req.params.id]);//we are using it to extract the id from the url(access property and use it as a key)
        //res.send(`ur id is ${req.params.id}`);
        //always sendin is res.send
    }
    else{
        res.status(404).send("id not found");//setting status code so client can see about their response
    }
    
})
//using query parameters and put request
app.put('/students/:id', (req, res) => {
    const query = req.query;
    console.log(query);
    students[req.params.id] = query;
    console.log(students);
    res.send(students[req.params.id]);
});//see how query comes
//http..../students/3?name=chandru&course=mca so query object as key value pairs the = wala and & is another property
//the query is {name:chandru,course:mca} so based on the id we set it(update as put request) and we send the updated one always to client

//creating a post route(remember id and all wont be there)
app.post('/students',(req,res)=>{//status of 201 if success or else 400
    let query=req.query;
    students[4]=query;//here simply done actually dynamically shd be created
    res.send(students);
})

//creating delete route
qpp.delete('/students/:id',(req,res)=>{//id as delete of id if sucess status 204
    delete students[req.params.id];
    res.send(students);
})
app.listen(4000,()=>{
    console.log('server is running on port 4000');
})
//to stop in teminal type ctrl + c and always start server  and see
//whenever a change is made here wont reflect in already running server so shd restart server ctrl+c then restart