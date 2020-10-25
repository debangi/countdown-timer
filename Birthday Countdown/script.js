const birthday='7 Oct 2021';
const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
function countdown(){
    const currDate=new Date();
    const birthdayDate=new Date(birthday);

    const totalSeconds=(birthdayDate-currDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const secs=Math.floor(totalSeconds)%60;
    
    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minutesEl.innerHTML=formatTime(mins);
    secondsEl.innerHTML=formatTime(secs);
}
function formatTime(time){
    if(time<10){
        return `0${time}`;
    }
    else
        return time;
}
setInterval(countdown,1000);
countdown();
