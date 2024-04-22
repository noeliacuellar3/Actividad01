//desarrollador: delsy noelia cuellar chung
//fecha:21/04/2024
//ejercicio1:descripción:escribir un programa donde nos de la bienvenida y 
//nos indique en que navegador estamos ejecutando con js

// Función para obtener el nombre del navegador
function obtenerNavegador() {
    var agenteUsuario = navigator.userAgent;
    var nombreNavegador;

    // Detectar Chrome
    if (agenteUsuario.indexOf("Chrome") > -1) {
        nombreNavegador = "Google Chrome";
    }
    // Detectar Firefox
    else if (agenteUsuario.indexOf("Firefox") > -1) {
        nombreNavegador = "Mozilla Firefox";
    }
    // Detectar Safari
    else if (agenteUsuario.indexOf("Safari") > -1) {
        nombreNavegador = "Safari";
    }
    // Detectar Edge
    else if (agenteUsuario.indexOf("Edg") > -1) {
        nombreNavegador = "Microsoft Edge";
    }
    // Otros navegadores
    else {
        nombreNavegador = "navegador desconocido";
    }

    return nombreNavegador;
}

// Función para dar la bienvenida y mostrar el navegador
function darBienvenida() {
    var navegador = obtenerNavegador();
    alert("¡Bienvenido! Estás utilizando el navegador: " + navegador);
}

// Llamar a la función para dar la bienvenida al cargar la página
darBienvenida();
