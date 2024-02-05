(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

const elements = ['Cuenta Regresiva', 'Galeria de Fotos', 'Itinerario', 'Musica', 'Ubicacion con Google Maps', 'Mesa de Regalos', 'Confirmacion de Asistencia'];
let i = 0;

setInterval(() => {
    document.getElementById('texto-cont').innerHTML = elements[i];
    i = (i === elements.length - 1) ? 0 : (i + 1);
}, 1000);



const checkMusica = document.getElementById('flexCheckDefault');
const input = document.getElementById('inputMusica');

checkMusica.addEventListener('change', () => {
    input.style.display = (checkMusica.checked) ? 'block' : 'none';
});

const checkItinerario = document.getElementById('checkItinerario');
const timeline = document.querySelector('.timeline');

checkItinerario.addEventListener('change', () => {
    timeline.style.display = (checkItinerario.checked) ? 'block' : 'none';
});

const checkMesa = document.getElementById('checkRegalos');
const mesa = document.getElementById('mesaDeRegalos');

checkMesa.addEventListener('change', () => {
    mesa.style.display = (checkMesa.checked) ? 'block' : 'none';
});

document.getElementById('checkTodaviaNo').addEventListener('change', () => {
    const mesaRegalosInput = document.getElementById('mesaRegalos');

    if (document.getElementById('checkTodaviaNo').checked) {
        mesaRegalosInput.setAttribute('disabled', 'true');
    } else {
        mesaRegalosInput.removeAttribute('disabled');
    }
});

document.getElementById('checkAsistencia').addEventListener('change', () => {
    document.getElementById('inputAsistencia').style.display = (document.getElementById('checkAsistencia').checked) ? 'block' : 'none';
});



function agregarNuevaLinea(event) {
    event.preventDefault(); // Evitar la recarga de la página

    // Eliminar el antiguo botón
    let addButton = timeline.querySelector('.botonAdd');
    if (addButton) {
        addButton.remove();
    }

    // Clonar la línea
    let newLine = document.querySelector('.lineaVertical').cloneNode(true);
    newLine.style.top = topDistance + 'px';
    topDistance -= 40;
    newLine.querySelector('.punto').textContent = 'Punto ' + punto;
    punto++;

    // Agregar la nueva línea al final de '.timeline'
    timeline.appendChild(newLine);

    // Crear un div donde va el botón y la lines
    let newDiv = document.createElement('div');
    newDiv.classList.add('d-flex', 'align-items-center', 'botonAdd');
    newDiv.style.position = 'absolute';
    newDiv.style.bottom = '-20px';
    newDiv.style.left = '0';

    // Crea una linea antes del boton
    let newLinea = document.createElement('div');
    newLinea.classList.add('lineaHorizontal', 'bg-primary');
    newLinea.style.width = '30px';
    newLinea.style.height = '3px';

    // Crear un nuevo botón dentro de la nueva línea
    let newAddButton = document.createElement('button');
    newAddButton.classList.add('btn', 'btn-primary', 'font-weight-bold', 'ml-2');
    newAddButton.style.width = '9rem';
    newAddButton.style.fontSize = '15px';
    newAddButton.textContent = 'Añadir Punto';

    // Agregar un nuevo evento al nuevo botón
    newAddButton.addEventListener('click', agregarNuevaLinea);

    // Agregar el nuevo botón al final de la línea
    newDiv.appendChild(newLinea);
    newDiv.appendChild(newAddButton);
    newLine.appendChild(newDiv);
    
}

// Agregar evento al botón original
let addButton = document.querySelector('.botonAdd');
addButton.addEventListener('click', agregarNuevaLinea);
let topDistance = -40, punto = 2;
