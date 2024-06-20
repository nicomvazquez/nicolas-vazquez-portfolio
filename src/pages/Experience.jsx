import React from "react";

import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import express from "../assets/express.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import tailwind from "../assets/tailwind.svg";
import python from "../assets/python.svg";

function Experience() {
  return (
    <section id="experiencia" className="flex flex-col items-center">
      <h2 className="text-6xl font-semibold mb-10">
        Experiencia laboral<span className="text-yellow-500">.</span>
      </h2>
      <div className="max-w-2xl text-left">
        <ol class="relative border-s border-yellow-500">
          <li class="mb-10 ms-4">
            <div class="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-yellow-800 bg-yellow-500"></div>
            <time class="mb-1 text-md font-normal leading-none text-yellow-700">
              Febrero 2023 - Noviembre 2023
            </time>
            <h3 class=" mb-2 text-3xl font-semibold text-gray-900 dark:text-white">
              Pasantia | Tecnico en informatica | E.S.T. F. Ameghino
            </h3>
            <p class="mb-4 text-xl font-normal text-neutral-400">
              Encargado del diseño e instalacion de redes informaticas dentro de
              la institucion, y miembro de equipo de devs encargado del
              desarrollo de aplicaciones web.
            </p>
          </li>
        </ol>
      </div>

      <h1 className="text-4xl font-semibold my-3">
        Stack<span className="text-yellow-500">.</span>
      </h1>
      <div className="flex gap-5 ">
        <img
          src={nodejs}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
        <img
          src={react}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
        <img
          src={express}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
        <img
          src={tailwind}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
        <img
          src={mysql}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
        <img
          src={mongodb}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
        <img
          src={python}
          alt=""
          className="w-14 hover:scale-110 transition-all"
        />
      </div>
    </section>
  );
}

export default Experience;
