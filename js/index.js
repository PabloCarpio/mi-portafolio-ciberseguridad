const formulario = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
// Agregamos estas dos para la validación avanzada
const emailInput = document.querySelector('input[type="email"]');
const mensajeInput = document.querySelector('textarea');

function esEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function contieneCaracteresPeligrosos(texto) {
    const caracteresProhibidos = /[<>{}\[\]\\\/]/;
    return caracteresProhibidos.test(texto);
}

formulario.addEventListener('submit', function (event) {
    const nombreLimpio = nombreUsuario.replace(/[<>]/g, ""); 
    alert("¡Acceso concedido, " + nombreLimpio + "!");
    event.preventDefault();
    let errores = [];
    const nombreUsuario = nombreInput.value.trim();
    const valorEmail = emailInput.value.trim();
    const valorMensaje = mensajeInput.value.trim();

    if (!esEmailValido(valorEmail)) {
        errores.push("- El formato del correo no es válido.");
    }

    if (contieneCaracteresPeligrosos(valorMensaje)) {
        errores.push("- Se detectaron caracteres prohibidos por seguridad.");
    }

    if (errores.length > 0) {
        alert("⚠️ BLOQUEO DE SEGURIDAD:\n\n" + errores.join("\n"));
        return;
    }

    alert("¡Acceso concedido, " + nombreUsuario + "! Tu mensaje ha sido validado y enviado.");
    formulario.reset();
});

const secciones = document.querySelectorAll('section');

secciones.forEach(seccion => {
    seccion.addEventListener('mouseenter', () => {
        seccion.style.borderColor = '#00ff41'; // Tu verde neón
        seccion.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.2)';
    });

    seccion.addEventListener('mouseleave', () => {
        seccion.style.borderColor = '#30363d';
        seccion.style.boxShadow = 'none';
    });
});