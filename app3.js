const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const clockDate = document.querySelector(".date");


function setDate() {
    let instance = new Date();
    let sec = instance.getSeconds();
    let min = instance.getMinutes();
    let hrs = instance.getHours();
    let day = instance.getDay();


    let secAngle = (sec / 60) * 360 + 90;
    secHand.style.transform = `rotate(${secAngle}deg)`;


   
    let minAngle = (min / 60) * 360 + (sec / 60) * 6 + 90;
    minHand.style.transform = `rotate(${minAngle}deg)`;

   
    let hrsAngle = (hrs / 12) * 360 + (min / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hrsAngle}deg)`;

    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    clockDate.innerHTML = `${days[day]} ${instance.getDate()}`; 

  

}

setInterval(setDate , 1000);