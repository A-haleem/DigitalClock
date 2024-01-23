let hoursEle = document.querySelector("#hours");
let minutesEle = document.querySelector("#minutes");
let secondsEle = document.querySelector("#seconds");
let amPm = document.querySelector("#amPm");


    setInterval(function(){

        const date = new Date();
        let hours = date.getHours();
        let ampm ="AM";
   
    
    if(hours > 11){
        ampm = "PM"
    if(hours >12){
        hours -=12
    }
    }

hoursEle.innerText = hours
minutesEle.innerText = date.getMinutes();
secondsEle.innerText = date.getSeconds();
amPm.innerText = ampm;
},1000);

