import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <section className="py-48">
      <div>
        <h1 className="text-8xl font-semibold">Nicolas Vazquezs<span className="text-yellow-500">.</span></h1>
        <p className="text-2xl text-yellow-500 my-3">Full-Stack Developer.</p>
        <div className="flex gap-7 text-4xl mt-7">
          <a
            href=""
            className="hover:scale-110 hover:text-yellow-500 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            className="hover:scale-110 hover:text-yellow-500 transition-all"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
