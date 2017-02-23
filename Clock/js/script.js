const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');

function setTiming(){
    const time = new Date();

    const seconds = time.getSeconds();
    const secondsDegrees = (seconds / 60 * 360)+ 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = time.getMinutes();
    const minutesDegrees = (minutes / 60 * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = time.getHours();
    const hoursDegrees = (hours / 12 * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTiming, 1000);

setTiming();