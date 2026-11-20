# edtech-cursos-js

Plataforma de Suscripciones y Cursos en Línea (EdTech) para administrar el catálogo de cursos digitales, el cálculo de colegiaturas con becas/descuentos y el historial de inscripción de los alumnos.

## Características técnicas

- **JavaScript modular puro (ES Modules)** sin frameworks ni librerías externas.
- **Programación Orientada a Objetos:** herencia (`extends` / `super`), polimorfismo en `calcularColegiatura()`, atributos privados (`#`) y `getters`/`setters` nativos.
- **Validaciones seguras:** control de precios negativos, becas fuera de rango (`0` a `100`) y rechazo de cursos duplicados mediante estructuras `if/else` y ciclos `for` tradicionales.
- **Flujo de trabajo:** Scrum en GitHub Projects y rama `main` protegida mediante Pull Requests con Code Review.

## Estructura del proyecto y equipo

| Archivo | Descripción | Responsable | Rama |
| :--- | :--- | :--- | :--- |
| `js/models/Curso.js` | Clase padre con atributos privados, validaciones y cálculo base | Johana | `feat/curso-base` |
| `js/models/CursoGrabado.js` | Clase hija para cursos pregrabados (descuento directo sobre precio base) | Alfredo | `feat/curso-grabado` |
| `js/models/BootcampVivo.js` | Clase hija para bootcamps en vivo (incluye cargo de mentoría) | Gabriela | `feat/bootcamp-vivo` |
| `js/models/TiraMaterias.js` | Clase gestora de inscripciones, control de duplicados y total mensual | Pablo | `feat/tira-materias` |
| `index.html` | Estructura base de la interfaz y contenedores del DOM | Fernando | `feat/estructura-html` |
| `js/index.js` | Integración de módulos, pruebas de casos borde y renderizado | Emiliano Andrés (PM / QA) | `feat/integracion-pruebas` |


## Cómo ejecutar el proyecto

Al usar módulos nativos de JavaScript (`<script type="module">`), Google Chrome bloquea los `import`/`export` si se abre el archivo con doble clic (`file://`). Para verlo en **Google Chrome**:

1. Clona el repositorio desde tu terminal:
   `git clone https://github.com/emilianor-dev/edtech-cursos-js.git`
2. Abre la carpeta en **Visual Studio Code**.
3. Inicia **`index.html`** con la extensión **Live Server** (`Go Live`) para abrirlo en **Google Chrome** (o levanta un servidor local en la carpeta con `python3 -m http.server` y entra a `http://localhost:8000`).
4. Abre la consola de Chrome (`F12` o `Cmd + Option + J`) para ver el detalle completo de las pruebas de casos borde.

