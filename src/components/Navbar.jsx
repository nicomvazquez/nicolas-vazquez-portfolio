import React from "react";
import { Link } from "react-scroll";

import { navlinks } from "../constants";

function Navbar() {
  return (
    <section className="flex justify-between items-center">
      <div className="my-5">
        <h1 className="text-4xl font-bold cursor-pointer">
          NICO<span className="text-yellow-500">.</span>DEV
        </h1>
      </div>
      <div className="flex gap-10">
        {navlinks.map((i) => (
          <Link
            to={i.path}
            smooth={true}
            offset={-100}
            time={1000}
            key={i.name}
            className="text-lg hover:scale-110 hover:text-yellow-500 transition-all cursor-pointer"
          >
            {i.name}
          </Link>
        ))}
      </div>
      <a
        href="mailto:vazquezpizzinicolas@gmail.com"
        className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
      >
        Contacto.
      </a>
    </section>
  );
}

export default Navbar;
