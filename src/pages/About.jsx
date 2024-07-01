import React from "react";

function About() {
  return (
    <section id="about" className="text-center flex flex-col items-center">
      <h2 className="text-6xl font-semibold">
        Sobre mi<span className="text-yellow-500">.</span>
      </h2>

      <div className=" max-w-6xl mt-10 rounded-2xl">
        <p className="text-2xl">
          Soy <span className="text-yellow-500">Nicolás Vázquez</span>, técnico
          en informática y desarrollador de software{" "}
          <span className="text-yellow-500">full-stack</span>. Comence con la
          programacion en la escuela, donde desarrollé pequeños sistemas en{" "} 
          <span className="text-yellow-500">Python.</span> Esta experiencia me
          llevó a especializarme en el desarrollo de software full-stack.
          Actualmente, estoy estudiando{" "}
          <span className="text-yellow-500">inteligencia artificial</span> y
          explorando cómo implementarla en mis proyectos.
        </p>
      </div>
    </section>
  );
}

export default About;
