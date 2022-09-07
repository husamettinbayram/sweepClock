
setInterval(setTime,10);
//  setInterval(setTime,1000);
//  bunu 1000ms yani 1 saniyeden daha hızlı yürütmek miliseconds okuması almadan mümkün değil 


function setTime() {
    const currentDate = new Date;
    
    const degreesmiliSeconds = currentDate.getMilliseconds()/1000*360;

    const degreesSeconds = currentDate.getSeconds() / 60 * 360 + degreesmiliSeconds / 60 ;

    const degreesMinutes = currentDate.getMinutes() / 60 * 360 + degreesSeconds / 60;

    const degreesHours = currentDate.getHours() / 12 * 360 + degreesMinutes / 12;
    
    

    document.getElementById("hand-hour").style.setProperty('--rot-hour', degreesHours);
    // console.log("degreesHours", degreesHours);
    document.getElementById("hand-minute").style.setProperty('--rot-minute', degreesMinutes);
    // console.log("degreesMinutes", degreesMinutes);
    document.getElementById("hand-second").style.setProperty('--rot-second', degreesSeconds);
    // console.log("degreesSeconds", degreesSeconds);

}

setTime();