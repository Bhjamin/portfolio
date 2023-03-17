import { AnimatePresence, easeIn, motion } from "framer-motion";

const AnimateName = () => {

    return(
        <AnimatePresence>
    <motion.div  className="flex flex-col w-[calc(100%-100px)]" animate={{ x: 25, y: 20 }} transition={{duration: .5, ease: 'easeOut'}} initial={true} >
      <h1 className=" text-4xl font-extrabold">Ben Hancock</h1>
    </motion.div>
    <br/>
    <br/>
    

    <motion.div className="w-[calc(100%-75px)]" animate={{ x: 25, opacity: 1}} transition={{duration: 2, ease: 'easeInOut'}} initial={{opacity: 0}} >
      <h2 className="text-xl">Simple</h2>
    </motion.div>

    <motion.div className="w-[calc(100%-75px)]" animate={{ x: 25, opacity: 1}} transition={{duration: 2.5, ease: 'easeInOut'}} initial={{opacity: 0}} >
      <h2 className="text-xl">Creativity</h2>
    </motion.div>



      </AnimatePresence>
    )
}

export default AnimateName