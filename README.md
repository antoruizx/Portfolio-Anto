# Portafolio · Nadia Antonella Ruiz

Portafolio personal de programadora Full Stack: credencial 3D interactiva, bitácora de novedades, proyectos, caso de estudio de Foja y certificaciones.

Está hecho con HTML, CSS y JavaScript, sin dependencias ni paso de compilación.

## Estructura

```
index.html            estructura de la página
css/styles.css        estilos y animaciones
js/data.js            CONTENIDO: bitácora, certificados y proyectos
js/main.js            interacciones (credencial, carruseles, efectos)
img/anto.jpg          foto de la credencial
img/proyectos/        capturas de cada proyecto
img/certificados/     imágenes de los certificados
```

## Cómo verlo en tu compu

Abrí la carpeta en VS Code y usá la extensión **Live Server** (clic derecho en `index.html` → *Open with Live Server*). También funciona con doble clic en `index.html`.

## Cómo editar el contenido

Todo el contenido que cambia seguido está en `js/data.js`.

**Sumar una novedad a la bitácora:** agregá una línea arriba de todo en `BITACORA`:

```js
{ fecha:"Nov 2026", tipo:"Evento", titulo:"Presentamos Polaris en la FAPPE", texto:"Contá acá cómo fue." },
```

- `tipo` puede ser `"Proyecto"`, `"Formación"` o `"Evento"` (son los filtros).
- `estado:"soon"` muestra *Próximamente*; `estado:"now"` muestra *En curso*.
- `cert:"fullstack"` agrega el botón *Ver certificación* (usa una clave de `CERTS`).

**Sumar un certificado:** guardá la imagen en `img/certificados/` y agregalo en `CERTS`:

```js
nuevo: { titulo:"Nombre del curso", org:"Institución · horas", anio:"2026",
  paginas:["Certificado"], imgs:["img/certificados/nuevo-1.jpg"] },
```

**Sumar un proyecto:** guardá las capturas en `img/proyectos/` y agregalo en `PROYECTOS`. Con varias imágenes en `imgs`, se pasan solas al pasar el mouse. `destacado:true` lo muestra a todo el ancho.

## Publicarlo

No necesita compilación. En Vercel o Netlify:

- **Framework / preset:** Other (ninguno)
- **Build command:** vacío
- **Output / publish directory:** `.` (la raíz del repo)
