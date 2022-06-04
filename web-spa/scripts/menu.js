let isMenuDesplegado = false;

function desplegarMenu() {
    let menuNav = document.getElementById("menu-nav")
    //let menuNav = document.getElementById("hola")
    let menuPestanas = document.getElementsByClassName(".menu-pestanas");
    let pestanas = document.querySelectorAll(".menu-pestanas-pestana");

    if (isMenuDesplegado) {
        // contraer contenedor:
        menuNav.classList.remove("mostrar");

        //ocultar botones:
        pestanas.forEach(
            pestana => {
                pestana.classList.remove("mostrar");
            }
        );

        // switches
        isMenuDesplegado = false;
    }
    else {
        // expandir contenedor:
        menuNav.classList.add("mostrar");

        // mostrar botones:
        pestanas.forEach(
            pestana => {
                pestana.classList.add("mostrar");
            }
        );
        // switches
        isMenuDesplegado = true;
    }
}