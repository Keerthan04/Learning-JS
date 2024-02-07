const express=require('express');
const cors=require('cors');

const db=require('./db');
const bodyParser=require('body-parser');

const doctorRoute = express.Router();

//implementation of crud operations
doctorRoute.get('/', (req, res) => {
    const doctors=db.getalldoctors()
    if(doctors.length===0){
        res.status(404).send("No doctors found");
    }
    else{
        res.send(doctors);
    }
});

doctorRoute.get('/:id', (req, res) => {
    const doctor = db.getdoctorsbyid(req.params.id-1);
    if(doctor){
        res.send(doctor);
    }
    else{
        res.status(404).send("Doctor not found");
    }
});

doctorRoute.post('/', (req, res) => {
    const query=req.query;
    const doctor = db.addDoctor(query);
    if(doctor){
        res.send(doctor);
    }
    else{
        res.status(404).send("Doctor not added");
    }
});
 doctorRoute.delete('/:id', (req, res) => {
    const doctor = db.deletedoctor(req.params.id-1);
    if(doctor){
        res.send(doctor);
    }
    else{
        res.status(404).send("Doctor not deleted");
    }
 });
 doctorRoute.put('/:id', (req, res) => {
    const doctor = db.updatedoctor(req.params.id-1,req.query);
    if(doctor){
        res.send(doctor);
    }
    else{
        res.status(404).send("Doctor not updated");
    }
 })
module.exports=doctorRoute;