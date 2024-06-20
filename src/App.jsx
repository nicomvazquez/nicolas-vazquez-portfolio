import React from "react";

import { Navbar, Foother } from "./components";

import { Home, About, Experience, Portfolio } from "./pages";

function App() {
  return (
    <main className="bg-neutral-800 text-white w-full overflow-hidden">
      <div className="flex justify-center bg-neutral-800 items-center px-6 fixed w-full shadow-xl z-10">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className=" bg-neutral-700 flex justify-center items-center px-6 py-20">
        <div className="xl:max-w-[1280px] w-full">
          <Home />
        </div>
      </div>

      <div className=" bg-neutral-800 flex justify-center items-center px-6 py-16">
        <div className="xl:max-w-[1280px] w-full">
          <About />
        </div>
      </div>
      <div className=" bg-neutral-800 flex justify-center items-center px-6 pt-10 pb-20">
        <div className="xl:max-w-[1280px] w-full">
          <Experience />
        </div>
      </div>

      <div className=" bg-neutral-700 flex justify-center items-center px-6 py-20">
        <div className="xl:max-w-[1280px] w-full">
          <Portfolio />
        </div>
      </div>

      <div className=" bg-neutral-800 flex justify-center items-center px-6 py-10">
        <div className="xl:max-w-[1280px] w-full">
          <Foother />
        </div>
      </div>
    </main>
  );
}

export default App;
