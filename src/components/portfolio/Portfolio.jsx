import React, { useRef } from 'react'
import './portfolio.scss'
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id:1,
        tittle: "Chess Game",
        img : "/Chess.jpg",
        des: "Chess Game Clone, a project that taught me valuable skills and fueled my passion for development.",
        src: "https://github.com/AwaisAhmad211/Chess-Game"
    },
    {
        id:2,
        tittle: "E-commerce",
        img : "/ecommerce.jpg",
        des : "Developed a fast and secure ecommerce website using Express JS and Node JS, deployed on Vercel. The website features a responsive design, robust payment gateway integration."
    },
    {
        id:3,
        tittle: "Business Web",
        img : "/business.png",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam velit, id blanditiis doloribus mollitia est culpa iusto unde! Deleniti!"
    },
    {
        id:4,
        tittle: "40+ More",
        img : "/blog.png",
        des : "Explore my collection of mini projects, showcasing my versatility and skill in tackling diverse challenges, from building a Chess Game Clone to crafting a To-Do List App and Weather Dashboard."
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