// script.js

// No se necesita JavaScript complejo para esta demostración,
// pero aquí podrías añadir interactividad si fuera necesario.
// Por ejemplo, para animaciones sutiles al hacer scroll,
// o para cargar contenido dinámicamente.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página de detalle de proyecto cargada.');

    // Ejemplo: Añadir una clase a las secciones al hacer scroll
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para que la animación ocurra solo una vez
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Estilos para las secciones que se hacen visibles
    const style = document.createElement('style');
    style.innerHTML = `
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
    `;
    document.head.appendChild(style);
});

// Ejemplo de cómo podrías usar JavaScript para resaltar sintaxis (requiere librería externa como highlight.js)
// Si quisieras un resaltado de sintaxis avanzado, deberías incluir una librería
// como highlight.js y llamar a su función de inicialización aquí.
// document.addEventListener('DOMContentLoaded', () => {
//     hljs.highlightAll();
// });
