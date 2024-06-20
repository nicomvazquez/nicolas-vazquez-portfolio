import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="py-48">
      <div>
        <h1 className="text-8xl font-semibold">
          Nicolas Vazquez<span className="text-yellow-500">.</span>
        </h1>
        <p className="text-2xl text-yellow-500 my-3">Full-Stack Developer.</p>
        <div className="flex gap-7 text-4xl mt-7">
          <a
            href="https://www.linkedin.com/in/nicolas-vazquez-2b6812284/"
            className="hover:scale-110 hover:text-yellow-500 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nicomvazquez"
            className="hover:scale-110 hover:text-yellow-500 transition-all"
          >
            <FaGithub />
          </a>
          <a
            download={""}
            className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
          >
            Descargar CV.
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
