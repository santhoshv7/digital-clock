setInterval(showTime,1000);

function showTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let time_period = "AM";

    if (hour>=12){
        if(hour>12){
            hour-=12;
            time_period = "PM";
        }
        else if (hour ==0){
            hour = 12;
            time_period = "AM";
        }
    }

    hour = hour<10? "0"+hour : hour;
    minute = minute<10? "0"+minute : minute;
    second = second<10? "0"+second : second;

    let currentTime = hour+":"+minute+":"+second+" "+time_period;

    document.getElementById("clock").innerHTML =  currentTime;





}

showTime();