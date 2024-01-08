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
gsap.registerPlugin(TextPlugin);

gsap.to('.fieston', {
    scrollTrigger: {
        trigger: '.fieston',
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
    },
    x: '130vw',
    rotate: '-25deg',
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".caja-details-donde",
        start: "top center",
        end: "+=50px center",
        scrub: 2,
    }
})

tl.to('.txt-donde', {
    duration: 2,
    text: "This is the new text",
    ease: "none",
    paddingX: "10px",
    width: "55vw",
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".caja-details-cuando",
        start: "center center",
        end: "+=50px center",
        scrub: 2,
    }
})

tl.to('.txt-cuando', {
    duration: 2,
    text: "This is the new text",
    ease: "none",
    paddingX: "10px",
    width: "55vw",
})