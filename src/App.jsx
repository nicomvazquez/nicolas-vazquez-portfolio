import React from "react";

import { Navbar, Foother } from "./components";

import { Home, About, Experience, Portfolio } from "./pages";

function App() {
  return (
    <main className="bg-neutral-800 text-white w-full overflow-hidden">
      <div className="flex justify-center items-center px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className=" bg-neutral-700 flex justify-center items-center px-6">
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

      <div className=" bg-neutral-700 flex justify-center items-center px-6 py-10">
        <div className="xl:max-w-[1280px] w-full">
          <Portfolio />
        </div>
      </div>

      <div className=" bg-neutral-800 flex justify-center items-center px-6 py-10">
        <div className="xl:max-w-[1280px] w-full">
          <Foother />
          <h1 className="text-neutral-400">&copy; 2024 - nicomvazquez.com</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
