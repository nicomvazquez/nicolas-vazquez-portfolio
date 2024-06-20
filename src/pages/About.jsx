import React from "react";

function About() {
  return (
    <section className="text-center flex flex-col items-center">
      <h2 className="text-6xl font-semibold">
        About<span className="text-yellow-500">.</span>
      </h2>

      <div className=" max-w-6xl mt-10 rounded-2xl">
        <p className="text-2xl">
          Soy <span className="text-yellow-500">Nicolás Vázquez</span>, Técnico
          en Informática y Desarrollador de Software Full-Stack. Como{" "}
          <span className="text-yellow-500">tecnico</span>, he trabajado en el
          desarrollo y mantenimiento de aplicaciones web robustas y escalables.
        </p>
        <p className="text-2xl mt-7">
          Mi experiencia incluye el manejo de tecnologías{" "}
          <span className="text-yellow-500">front-end y back-end</span>, lo que
          me permite abordar proyectos de manera integral, desde la concepción
          hasta la implementación y el mantenimiento. Estoy familiarizado con{" "}
          <span className="text-yellow-500">
            frameworks y librerías modernos
          </span>
          , lo que me permite crear soluciones eficientes y de alta calidad.
        </p>
      </div>
    </section>
  );
}

export default About;
