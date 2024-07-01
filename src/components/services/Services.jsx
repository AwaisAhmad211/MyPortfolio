import React from 'react'
import './services.scss'
import { motion , useInView} from 'framer-motion'
import { useRef } from 'react'


const variants = {
    initial : {
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren : .5,
        }
    }
}

const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-10px"})
  return (
    <motion.div ref={ref} className='services' variants={variants} initial="initial" animate="animate" >
        <div className="textContainer">
            <p>I focus on helping your brand grow
            <br/>and forward
            </p>
            <hr/>
        </div>
        <div className="tittleContainer">
            <div className="tittle">
                <img src="/people.webp"/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="tittle">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <motion.button whileHover={{background:"white",color:"black"}}>What We Do ?</motion.button>
            </div>
        </div>
        <div className="listContainer">
            <motion.div className="box" whileHover={{backgroundColor:"#ffffff15"}}>
                <h1>Full-stack Developer</h1>
                <p>Designed and developed scalable, efficient, and user-friendly web applications utilizing both front-end and back-end expertise.
                </p>
                <motion.button whileHover={{background:"white",color:"black"}}>On</motion.button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"#ffffff15"}}>
                <h1>Front-end Developer</h1>
                <p> Crafted responsive, interactive, and visually appealing user interfaces using HTML, CSS, JavaScript, and various frameworks</p>
                <motion.button whileHover={{background:"white",color:"black"}}>On</motion.button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"#ffffff15"}}>
                <h1>Back-end Developer</h1>
                <p> Built robust, data-driven server-side logic, APIs, and databases to power fast and secure web applications</p>
                <motion.button whileHover={{background:"white",color:"black"}}>On</motion.button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"#ffffff15"}}>
                <h1>Full-stack Consultant</h1>
                <p>Provided expert guidance and development services to clients, bridging the gap between concept and reality for their web projects.
                </p>
                <motion.button whileHover={{background:"white",color:"black"}}>On</motion.button>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Services