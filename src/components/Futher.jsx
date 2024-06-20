import React from "react";
import { Link } from "react-scroll";

import { navlinks } from "../constants";

function Futher() {
  return (
    <footer className="flex justify-between">
      <div className="">
        <h1 className="text-4xl font-semibold">
          Nicolas Vazquez<span className="text-yellow-500">.</span>
        </h1>

        <p className="text-lg mb-5 text-yellow-500">Full-Stack Developer.</p>

        <div className="flex">
          <a
            href="mailto:vazquezpizzinicolas@gmail.com"
            className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
          >
            Contacto.
          </a>
        </div>

        <h1 className="text-neutral-400 mt-3">
          &copy; 2024 - nicomvazquez.com
        </h1>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2">
            sitemap<span className="text-yellow-500">.</span>
          </h1>
          {navlinks.map((i) => (
            <Link
              to={i.path}
              smooth={true}
              offset={-100}
              time={1000}
              key={i.name}
              className=" hover:text-yellow-500 transition-all cursor-pointer"
            >
              {i.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2">
            Comunidad<span className="text-yellow-500">.</span>
          </h1>
          <a
            href="https://www.instagram.com/nicomvazquez.dev/"
            className="cursor-pointer hover:text-yellow-500 transition-all"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@nicomvazquez_dev"
            className="cursor-pointer hover:text-yellow-500 transition-all"
          >
            Tiktok
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-vazquez-2b6812284/"
            className="cursor-pointer hover:text-yellow-500 transition-all"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Futher;
