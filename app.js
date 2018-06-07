function setDate() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const hoursDeg = (hours / 12) * 360 + 90;
    const minutes = currentTime.getMinutes();
    const minutesDeg = (minutes / 60) * 360 + 90;
    const seconds = currentTime.getSeconds();
    const secondsDeg = (seconds / 60) * 360 + 90;

    if (seconds === 0) {
        document.querySelectorAll(".clock__hand").forEach(hand => {
            hand.style.transitionDuration = "0s";
        });
    } else {
        document.querySelectorAll(".clock__hand").forEach(hand => {
            hand.style.transitionDuration = "0.1s";
        });
    }
    
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    
    document.querySelector(".clock__hand--hour").style.transform = `rotate(${hoursDeg}deg)`;
    document.querySelector(".clock__hand--minute").style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector(".clock__hand--second").style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(setDate, 1000);