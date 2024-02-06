const express=require('express');
const app=express();

let studentsname={
    1:{name:"keerthana",course:"bca"},
    2:{name:"prarthana",course:"bca"},
    3:{name:"Jayalaxmi",course:"bca"},
}
//studentsname is object and student is router(matching the routes prefix with /students)

const student=express.Router();//creating a router instance from express

app.use('/students',student);//using it here

//all routes inside student router is assumed to have /students appended to it and will be handled by student router
student.get('/:id',(req,res)=>{//so for all the routes which matches with /students/:id this will be used
    const getbyid= studentsname[req.params.id]
    if(getbyid){
        res.send(studentsname[req.params.id]);//we are using it to extract the id from the url(access property and use it as a key)
        //res.send(`ur id is ${req.params.id}`);
        //always sendin is res.send
    }
    else{
        res.status(404).send("id not found");//setting status code so client can see about their response
    }
})
student.get('/',(req,res)=>{//for this to access it will be localhost:3000/students/ here also prefixed 
    res.send("this is home page of /students");
    res.send(studentsname);//wont be send only once send i believe
})

//using different files for routers
const teacherroute=require('./teachers.js');
app.use('/teachers',teacherroute)//so for all the routes which matches with /teachers this will be used and the handling of the expression for this will be done in teachers.js



app.listen(3000,()=>{
    console.log('server is running on port 3000');
})