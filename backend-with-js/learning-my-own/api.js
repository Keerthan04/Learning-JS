const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const PORT=process.env.PORT || 4001;

const app=express();
app.use(bodyParser.json());
app.use(cors());

//mounting routers here
app.use('/doctors',require('./doctors.js'));
// app.use('/patients',require('./patients.js'));
app.listen(PORT,()=>{
    console.log("server is listening");
})