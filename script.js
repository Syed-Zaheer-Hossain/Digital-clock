let time, date, timi, timim, hours;
setInterval(() => {
    timi = new Date().toTimeString();
    date = new Date().toDateString();
    timim = timi.slice(0, 8)
    hours = new Date().getHours();
    if (hours >= 12) {
        time = `${timim} PM<br>${date}`
    }
    else {
        time = `${timim} AM<br>${date}`
    }
    document.querySelector(".clock-body-2").innerHTML = time;
},1000)
