import React, { useRef } from 'react'
import './portfolio.scss'
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id:1,
        tittle: "Apple Vision",
        img : "/Vision.png",
        des : "Vision Clone, a challenging and rewarding project that honed my development expertise and fueled my enthusiasm for creating cutting-edge wearables, inspired by Apple Vision's pioneering spirit.",
        src : "https://apple-vision-clonw.vercel.app/"
    },
    {
        id:2,
        tittle: "Chess Game",
        img : "/Chess.jpg",
        des: "Chess Game Clone, a project that taught me valuable skills and fueled my passion for development.",
        src: "https://github.com/AwaisAhmad211/Chess-Game"
    },
    {
        id:3,
        tittle: "E-commerce",
        img : "/ecommerce.jpg",
        des : "Developed a fast and secure ecommerce website using Express JS and Node JS, deployed on Vercel. The website features a responsive design, robust payment gateway integration.",
        src : "https://awaisahmad211.github.io/Coming-Soon-Page/",
    },
    {
        id:4,
        tittle: "40+ More",
        img : "/projectList.png",
        des : "Explore my collection of mini projects, showcasing my versatility and skill in tackling diverse challenges, from building a Chess Game Clone to crafting a To-Do List App and Weather Dashboard.",
        src : "https://project-list-seven.vercel.app/"
    },
]

const Single = ({item}) => {
    const ref= useRef();

    const {scrollYProgress} = useScroll({
        target : ref,
        // offset : ["start start" , "end start"]
    })

    const y = useTransform(scrollYProgress,[0,1],[-200,200])

    return <section >
        <div className="container">
            <div className="wrapper">
             <div className="imgContainer" ref={ref}>
            <img src={item.img} />
             </div>
            <motion.div className="textContainer" style={{y}}>
                <h1>{item.tittle}</h1>
                <p>{item.des}</p>
                <a href={item.src}>See Demo</a>
            </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target : ref,
        offset:["end end","start start"]
    })
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping : 30,
    })
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featued Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio