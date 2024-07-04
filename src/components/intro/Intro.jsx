import React from 'react'
import './intro.scss'
import {animate, motion} from 'framer-motion'


const textVariants = {
  initial :{ 
  x: -200 ,
  opacity: 0
  },
  animate : {
  x : 0,
    opacity : 1,
    staggerChildren : 0.1 ,
    transition :{
      duration : 1
    }
  }
}

const ImgVariants = {
  initial : {
    opacity : 0 ,
    y : 20
  },
  animate : {
    opacity:1,
    y : 1,
    transition : {
      duration : 2,
      repeat : Infinity,
    }
  }
}
const Intro = () => {
  return (
    <div className='intro'>
      <div className="wrapper">
        <motion.div className="textContainer"  variants={textVariants} initial="initial" animate="animate">
            <motion.h2>Awais Ahmad</motion.h2>
            <motion.h1>MERN stack developer and UI designer</motion.h1>
            <motion.div className="buttons">
                <a href='https://github.com/AwaisAhmad211'>See latest works</a>
                <a href='#Contact'>Contact Me</a>
            </motion.div>
            <motion.img src="/scroll.png" variants={ImgVariants} initial="initial" animate="animate"/>
        </motion.div>
      </div>
        {/* <div className="imgContainer">
            <img src="/hero.png"/>
        </div> */}
    </div>
  )
}

export default Intro