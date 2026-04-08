// Este script es un placeholder para funcionalidades interactivas si se desease.
// Por ejemplo, se podría simular la escritura de comandos o la actualización de logs.

// Ejemplo: Simular la escritura de un comando en la terminal
const codeCanvasBody = document.querySelector('.code-canvas .terminal-body');
const promptText = '<div class="terminal-line"><span class="prompt">~#</span> <span class="command"># Script finalizado.</span></div>';

// Añade el texto del prompt después de un retraso para simular la ejecución
setTimeout(() => {
    codeCanvasBody.innerHTML += promptText;
    // Auto-scroll to bottom to show the latest content
    codeCanvasBody.scrollTop = codeCanvasBody.scrollHeight;
}, 5000); // Add a final line after 5 seconds
