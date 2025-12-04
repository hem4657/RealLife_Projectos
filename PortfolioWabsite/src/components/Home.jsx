import React from 'react'
import home from './Home.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo2 from '../assets/logo2.webp'
function Home() {
  return (
      <div className={home.body}>
        <section className={home.box}>
            <section className={home.section1}>
                <h3>Welcome!</h3>
                <h2>I Am Front-End Doveloper</h2>
                <p>I'm a Front-End Doveloper With Extencive Hand On experince.My expertise is to create and website desgine and many more.</p>
              <div className={home.iconBox}>
                <i className={`bi bi-facebook ${home.icon}`}></i>
                <i className={`bi bi-github ${home.icon}`}></i>
                <i className={`bi bi-instagram ${home.icon}`}></i>
                <i className={`bi bi-telegram ${home.icon}`}></i>
                <i className={`bi bi-whatsapp ${home.icon}`}></i>
                </div>
            </section >
            <section className={home.section2}>
              <img src={logo2} alt="" />
            </section>
        </section>
        </div>
  )
}

export default Home
