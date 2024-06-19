import React from "react";

import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import express from "../assets/express.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import tailwind from "../assets/tailwind.svg";
import python from "../assets/python.svg";

function About() {
  return (
    <section className="text-center flex flex-col items-center">
      <h2 className="text-6xl font-semibold">About<span className="text-yellow-500">.</span></h2>
      <p className="text-xl my-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        quaerat.
      </p>


      <h1 className="text-4xl font-semibold my-3">Stack<span className="text-yellow-500">.</span></h1>
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

export default About;
