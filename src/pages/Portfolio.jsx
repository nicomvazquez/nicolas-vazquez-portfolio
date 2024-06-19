import React from "react";

import { ProyectCard } from "../components";

import { proyects } from "../constants";

function Portfolio() {
  return (
    <section>
      <h1 className="text-6xl text-center font-semibold mb-10">Portfolio<span className="text-yellow-500">.</span></h1>
      <div className="grid grid-cols-2 gap-10">
        {proyects.map((proyect) => (
          <ProyectCard key={proyect.title} props={proyect} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
