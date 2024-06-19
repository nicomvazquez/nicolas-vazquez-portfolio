import React from "react";

import { navlinks } from "../constants";

function Futher() {
  return (
    <footer className="flex justify-between">
      <div className="">
        <h1 className="text-4xl">
          Nicolas Vazquez<span className="text-yellow-500">.</span>
        </h1>
        <p className="text-lg mb-5 text-yellow-500">Full-Stack Developer.</p>
        <a
          href=""
          className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
        >
          Contacto.
        </a>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2">
            sitemap<span className="text-yellow-500">.</span>
          </h1>
          {navlinks.map((i) => (
            <a
              href={i.url}
              className="cursor-pointer hover:text-yellow-500 transition-all"
            >
              {i.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold mb-2">
            Comunidad<span className="text-yellow-500">.</span>
          </h1>
          <a
            href=""
            className="cursor-pointer hover:text-yellow-500 transition-all"
          >
            instagram
          </a>
          <a
            href=""
            className="cursor-pointer hover:text-yellow-500 transition-all"
          >
            tiktok
          </a>
          <a
            href=""
            className="cursor-pointer hover:text-yellow-500 transition-all"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Futher;
