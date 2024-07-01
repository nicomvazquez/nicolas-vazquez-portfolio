import React from "react";
import { FaGithub } from "react-icons/fa";

function ProyectCard({ props }) {
  return (
    <div className="flex flex-col gap-3 hover:bg-neutral-600 p-5 transition-all rounded-md hover:-translate-y-3">
      <div className="">
        <img src={props.image} alt={props.title} className="rounded-md" />
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-yellow-500">
          {props.title}
        </h2>
        <p className="text-xl my-3">{props.description}</p>

        <div className="flex gap-5 items-center mt-7">
          {props.url && (
            <a
              href={props.url}
              target="_blank"
              className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
            >
              vista
            </a>
          )}
          {props.code && (
            <a
              href={props.code}
              target="_blank"
              className=" text-3xl hover:scale-110 hover:text-yellow-500 transition-all"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProyectCard;
