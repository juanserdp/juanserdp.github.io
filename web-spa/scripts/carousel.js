function activar(numeroSlide, slide) {
    let items = document.querySelectorAll(".slide");
    items.forEach(
        (item) => {
            item.classList.remove("active");
        }
    );

    // llenar circulo
    slide.classList.add("active");


    // con el numero buscar la image
    let imagen = document.getElementById("imagen");
    imagen.src = `./images/publicidad${numeroSlide}.jpg`
}



function slide(slide) {
    let numeroSlide = slide.getAttribute("data-slide-to");
    activar(numeroSlide, slide);
}

function repeticion(tiempo) {
    for (let i = 1; i <= 5; i++) {
        setTimeout(
            () => {
                // aqui tengo la slide actual
                let slideActual = document.querySelectorAll(".active");

                // con esto tengo el indice de la slide actual
                let numeroSlide = parseInt(slideActual[0].getAttribute("data-slide-to"), 10);

                // remover el active de la slide actual
                slideActual[0].classList.remove("active");

                // con esto tengo todas las slide
                let slides = document.querySelectorAll(".slide");



                //alert("entro ")
                // si numeroSlide es 5 se reinicia el contador a cero sino le suma 1
                if (numeroSlide === 1) {
                    // selecciono la siguiente slide
                    let slideSiguiente = slides[numeroSlide];

                    // llenar circulo
                    slideSiguiente.classList.add("active");

                    // con el numero buscar la imagen
                    let imagen = document.getElementById("imagen");
                    imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
                }
                else if (numeroSlide === 5) {
                    numeroSlide = 0;

                    // selecciono la siguiente slide
                    let slideSiguiente = slides[numeroSlide];

                    // llenar circulo
                    slideSiguiente.classList.add("active");

                    // con el numero buscar la imagen
                    let imagen = document.getElementById("imagen");
                    imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
                }

                else if (numeroSlide < 5) {
                    // selecciono la siguiente slide
                    let slideSiguiente = slides[numeroSlide];

                    // llenar circulo
                    slideSiguiente.classList.add("active");

                    // con el numero buscar la imagen
                    let imagen = document.getElementById("imagen");
                    imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
                }



            }, (tiempo * i)
        );
    }
}
let j = [];
function auto(tiempo) {
    while (j < 50) {
        j.append(setTimeout(
            () => {
                repeticion(tiempo);
            }, tiempo * 5 * j
        ));
        j++;
    }
}
auto(4000);
function reiniciar() {
    j.map(
        (item) => {
            clearTimeout(item);
        }
    );
    auto(4000);
}

function flechas(flecha) {
    // reiniciar();
    let direccion = flecha.getAttribute("data-direccion");
    if (direccion == "izquierda") {
        // aqui tengo la slide actual
        let slideActual = document.querySelectorAll(".active");

        // con esto tengo el indice de la slide actual
        let numeroSlide = parseInt(slideActual[0].getAttribute("data-slide-to"), 10);

        // remover el active de la slide actual
        slideActual[0].classList.remove("active");

        // con esto tengo todas las slide
        let slides = document.querySelectorAll(".slide");



        //alert("entro ")
        // si numeroSlide es 5 se reinicia el contador a cero sino le suma 1
        if (numeroSlide === 1) {
            numeroSlide = 4;
            // selecciono la siguiente slide
            let slideSiguiente = slides[numeroSlide];

            // llenar circulo
            slideSiguiente.classList.add("active");

            // con el numero buscar la imagen
            let imagen = document.getElementById("imagen");
            imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
        }
        else if (numeroSlide === 5) {

            // selecciono la siguiente slide
            let slideSiguiente = slides[numeroSlide - 2];

            // llenar circulo
            slideSiguiente.classList.add("active");

            // con el numero buscar la imagen
            let imagen = document.getElementById("imagen");
            imagen.src = `./images/publicidad${numeroSlide - 1}.jpg`
        }

        else if (numeroSlide < 5) {
            // selecciono la siguiente slide
            let slideSiguiente = slides[numeroSlide - 2];

            // llenar circulo
            slideSiguiente.classList.add("active");

            // con el numero buscar la imagen
            let imagen = document.getElementById("imagen");
            imagen.src = `./images/publicidad${numeroSlide - 1}.jpg`
        }

    }
    else if (direccion == "derecha") {
        // aqui tengo la slide actual
        let slideActual = document.querySelectorAll(".active");

        // con esto tengo el indice de la slide actual
        let numeroSlide = parseInt(slideActual[0].getAttribute("data-slide-to"), 10);

        // remover el active de la slide actual
        slideActual[0].classList.remove("active");

        // con esto tengo todas las slide
        let slides = document.querySelectorAll(".slide");



        //alert("entro ")
        // si numeroSlide es 5 se reinicia el contador a cero sino le suma 1
        if (numeroSlide === 1) {
            // selecciono la siguiente slide
            let slideSiguiente = slides[numeroSlide];

            // llenar circulo
            slideSiguiente.classList.add("active");

            // con el numero buscar la imagen
            let imagen = document.getElementById("imagen");
            imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
        }
        else if (numeroSlide === 5) {
            numeroSlide = 0;

            // selecciono la siguiente slide
            let slideSiguiente = slides[numeroSlide];

            // llenar circulo
            slideSiguiente.classList.add("active");

            // con el numero buscar la imagen
            let imagen = document.getElementById("imagen");
            imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
        }

        else if (numeroSlide < 5) {
            // selecciono la siguiente slide
            let slideSiguiente = slides[numeroSlide];

            // llenar circulo
            slideSiguiente.classList.add("active");

            // con el numero buscar la imagen
            let imagen = document.getElementById("imagen");
            imagen.src = `./images/publicidad${numeroSlide + 1}.jpg`
        }
    }
}

// let slideActual = document.querySelectorAll(".active");
// slideActual[0].classList.remove("active");
