/*
    Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, 
we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a 
sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = day=>{
    switch(day){
      case 'monday':
        return 5;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 9;
        break;
      case 'sunday':
        return 6;
        break;
      default:
        return " not proper input";
    }
  };
  
  const getActualSleepHours = () =>{
    let days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    let sum=0;
    for(let i=0;i<days.length;i++){
      sum+=getSleepHours(days[i]);
    }
    return sum;
  };
  
  const getIdealSleepHours = ()=>{
    let idealHours=8;
    return idealHours*7;
  };
  const calculateSleepDept = () =>{
    let actualSleepHours=getActualSleepHours();
    let idealSleepHours=getIdealSleepHours();
    if(actualSleepHours===idealSleepHours){
      console.log("perfect sleep schedule");
    }
    else if(actualSleepHours>=idealSleepHours){
      console.log("more sleep than ideal");
    }
    else{
      console.log("should get some rest");
    }
  };
  calculateSleepDept();