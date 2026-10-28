/* =====================================================
   CONTENIDO DEL PORTAFOLIO
   Editá este archivo para sumar novedades, proyectos o certificados.
   No hace falta tocar index.html ni main.js.
   ===================================================== */

/* ---------- BITÁCORA: para sumar una novedad, agregá un objeto arriba de todo.
   Con proyecto:"id" aparece el botón "Ver caso de estudio" (el id es el del proyecto en PROYECTOS) ---------- */
const BITACORA = [
  { fecha:"7 nov 2026", tipo:"Evento", titulo:"Presentamos POLARIS en la FAPPE", texto:"Llevamos nuestro proyecto en equipo a la FAPPE. Después del evento, acá van las fotos.", estado:"soon" },
  { fecha:"Actual", tipo:"Formación", titulo:"Cursando el último año", texto:"Tecnicatura Universitaria en Programación - Universidad Tecnológica Nacional", estado:"now" },
  { fecha:"Oct 2026", tipo:"Proyecto", titulo:"ARsuma, red de puntos de Tucumán", proyecto:"arsuma", texto:"Desarrollé ARsuma, una red de puntos y premios para comercios de Tucumán, impulsada por la Federación Económica de Tucumán.", estado:"now" },
  { fecha:"2026", tipo:"Proyecto", titulo:"Foja", proyecto:"foja", texto:"Sistema de gestión para estudios jurídicos (antes Legal Management System) con ASP.NET Core Web API, Entity Framework Core, PostgreSQL y React + Vite." },
  { fecha:"2025", tipo:"Formación", titulo:"Bootcamp AWS DevOps", cert:"aws", texto:"Globant · Academia Desafío LATAM. Infraestructura en la nube, CI/CD y automatización. Aprobado con certificación." },
  { fecha:"2024", tipo:"Proyecto", titulo:"Ruiz & Associates", proyecto:"ruiz-associates", texto:"Landing para una firma contable, con formulario que envía los datos del cliente directo al correo." },
  { fecha:"2024", tipo:"Proyecto", titulo:"Piaceres", proyecto:"piaceres", texto:"Sitio de varias páginas para un restaurante, con menú, servicios y contacto." },
  { fecha:"2024", tipo:"Formación", titulo:"Entré a la Tecnicatura", texto:"Tecnicatura Universitaria en Programación, UTN: Python, C#, SQL, JavaScript, React y más." },
  { fecha:"Curso", tipo:"Formación", titulo:"Formulación y Gestión de Proyectos", cert:"gestion", texto:"Curso de la Universidad Tecnológica Nacional, aprobado con certificado: cómo plantear, planificar y gestionar un proyecto." },
  { fecha:"2023", tipo:"Proyecto", titulo:"Reed", proyecto:"reed", texto:"Catálogo de productos dinámico con registro, inicio de sesión y seguridad basada en tokens." },
  { fecha:"2023", tipo:"Formación", titulo:"Full Stack Web Developer", cert:"fullstack", texto:"Curso de 7 meses de la Universidad Tecnológica Nacional, aprobado con certificación. Proyectos en React, Node.js, Express y MongoDB, más diseño en Figma." }
];

/* ---------- CERTIFICADOS: las imágenes van en img/certificados ---------- */
const CERTS = {
  fullstack: { titulo:"Full Stack Web Developer", org:"UTN · Facultad Regional Tucumán · 96 hs cátedra", anio:"2023",
    paginas:["Certificado","Programa"], imgs:["img/certificados/fullstack-1.jpg", "img/certificados/fullstack-2.jpg"] },
  aws: { titulo:"Carrera DevOps", org:"Academia Desafío Latam · 80 horas", anio:"2025",
    paginas:["Certificado"], imgs:["img/certificados/aws-1.jpg"] },
  gestion: { titulo:"Formulación y Gestión de Proyectos", org:"Universidad Tecnológica Nacional · Secretaría de Relaciones Internacionales y Vinculación Tecnológica", anio:"UTN",
    paginas:["Certificado"], imgs:["img/certificados/gestion-1.jpg"] }
};

const PROYECTOS = [
  { id:"arsuma", titulo:"ARsuma", destacado:true, link:"https://www.arsuma.com.ar/",
    imgs:["img/proyectos/arsuma-1.jpg", "img/proyectos/arsuma-2.jpg", "img/proyectos/arsuma-3.jpg", "img/proyectos/arsuma-4.jpg"],
    texto:"Red de puntos y premios para comercios de Tucumán, impulsada por la Federación Económica de Tucumán. Los clientes suman puntos con QR y canjean premios; cada comercio tiene su panel y la Federación ve las métricas de toda la red, con alertas y sugerencias de qué hacer.",
    stack:["Puntos con QR","Multi-comercio","Panel de la red","Informes en Excel"] },
  { id:"foja", titulo:"Foja", caso:true, imgs:["img/proyectos/foja-1.jpg","img/proyectos/foja-2.jpg"], link:"https://foja-juridica.netlify.app/",
    texto:"Sistema de gestión para estudios jurídicos: clientes, casos, seguimiento de tareas y login con tokens. Frontend y backend propios.", stack:["ASP.NET Core","EF Core","PostgreSQL","React"] },
  { id:"ruiz-associates", titulo:"Ruiz & Associates", img:"img/proyectos/ruiz-associates-1.jpg", link:"https://ruizxasociados.vercel.app/",
    texto:"Landing para una firma contable, con formulario que envía los datos del cliente directo al correo.", stack:["TypeScript","CSS","Responsive"] },
  { id:"reed", titulo:"Reed", img:"img/proyectos/reed-1.jpg", link:"https://reed-project-gilt.vercel.app/",
    texto:"Catálogo de productos dinámico con registro, inicio de sesión y seguridad basada en tokens.", stack:["React","Vite","JavaScript"] },
  { id:"piaceres", titulo:"Piaceres", img:"img/proyectos/piaceres-1.jpg", link:"https://piaceres-resto.vercel.app/",
    texto:"Sitio de varias páginas para un restaurante, con menú, servicios y contacto.", stack:["HTML","CSS","JavaScript"] }
];
