import { motion } from "framer-motion";

const Header = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    const headerHeight = document.querySelector('header').offsetHeight;
    const yOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: yOffset - headerHeight, behavior: 'smooth'});
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    const headerHeight = document.querySelector('header').offsetHeight;
    const yOffset = projectsSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: yOffset - headerHeight, behavior: 'smooth'});
  }

  const scrollToExperiences = () => {
    const projectsSection = document.getElementById('experiences');
    const headerHeight = document.querySelector('header').offsetHeight;
    const yOffset = projectsSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: yOffset - headerHeight, behavior: 'smooth'});
  }

  return (
    <header className="h-30 lg:h-[150px] flex items-center max-md:justify-center lg:justify-start sticky top-0 z-10 p-4 bg-base-100">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:pr-16 w-full items-center">
        <div className=" p-2 flex flex-col">
          <motion.div
            className=" max-sm:m-0 max-md:m-0 lg:m-1 xl:m-1 2xl:m-1 flex justify-center"
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", bounce: 0.3, delay: 1 }}
          >
            <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Ben Hancock
            </h1>
          </motion.div>

          <motion.div
            className=" p-1 max-sm:m-0 max-md:m-0 lg:m-1 xl:m-1 2xl:m-1 flex max-md:justify-center lg:justify-start"
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.3,
              delay: 1.5,
            }}
          >
            <h1 className="text-secondary text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4x mb-2 ">
              Simple Creativity
            </h1>
          </motion.div>
        </div>
        <div className=" w-full lg:w-1/2 flex gap-10 justify-center lg:gap-20 lg:justify-end lg:pr-16">
          <button
            onClick={scrollToProjects}
            className="btn btn-accent btn-sm lg:btn-md"
          >
            Projects
          </button>
          <button
            onClick={scrollToAbout}
            className="btn btn-secondary btn-sm lg:btn-md"
          >
            About
          </button>
          <button
            onClick={scrollToExperiences}
            className="btn btn-primary btn-sm lg:btn-md"
          >
          Experiences
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
