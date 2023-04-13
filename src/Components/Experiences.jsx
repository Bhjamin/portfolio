import IMG_2535 from "../Pictures/IMG_2535.jpg";
import IMG_2543 from "../Pictures/IMG_2543.jpg";
import IMG_2477 from "../Pictures/IMG_2477.jpg";
import IMG_2611 from "../Pictures/IMG_2611.jpg";
import IMG_1019 from '../Pictures/IMG_1019.jpg'
import petlife from '../Pictures/petlife.png'
import pizzaclicker from '../Pictures/pizzaclicker.png'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experiences = () => {
  const [readMoreVisible, setReadMoreVisible] = useState(false);

  const toggleReadMoreHandler = () => {
    setReadMoreVisible(!readMoreVisible);
  };

  return (
    <div id="experiences" className="w-full flex flex-col items-center p-4">
      <h2 className="text-xl lg:text-5xl text-primary">Life Experiences</h2>
      <br />
      <br />
      <div className="flex flex-col items-center justify-center">

        <section className=" w-full lg:w-2/3 flex flex-col items-center border-4 border-black rounded-xl p-6 m-4 bg-base-200 shadow-2xl">
          <h3 className="lg:text-left text-lg lg:text-2xl text-secondary">
            Arivaca Ranch
          </h3>
          <br />

          <div className="flex flex-wrap lg:flex-row gap-5 lg:gap-10 w-full justify-center items-center">
            <img className="  rounded-xl max-h-40 lg:max-h-72" src={IMG_2535} />
            <img className="  rounded-xl max-h-40 lg:max-h-72" src={IMG_2543} />
            <img className=" rounded-xl max-h-40 lg:max-h-72" src={IMG_2611} />
            <img className=" rounded-xl max-h-40 lg:max-h-72" src={IMG_2477} />
          </div>

          <div className="flex w-full flex-col items-center">
            <p className="m-2 text-warning md:text-center lg:text-left sm:text-sm md:text-base lg:text-2xl md:leading-7 lg:leading-9">
              For 9 months I lived on a horse ranch where I spent everyday
              taking care of and working with horses. After getting comfortable
              with how horses learn, I was gifted my own horse to train. During
              these 9 months I learned integrity, leadership, and how to love
              myself.
            </p>
            <AnimatePresence>
              {readMoreVisible ? (
                <motion.div
                  key="ranch"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  exit={{ y: -100, opacity: 0 }}
                >
                  <p className="md:text-center lg:text-left md:text-sm lg:text-lg m-2">
                  During my time at the ranch, I studied Arbinger, which is all about treating people as people and not as objects. I read books such as "Leadership and Self-Deception" and "The Anatomy of Peace" by the Arbinger Institute that really transformed the way I approach my relationships with others. The horse in the pictures above was my horse that I trained all by myself. I named her Izzy. She was a 2-year-old mare when I first got her and had never been saddled or worked with before. After working with her every day for 4 months, I took her on a 9-hour ride up the White Mountains in Arizona. Izzy did an amazing job, and the equine team wanted her to be a beginner horse for other boys who had just started working with horses because of how gentle and easy-going she was. Unfortunately, after I left the ranch, Izzy stopped eating when they tried to feed her. They said she would stand in the corner of the field and look up to where her old stall was, where I used to feed her. Horses are incredible creatures, and I have Izzy to thank for who I am today. Even though I trained her, I learned more from her than she learned from me.
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
            <button
              onClick={toggleReadMoreHandler}
              className="btn btn-outline w-1/3 lg:w-1/4 m-4"
            >
              {readMoreVisible ? "Hide" : "Read More"}
            </button>
          </div>
        </section>

        <section className=" w-full lg:w-2/3 flex flex-col items-center border-4 border-black rounded-xl p-6 m-4 bg-base-200 shadow-2xl">
        <h3 className="lg:text-left text-lg lg:text-2xl text-secondary">
            Scratch
        </h3>
        <br/>
        <div className="flex flex-wrap lg:flex-row gap-5 lg:gap-10 w-full justify-center items-center">
          <img className="rounded-xl max-h-40 lg:max-h-72" src={pizzaclicker}/>
          <img className="rounded-xl max-h-40 lg:max-h-72" src={petlife}/>
        </div>
        <p className="m-2 text-warning md:text-center lg:text-left sm:text-sm md:text-base lg:text-2xl md:leading-7 lg:leading-9">When I was in middle school, I started experimenting with Scratch. It was fun for me because I didn't have to learn syntax to make something work. The building blocks were already in front of me, and I just had to put them together. As I got better, I attended coding events where you code all day and showcase your work afterward. This helped me learn even more. I believe that because I used Scratch so often when I was younger, it helped me when I first started learning Javascript. Now, I can revisit my old Scratch projects and imagine what the blocks of code I put together would look like if I actually wrote them out.</p>
        <a
              href="https://scratch.mit.edu/users/CakeyBacon/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-link">Check out my first ever projects</button>
            </a>
        </section>

        <section className=" w-full lg:w-2/3 flex flex-col items-center border-4 border-black rounded-xl p-6 m-4 bg-base-200 shadow-2xl">

        <h3 className="lg:text-left text-lg lg:text-2xl text-secondary">
            Volleyball
        </h3>
        <br/>
        <div className=" flex flex-col lg:flex-row gap-5 justify-center items-center">
        <img className="rounded-xl max-h-32 lg:max-h-52 max-w-[200px]" src={IMG_1019} />
        <p className="m-2 text-warning md:text-center lg:text-left sm:text-sm md:text-base lg:text-2xl md:leading-7 lg:leading-9">I started playing volleyball in 8th grade and joined a club team that eventually went to nationals. During my freshman year of high school, I was the captain of the Junior Varsity team and continued to play club and school volleyball until the end of my sophomore year. I am proud to say that I had the opportunity to play with some extremely gifted players, including two of my teammates who were invited to play for BYU's volleyball team, and several other teammates who went on to play for other colleges.</p>
        </div>
        </section>

      </div>
    </div>
  );
};

export default Experiences;
