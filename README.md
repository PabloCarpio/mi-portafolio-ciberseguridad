# 🛡️ Portafolio Profesional - Estudiante de Ciberseguridad

![Estatus del Proyecto](https://img.shields.io/badge/Status-Completado-brightgreen)
![Tecnologías](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS-blue)

Este repositorio contiene mi sitio web personal y portafolio técnico, desarrollado como parte de la formación en **Administración de Redes y Ciberseguridad**. El sitio destaca mis capacidades técnicas en redes Cisco, administración Linux y seguridad ofensiva.

## 🚀 Características Técnicas

* **Arquitectura de Archivos:** Estructura organizada por módulos (`/css`, `/js`, `/img`, `/proyectos`) para facilitar el escalamiento y mantenimiento.
* **Diseño Responsivo:** Implementación de **CSS Grid** para la sección de proyectos y **Flexbox** para la alineación de contenido (Hobbies/Experiencia), garantizando visualización óptima en móviles y PC.
* **Normalización:** Uso de `normalize.css` para asegurar consistencia visual en diferentes navegadores (Chrome, Firefox, Safari).

## 🛡️ Implementaciones de Seguridad

Como parte de mi enfoque en Ciberseguridad, el sitio incluye:
1.  **Validación Avanzada:** Lógica en JavaScript para verificar formatos de correo y campos obligatorios.
2.  **Prevención de XSS (Cross-Site Scripting):** Sanitización de inputs mediante expresiones regulares para bloquear caracteres sospechosos como `< > { } [ ]`.
3.  **Seguridad de Servidor:** Configuración de encabezados para prevenir ataques de Clickjacking.

## 📂 Estructura del Proyecto

```text
.
├── css/
│   ├── normalize.css    # Estándar de compatibilidad
│   └── index.css        # Estilos personalizados (Dark Mode / Neon)
├── js/
│   └── index.js         # Lógica de validación y efectos DOM
├── img/                 # Recursos gráficos y capturas de laboratorios
├── proyectos/           # Páginas detalladas de laboratorios técnicos
└── index.html           # Archivo principal (Home)