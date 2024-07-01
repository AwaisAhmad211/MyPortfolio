import React, { useState } from 'react'
import './about.scss'



const About = () => {
    let [skill, setSkill] = useState(true);
    let [education , setEducation] = useState(false)
    return (
      <>
      <div id='about'>
          <div className="container">
              <div className="row">
                  <div className="about-cal-1">
                      <img src="/about.jpg"/>
                  </div>
                  <div className="about-cal-2">
                      <h1 className='sub-title'>About Me</h1>
                      <p>"Meet Awais Ahmad, a 19-year-old MERN stack mastermind with a passion for crafting exceptional digital experiences. With a year of experience and a portfolio that speaks for itself, Awais has established himself as a rising talent in the world of software development. His unique blend of technical expertise, creativity, and attention to detail makes him a force to be reckoned with. Take a closer look at his work and discover the future of innovation!"</p>
                      <div className="tab-titles">
                                <p className='tab-links active-link' onClick={() => { setSkill((prev) => !prev); setEducation((prev)=> false) }}>Skills</p>
                                <p className='tab-links active-link' onClick={() => { setEducation((prev) => !prev); setSkill((prev) => false) }} >Education</p>
                            </div>
                            {skill == true ? <div className="tab-contents active-tab" id='skills'>
                          <ul>
                              <li>➡&nbsp; HTML</li>
                              <li>➡&nbsp; CSS</li>
                              <li>➡&nbsp; Javascript</li>
                              <li>➡&nbsp; MongoDb</li>
                              <li>➡&nbsp; Express js</li>
                              <li>➡&nbsp; React js</li>
                              <li>➡&nbsp; Node js</li>
                              <li>➡&nbsp; SASS</li>
                              <li>➡&nbsp; Tailwind CSS</li>
                          </ul>
                            </div> : ""}
                            {education == false ? "" : <div className="tab-contents" id='education'>
                          <ul>
                                    <li><span>2021-2022</span><br></br>➡&nbsp;Passed Matric by 92% marks</li>
                                    <li><span>2022-2024</span><br></br>➡&nbsp; Passed Intermediate by 82% marks<br></br>➡&nbsp; Learn MERN satck Development Skill</li>
                                    <li><span>2024(Present)</span><br></br>➡&nbsp;Doing BSSE(Bachelor of Science in Software Engineering from Virtual University)</li>
                          </ul>
                      </div>}
                  </div>
              </div>
          </div>
            </div>
     </>
  )
}

export default About