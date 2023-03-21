import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="m-4 flex flex-row">
        <h1 className="text-xl">
          My first project:
            <a
              href="https://foundationscapstonebhjamin.netlify.app/"
              target="_blank"
            >
          <button className="btn btn-outline btn-accent rounded-md m-2">
              
            Monopoly Style Board Game

          </button>
            </a>
        </h1>
      </div>

      <button
        className="btn btn-primary rounded-lg"
        onClick={() => navigate("/")}
      >
        Home
      </button>
    </div>
  );
};

export default Projects;
