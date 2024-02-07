const doctors=
    [
        {
          "id": 1,
          "name": "Dr. John Smith",
          "specialty": "Cardiology",
          "hospital": "General Hospital"
        },
        {
          "id": 2,
          "name": "Dr. Emily Johnson",
          "specialty": "Pediatrics",
          "hospital": "Children's Hospital"
        },
        {
          "id": 3,
          "name": "Dr. Michael Williams",
          "specialty": "Orthopedics",
          "hospital": "OrthoCare Clinic"
        }
    ]

const patients=
[
    {
      "id": 1,
      "name": "Alice Johnson",
      "age": 35,
      "gender": "Female",
      "doctor_id": 1
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "age": 45,
      "gender": "Male",
      "doctor_id": 2
    },
    {
      "id": 3,
      "name": "Carol Davis",
      "age": 25,
      "gender": "Female",
      "doctor_id": 3
    }
  ]

  const getalldoctors=()=>{
    return doctors;
  }
  const getdoctorsbyid=(id)=>{
      if(id<0 || id>=doctors.length)return null;
      return doctors[id];
  }

  const addDoctor=(query)=>{
    const doctor={
      "id":query.id,
      "name":query.name,
      "specialty":query.specialty,
      "hospital":query.hospital
    }
    doctors.push(doctor);
    return doctors[doctors.length-1];
  }
  const deletedoctor=(id)=>{
    if(id<0 || id>=doctors.length)return null;
    return doctors.splice(id,1);
  }
  const updatedoctor=(id,query)=>{
    if(id<0 || id>=doctors.length)return null;
    doctors[id].name=query.name;
    doctors[id].specialty=query.specialty;
    doctors[id].hospital=query.hospital;
    return doctors[id];
  }
  //similar done to patients
module.exports = {getalldoctors,getdoctorsbyid,addDoctor,deletedoctor,updatedoctor};
