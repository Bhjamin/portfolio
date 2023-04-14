import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import certificate from '../Pictures/certificate.png'

const Career = () => {

    const tech = ['Javascript', 'React', 'NodeJS', 'Tailwind CSS', 'DaisyUI', 'Framer Motion', 'Github', 'PostgreSQL', 'HTML', 'CSS', 'Express', 'Axios', 'Sequelize']

    const ref = useRef(null)
    const techInView = useInView(ref, {once: true})



    return(
    <div id="career" className="w-full flex flex-col items-center p-4">

        <h2 className="text-2xl lg:text-5xl text-primary">My Career</h2>

        <br />
        <br />

        <section className=" w-full lg:w-2/3 flex flex-col items-center border-4 border-black rounded-xl p-6 m-4 bg-base-200 shadow-2xl">
            <h3 className="lg:text-left text-lg lg:text-2xl text-secondary">Technologies I Use </h3>
            <br/>
            <div ref={ref} className="w-full flex flex-wrap justify-center gap-3">
                {techInView ? 
                tech.map((tech, i) => {
                    return(
                        <motion.div
                        className="flex items-center justify-center"
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: .50, delay: i * 0.05, type: 'spring'}}
                        >
                     <p className="bg-base-300 border-accent shadow-2xl border-2 p-[4px] rounded-lg text-success">{tech}</p>
                    </motion.div>
                    )
                })
            : null}
            </div>
        </section>

        <br/>

        <section className="w-full lg:w-2/3 flex flex-col items-center border-4 border-black rounded-xl p-6 m-4 bg-base-200 shadow-2xl">
        <h3 className="lg:text-left text-lg lg:text-2xl text-secondary">Bootcamp</h3>

        <br/>

        <div className=" flex flex-col lg:flex-row gap-5 justify-center items-center">
        <img className="rounded-xl max-h-32 lg:max-h-52 max-w-[200px]" src={certificate} />
        <p className="m-2 text-warning md:text-center lg:text-left sm:text-sm md:text-base lg:text-2xl md:leading-7 lg:leading-9">
        From December 2022 - April 2023 I attended a bootcamp to start my career in tech. Since then I have been working on adding to my skills as a front-end developer. Someone who has helped me a lot is my brother who is also a front-end developer with 4 years of experience, I have learned a lot from him about what it is like to work as a developer. 
        </p>
        </div>
        </section>

        <br/>

        <p>I am excited to land my first job as a developer and will update this section when I do!</p>

    </div>
    )
}

export default Career