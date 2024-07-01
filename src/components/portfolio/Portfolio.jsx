import React, { useRef } from 'react'
import './portfolio.scss'
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id:1,
        tittle: "GYM App",
        img : "/gym.png",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam velit, id blanditiis doloribus mollitia est culpa iusto unde! Deleniti!",
        src: "https://awaisahmad211.github.io/"
    },
    {
        id:2,
        tittle: "Landing Page",
        img : "/landing.png",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam velit, id blanditiis doloribus mollitia est culpa iusto unde! Deleniti!"
    },
    {
        id:3,
        tittle: "Business Web",
        img : "/business.png",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam velit, id blanditiis doloribus mollitia est culpa iusto unde! Deleniti!"
    },
    {
        id:4,
        tittle: "Food Web",
        img : "/food.png",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam velit, id blanditiis doloribus mollitia est culpa iusto unde! Deleniti!"
    },
    {
        id:5,
        tittle: "Blogging App",
        img : "/blog.png",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam velit, id blanditiis doloribus mollitia est culpa iusto unde! Deleniti!"
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