import React from 'react'
import './contact.scss'
import {motion} from 'framer-motion'


const variants = {
    initial : {
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}
const Contact = () => {
  return(
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate" >
        <motion.div variants={variants} className="textContainer">
            <motion.h1 variants={variants}>Let's Work with Me</motion.h1>
            <motion.div variants={variants} className="item">
                <h2>Mail</h2>
                <span>itxAwais211@gmail.com</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Address</h2>
                <span>Lahore Pakistan</span>
            </motion.div>
            <motion.div variants={variants} className="item">
                <h2>Phone</h2>
                <span>+923070471863</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form >
                <input type="text" placeholder='Name' required />
                <input type="email" placeholder='Email' required />
                <textarea type="text" placeholder='Your Message' />
                <button>Submit</button>

            </form>
        </div>

    </motion.div>
  )
}
export default Contact