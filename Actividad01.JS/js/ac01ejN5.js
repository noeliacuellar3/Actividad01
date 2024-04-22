/* //desarrollador: delsy noelia cuellar chung
//fecha:21/04/2024
//ejercicio5:en base a 2 array de nombre y apellido, genere un nuevo array combinando de forma aleatoria
ambos, formatee los nombres convirtiendo el primer elelemto del nombre y apellido en mayuscula y el resto en minuscula*/

// Arrays con nombres y apellidos
var nombres = ["juan", "pedro", "maria", "ana", "luis"];
var apellidos = ["perez", "gomez", "gonzalez", "rodriguez", "sanchez"];

// Función para combinar los nombres y apellidos de forma aleatoria y formatearlos
function combinarNombresYApellidos(nombres, apellidos) {
    var nombresFormateados = nombres.map(function(nombre) {
        return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    });

    var apellidosFormateados = apellidos.map(function(apellido) {
        return apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();
    });

    var nombresCombinados = [];
    for (var i = 0; i < nombres.length; i++) {
        var nombreAleatorio = nombresFormateados[Math.floor(Math.random() * nombresFormateados.length)];
        var apellidoAleatorio = apellidosFormateados[Math.floor(Math.random() * apellidosFormateados.length)];
        nombresCombinados.push(nombreAleatorio + " " + apellidoAleatorio);
    }
    return nombresCombinados;
}

// Generar el nuevo array combinando nombres y apellidos y formateándolos
var nombresCombinadosFormateados = combinarNombresYApellidos(nombres, apellidos);

// Mostrar el resultado
console.log("Nombres combinados y formateados:");
console.log(nombresCombinadosFormateados);
