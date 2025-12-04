import React from 'react'
import about from './About.module.css';
import logo2 from '../assets/logo2.webp';
const About = () => {
  return (
    <div className={about.body}>
      <section className={about.box}>
           <section className={about.section1}>
                <img src={logo2} alt="" />
           </section>
            <section className={about.section2}>
                <h1>Hi there!</h1>
                <p>Fuelled by a passion for designing compaelling products. I have a deep desire to Front-end and continously improve in my work. learn more about my journy below.</p>
            </section>
        </section>
        <section className={about.box2}>
              <h1>My Career So Far</h1>
              <div className={about.box2Section1}>
                <section className={about.summry}>
                      <p>I’m a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web interfaces. I enjoy turning ideas into clean, efficient, and interactive digital experiences using modern web technologies. As a fresher, I’m eager to learn, grow, and contribute to real-world projects while continuously improving my skills.</p>
                </section>
                <section className={about.summry1}>
                    <section className={about.summryBox}>
                        <ul className={about.list}>
                          <li>UI DESGIN</li>
                          <li>UX DESGIN</li>
                          <li>PROTOTYPING</li>
                        </ul>
                        <ul className={about.list}>
                          <li>BRANDING</li>
                          <li>HTML/CSS</li>
                          <li>WIREFRAMING</li>
                        </ul>
                        <ul className={about.list}>
                          <li>INFORMETION ARCHITECTURE</li>
                        </ul>
                        <ul className={about.list}>
                          <li>USER RESEARCH</li>
                          <li>USER INTERVIEWS</li>
                        </ul>
                        <ul className={about.list}>
                          <li>LEDERSHIP</li>
                          <li>SKETCH</li>
                          <li>ADOBE SUITE</li>
                        </ul>
                    </section>
                </section>
              </div>
        </section>
          </div>
  )
}

export default About
