//desarrollador: delsy noelia cuellar chung
//fecha:21/04/2024
//cambios: aparecen todas las vocales aún no estando en la frase para eso otra función
//ejemplo4: escribir un programa que pida una frase y escriba las veces que aparece una vocal, las vocales que aparezcan en la frase y cuantas veces aparece cada una 
// Función para contar las veces que aparece cada vocal en una frase y mostrar el resultado en pantalla
function contarVocalesYMostrar(frase) {
    // Convertir la frase a minúsculas para hacer la comparación insensible a mayúsculas
    frase = frase.toLowerCase();

    // Definir un objeto para almacenar el conteo de cada vocal
    var conteoVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    // Recorrer la frase para contar las vocales
    for (var i = 0; i < frase.length; i++) {
        var caracter = frase[i];
        // Verificar si el caracter es una vocal
        if ('aeiou'.includes(caracter)) {
            // Incrementar el conteo de la vocal correspondiente
            conteoVocales[caracter]++;
        }
    }

    // Construir y mostrar el resultado en pantalla
    var resultado = "Resultados:\n";
    for (var vocal in conteoVocales) {
        if (conteoVocales[vocal] > 0) {
            resultado += "La vocal '" + vocal + "' aparece " + conteoVocales[vocal] + " veces.\n";
        }
    }
    alert(resultado);
}

// Solicitar al usuario que ingrese una frase
var fraseUsuario = prompt("Por favor, ingresa una frase:");

// Llamar a la función para contar las vocales en la frase ingresada y mostrar el resultado en pantalla
contarVocalesYMostrar(fraseUsuario);
