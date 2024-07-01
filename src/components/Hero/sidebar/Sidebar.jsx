import React, { useState } from 'react'
import './sidebar.scss'
import ToggleBtn from './toggleBtn/ToggleBtn'
import Links from './links/Links'
import {delay, motion} from 'framer-motion'

const Sidebar = () => {
  const [open,setOpen] = useState(false);

 const variants = {
  open : {
    clipPath : 'circle(1420px at 45px 41px)',
    transition :{
      stiffness : 20,
      type : "spring",
    },
  },
  closed : {
    clipPath : 'circle(20px at 45px 41px)',
    transition : {
      stiffness : 400,
      type : "spring",
      damping : 40,
      duration :2 
    }
  }
 }
  return (
   <motion.div className="NavBtn" animate={open ? "open" : "closed"}>
    <motion.div className="bg" variants={variants} >
      <Links setOpen={setOpen} />
    </motion.div>
    <div>
      <ToggleBtn setOpen={setOpen}/>
    </div>
   </motion.div>
  )
}

export default Sidebar