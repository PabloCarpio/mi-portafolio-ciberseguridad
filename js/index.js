// const formulario = document.querySelector('#miFormulario');
// const nombreInput = document.querySelector('#nombre');
// const emailInput = document.querySelector('input[type="email"]');
// const mensajeInput = document.querySelector('textarea');
// const statusMensaje = document.querySelector('#status-mensaje');

// function esEmailValido(email) {
//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regexEmail.test(email);
// }

// function contieneCaracteresPeligrosos(texto) {
//     const caracteresProhibidos = /[<>{}\[\]\\\/]/;
//     return caracteresProhibidos.test(texto);
// }

// formulario.addEventListener('submit', function (event) {
//     const nombreLimpio = nombreUsuario.replace(/[<>]/g, "");
//     // alert("¡Acceso concedido, " + nombreLimpio + "!");
//     event.preventDefault();
//     let errores = [];
//     const nombreUsuario = nombreInput.value.trim();
//     const valorEmail = emailInput.value.trim();
//     const valorMensaje = mensajeInput.value.trim();

//     statusMensaje.textContent = "";
//     statusMensaje.className = "";

//     if (!esEmailValido(valorEmail)) {
//         errores.push("- El formato del correo no es válido.");
//     }

//     if (contieneCaracteresPeligrosos(valorMensaje)) {
//         errores.push("- Se detectaron caracteres prohibidos por seguridad.");
//     }

//     if (errores.length > 0) {
//         alert("⚠️ BLOQUEO DE SEGURIDAD:\n\n" + errores.join("\n"));
//         return;
//     }

//     statusMensaje.textContent = `¡Acceso concedido, ${nombreUsuario}! Tu mensaje ha sido enviado con éxito.`;
//     statusMensaje.classList.add("mensaje-exito");

//     formulario.reset();
// });

// const secciones = document.querySelectorAll('section');

// secciones.forEach(seccion => {
//     seccion.addEventListener('mouseenter', () => {
//         seccion.style.borderColor = '#00ff41'; // Tu verde neón
//         seccion.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.2)';
//     });

//     seccion.addEventListener('mouseleave', () => {
//         seccion.style.borderColor = '#30363d';
//         seccion.style.boxShadow = 'none';
//     });
// });

// 1. Selección de elementos (Aseguramos que existan en el DOM)
const formulario = document.querySelector('#miFormulario');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('input[type="email"]');
const mensajeInput = document.querySelector('textarea');
const statusMensaje = document.querySelector('#status-mensaje');

// 2. Funciones de Validación y Seguridad
function esEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function contieneCaracteresPeligrosos(texto) {
    // Bloquea etiquetas HTML y scripts para prevenir XSS
    const caracteresProhibidos = /[<>{}\[\]\\\/]/;
    return caracteresProhibidos.test(texto);
}

// 3. Manejador del Evento Envío
if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Detiene la recarga de la página

        // --- EL ORDEN IMPORTANTE ---
        // Primero capturamos los valores
        const nombreUsuario = nombreInput.value.trim();
        const valorEmail = emailInput.value.trim();
        const valorMensaje = mensajeInput.value.trim();
        
        let errores = [];

        // Limpiamos estados anteriores del mensaje visual
        if (statusMensaje) {
            statusMensaje.textContent = "";
            statusMensaje.className = "";
            statusMensaje.style.display = "none";
        }

        // --- VALIDACIONES ---
        if (!esEmailValido(valorEmail)) {
            errores.push("El formato del correo no es válido.");
        }

        if (contieneCaracteresPeligrosos(valorMensaje)) {
            errores.push("Se detectaron caracteres prohibidos por seguridad.");
        }

        // --- LÓGICA DE RESPUESTA ---
        if (errores.length > 0) {
            // Si hay errores, mostramos mensaje de error
            if (statusMensaje) {
                statusMensaje.textContent = "⚠️ Error: " + errores.join(" ");
                statusMensaje.classList.add("mensaje-error");
                statusMensaje.style.display = "block";
            } else {
                alert("Bloqueo de seguridad:\n" + errores.join("\n"));
            }
        } else {
            // SI TODO ESTÁ BIEN:
            // Limpiamos el nombre de posibles tags antes de mostrarlo
            const nombreLimpio = nombreUsuario.replace(/[<>]/g, "");

            if (statusMensaje) {
                statusMensaje.textContent = `¡Acceso concedido, ${nombreLimpio}! Tu mensaje ha sido enviado con éxito.`;
                statusMensaje.classList.add("mensaje-exito");
                statusMensaje.style.display = "block";
            } else {
                alert(`¡Acceso concedido, ${nombreLimpio}!`);
            }

            // AHORA SÍ, reseteamos el formulario
            formulario.reset();
        }
    });
}

// 4. Efectos Visuales en Secciones (Hover dinámico)
const secciones = document.querySelectorAll('section');

secciones.forEach(seccion => {
    seccion.addEventListener('mouseenter', () => {
        seccion.style.borderColor = '#00ff41'; // Verde neón
        seccion.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.2)';
        seccion.style.transition = '0.3s';
    });

    seccion.addEventListener('mouseleave', () => {
        seccion.style.borderColor = '#30363d'; // Color original de tu CSS
        seccion.style.boxShadow = 'none';
    });
});