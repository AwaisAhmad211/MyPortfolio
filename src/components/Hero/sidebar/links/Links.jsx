import React from 'react'
import {motion, stagger} from 'framer-motion'

const variants = {
  open : {
    transition : {

      staggerChildren:0.1
    }
  
  },
  closed : {
    transition :{
      staggerChildren:0.05,
      staggerDirection : -1
    }
  }
}

const itemVariants = {
  open : {
    y : 0,
    opacity : 1,
    transition :{
      duration : 0.3
    }
  },
  closed :{
    y : 50,
    opacity :0
  }
}
function Links({setOpen}) {
  const links = [
    "Homepage",
    "Services",
    "Portfolio",
    "About",
    "Contact"
  ]
  return (
    <motion.div className='links' variants={variants} >
      {
        links.map((link)=>(
          <motion.a href={`#${link}`} key={link} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} onClick={()=>setOpen((prev) => !prev)}>{link}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links