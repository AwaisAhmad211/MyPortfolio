import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.scss'
import Hero from './components/Hero/Hero.jsx'
import Intro from './components/intro/intro.jsx'
import Parallax from './components/parallax/Parallax.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Contact from './components/contact/Contact.jsx'
import { Cursor } from './components/cursor/Cursor.jsx'
import About from './components/about/about.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <div>
    <Cursor />
   <section id='Homepage'>
    <Hero />
    <Intro />
      </section>
      <section id='About'>
        <About />
      </section>
   <section id='Services'>
    <Parallax type="services"/>
   </section>
   <section>
    <Services />
   </section>
   <section id='Portfolio' type="portfolio">
    <Parallax />
   </section>
   <Portfolio />
   <section id='Contact'>
    <Contact />
   </section>
    </div>
)
