import React, { useRef, useState } from 'react'
import './contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'


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
    const formRef = useRef();
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_sfxahub', 'template_b5kpjja', formRef.current, {
            publicKey: 'bUrGgnsLXMM9X5oxG',
          })
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
              setError(true)
            },
          );
      };
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
            <form ref={formRef} onSubmit={sendEmail} id='form'>
                <input type="text" placeholder='Name' required name='Name' autoComplete='xyz'/>
                <input type="email" placeholder='Email' required name='Email' autoComplete='xyz@gmail.com'/>
                <textarea type="text" placeholder='Your Message' name='Textarea' />
                <button type='submit'>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </form>
            
        </div>
         
    </motion.div>
  )
}
export default Contact