// script.js

const passwordInput = document.getElementById('password');
const passwordToggle = document.querySelector('.toggle-password');
const strengthBar = document.querySelector('.strength-level');
const emailInput = document.getElementById('email');

// Función para verificar la fuerza de la contraseña
function checkPasswordStrength(password) {
    let strength = 0;
    const hints = {
        length: false,
        uppercase: false,
        lowercase: false,
        special: false,
        digit: false
    };

    if (password.length >= 8) hints.length = true;
    if (/[A-Z]/.test(password)) hints.uppercase = true;
    if (/[a-z]/.test(password)) hints.lowercase = true;
    if (/\W/.test(password)) hints.special = true; // \W coincide con cualquier carácter no alfanumérico
    if (/\d/.test(password)) hints.digit = true;

    if (hints.length) strength += 1;
    if (hints.uppercase) strength += 1;
    if (hints.lowercase) strength += 1;
    if (hints.special) strength += 1;
    if (hints.digit) strength += 1;

    // Lógica de actualización de la barra
    let barWidth = 0;
    let barColor = 'transparent';

    if (strength === 1) {
        barWidth = '20%';
        barColor = 'var(--validation-error)';
    } else if (strength === 2) {
        barWidth = '40%';
        barColor = 'var(--validation-error)';
    } else if (strength === 3) {
        barWidth = '60%';
        barColor = 'var(--accent-primary)';
    } else if (strength === 4) {
        barWidth = '80%';
        barColor = 'var(--accent-primary)';
    } else if (strength === 5) {
        barWidth = '100%';
        barColor = 'var(--accent-primary)';
    }

    strengthBar.style.width = barWidth;
    strengthBar.style.backgroundColor = barColor;

    return strength;
}

// Evento para mostrar/ocultar contraseña
passwordToggle.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

// Evento para monitorear la entrada de contraseña
passwordInput.addEventListener('input', function() {
    checkPasswordStrength(this.value);
});

// Validación de email simple
emailInput.addEventListener('input', function() {
    const email = this.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Patrón básico de email
    if (email === '') {
        this.classList.remove('invalid', 'valid');
    } else if (emailPattern.test(email)) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});

// Simulación de envío de formulario (para demo)
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío real del formulario

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // Aquí iría la lógica para enviar los datos a tu backend
    console.log('Datos del formulario:');
    console.log('Nombre:', fullName);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('Términos aceptados:', terms);

    // Puedes añadir una alerta o redirigir al usuario
    alert('¡Registro simulado exitoso! Revisa la consola para ver los datos.');
    // window.location.href = '/dashboard'; // Ejemplo de redirección
});
