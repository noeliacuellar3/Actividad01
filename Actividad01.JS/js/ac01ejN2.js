// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Función para validar el usuario y la contraseña
    function validarCredenciales(user, pass) {
        // Lista de nombres de usuario válidos
        var userValidos = ['juan', 'pedro', 'maria', 'raul'];
        // Contraseña válida
        var passValida = 'D153n0W3b2';

        // Verificar si el usuario está en la lista de usuarios válidos y si la contraseña es correcta
        if (userValidos.includes(user.toLowerCase()) && pass === passValida) {
            return true; // Las credenciales son válidas
        } else {
            // Las credenciales son inválidas, registrar intento de acceso fallido
            registrarIntentoFallido(user);
            return false; // Las credenciales son inválidas
        }
    }

    // Función para registrar intento fallido de acceso
    function registrarIntentoFallido(user) {
        // Mostrar mensaje de error
        alert("Usuario o contraseña incorrectos. Acceso denegado para el usuario: " + user);
    }

    // Función para solicitar el nombre de usuario y la contraseña
    function ingresarCredenciales() {
        // Solicitar al usuario su nombre de usuario y contraseña
        var user = prompt("Ingrese su nombre de usuario:");
        var pass = prompt("Ingrese su contraseña:");

        // Validar las credenciales ingresadas por el usuario
        var credenciales = validarCredenciales(user, pass);

        // Mostrar contenido según el resultado de la validación
        if (credenciales) {
            document.querySelector("#content_main").removeAttribute("hidden");
        } else {
            document.querySelector("#content_fake").removeAttribute("hidden");
        }
    }

    // Llamar a la función para solicitar las credenciales al usuario
    ingresarCredenciales();
});
