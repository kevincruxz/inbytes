const date = new Date("Feb 10, 2024 19:00:00").getTime();

let setCountdown = setInterval(function() {
    let currentDate = new Date().getTime();
    let timeLeft = date - currentDate;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    displayCountdown(days, hours, minutes, seconds);
}, 1000);

function displayCountdown(days, hours, minutes, seconds) {
    document.getElementById('days').innerHTML = days + ((days === 1) ? " Dia  " : " Dias ");
    document.getElementById('hours').innerHTML = hours + ((hours === 1) ? " Hora " : " Horas ");
    document.getElementById('minutes').innerHTML = minutes + ((minutes === 1) ? " Minuto " : " Minutos ");
    document.getElementById('seconds').innerHTML = seconds + " Segundos ";
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".donde", {
    scrollTrigger: {
        trigger: ".caja-details-donde",
        start: "top center",
        end: "center center",
        scrub: 2,
    }, 
    width: "30%",
});