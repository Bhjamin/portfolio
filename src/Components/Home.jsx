import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import girlPic from "../Pictures/GIRLGIRLGIRL.png";
import bengPic from "../Pictures/BENGBENGBENEG.jpg";
import girlAndBeng from "../Pictures/nobeng.png";
import Projects from "./Projects";
import Experiences from "./Experiences";

const Home = () => {
  const [picture, setPicture] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPicture((curr) => {
        if (curr >= pics.length - 1) {
          return 0;
        } else {
          return curr + 1;
        }
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const pics = [girlAndBeng, girlPic, bengPic];

  return (
    <div id="about" className="w-full flex flex-col items-center">
      <br />
      <br />

      <div className=" w-full flex flex-col items-center lg:flex-row xl:flex-row 2xl:flex-row">
        <section className="m-4 w-full md:w-1/2 flex flex-col items-center overflow-x-hidden overflow-y-hidden">
          <div className="h-72 w-full flex justify-center items-center">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={picture}
                className="max-h-72 rounded-xl"
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, x: 300 }}
                src={pics[picture]}
              />
            </AnimatePresence>
          </div>
        </section>

        <section className=" p-4 m-4 w-full md:w-1/2 flex flex-col items-center">
          <div className=" p-2 sm:w-full md:w-full lg:w-3/4 xl:w-3/4  border-4 rounded-xl border-black flex flex-col items-center shadow-2xl bg-base-300 ">
            <h2 className="text-primary sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
              About me:
            </h2>
            <br />
            <p className=" m-2 text-warning text-left md:text-center sm:text-sm md:text-base lg:text-2xl md:leading-7 lg:leading-9">
              I am a highly motivated front-end web developer based in Lehi, UT.
              I recently completed an intensive web development boot camp at Dev
              Mountain where I have learned the latest and most popular
              technology for building modern and responsive websites. My primary
              focus is creating user-friendly websites that provide seamless
              experiences for visitors. I am dedicated to delivering
              high-quality results and am always eager to learn new techniques
              and technologies to make that possible.
            </p>
          </div>
        </section>
      </div>

      <br />
      <br />
      <br />

      <Projects />

      <br />
      <br />
      <br />
      
      <Experiences />
    </div>
  );
};

export default Home;
