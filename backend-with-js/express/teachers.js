const express=require('express');
//this is a nested route here i can use other nested route also and so on and so on

const teachers={
    1:{name:"keerthana",course:"bca"},
    2:{name:"prarthana",course:"bca"},
    3:{name:"Jayalaxmi",course:"bca"},
}

const teacherroute=express.Router();//imp creating an instance of router
teacherroute.get('/:id',(req,res)=>{//see how id is used here also
    const getbyid= teachers[req.params.id]
    if(getbyid){
        res.send(teachers[req.params.id]);//we are using it to extract the id from the url(access property and use it as a key)
        //res.send(`ur id is ${req.params.id}`);
        //always sendin is res.send
    }
    else{
        res.status(404).send("id not found");//setting status code so client can see about their response
    }
});

module.exports=teacherroute;//exporting the router we created in this file