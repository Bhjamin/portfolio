import React from "react";
import picture1 from "../Pictures/picture1.png";
import MoodMatePicture from "../Pictures/MoodMatePicture.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col items-center">
      <h2 className="text-xl lg:text-5xl text-primary">My Projects</h2>
      <br />
      <br />
      <div className="flex justify-center flex-col lg:flex-row lg:justify-evenly">
        <section className="flex flex-col items-center border-4 p-4 border-black rounded-xl lg:w-1/3 m-4 shadow-2xl bg-base-200">
          <h3 className=" text-lg lg:text-2xl text-secondary">
            Monopoly Style Board Game
          </h3>
          <br />
          <img
            className=" max-h-40 lg:max-h-60 rounded-lg"
            src={picture1}
            alt="Homepage of my first website"
          />
          <br />
          <p className=" text-base text-center lg:text-xl text-warning">
            This was my first big project that I built by myself. The only
            technologies used were HTML, Javascript, and CSS.
          </p>
          <div className="flex flex-col lg:flex-row">
            <a
              href="https://foundationscapstonebhjamin.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-link">Hosted Site</button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=8l11_PtFfAo"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-link">Video Demo</button>
            </a>
          </div>
        </section>

        <section className="flex flex-col items-center border-4 p-4 border-black rounded-xl lg:w-1/3 m-4 shadow-2xl bg-base-200">
          <h3 className=" text-lg lg:text-2xl text-secondary">Mood Mate</h3>
          <br />
          <img
            className=" max-h-40 lg:max-h-60 rounded-lg"
            src={MoodMatePicture}
            alt="Homepage for the mood mate website"
          />
          <br />
          <p className="text-base text-center lg:text-xl text-warning">
            Mood Mate was my second big project that I built by myself. It is a
            full-stack mental health web app that was built with React, Tailwind
            CSS, and DaisyUI for the front end. I utilized bit.io for the
            database and axios to communicate and make requests to the database.
          </p>
          <div className="flex flex-col lg:flex-row">
            <a
              href="https://www.youtube.com/watch?v=ehSk5KSu79s"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-link">Video Demo</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
