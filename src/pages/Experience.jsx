import React from "react";

function Experience() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-6xl font-semibold mb-10">Experiencia<span className="text-yellow-500">.</span></h2>
      <div className="max-w-2xl text-left">
        <ol class="relative border-s border-yellow-500">
          <li class="mb-10 ms-4">
            <div class="absolute w-4 h-4 rounded-full mt-1.5 -start-2 border border-yellow-800 bg-yellow-500"></div>
            <time class="mb-1 text-md font-normal leading-none text-yellow-700">
              February 2022
            </time>
            <h3 class=" mb-2 text-3xl font-semibold text-gray-900 dark:text-white">
              Application UI code in Tailwind CSS
            </h3>
            <p class="mb-4 text-xl font-normal text-neutral-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experience;
