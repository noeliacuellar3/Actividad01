/*desarrollador: delsy noelia cuellar chung
//fecha:21/04/2024
ejemplo: escribir un programa para imprimir N números primos generados de forma aleatoria
y cargado en un array que sean menores al 110 en javascript*/

// Función para verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Función para generar números primos menores que 110
function generarNumerosPrimosAleatorios(N) {
    var numerosPrimos = [];
    while (numerosPrimos.length < N) {
        var numeroAleatorio = Math.floor(Math.random() * 110); // Generar número aleatorio entre 0 y 109
        if (esPrimo(numeroAleatorio)) {
            numerosPrimos.push(numeroAleatorio);
        }
    }
    return numerosPrimos;
}

// Definir la cantidad de números primos que se desean generar
var cantidadNumerosPrimos = 10; // Puedes cambiar este valor según tu preferencia

// Generar los números primos y almacenarlos en un array
var numerosPrimosGenerados = generarNumerosPrimosAleatorios(cantidadNumerosPrimos);

// Imprimir los números primos generados
console.log("Números primos generados menores que 110:");
console.log(numerosPrimosGenerados);

