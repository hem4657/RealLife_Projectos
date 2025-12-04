import React, { useState } from 'react'
import contactCSS from './Contect.module.css';

const intrests =[
  'UI/UX desgin',
  'Web desgin',
  'Grafhic desgin',
  'Desgin stystem',
  'Other'
];
const Contect = () => {
  const [selectedIntreste, setSlectedIntrest] = useState('UI/UX desgin');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Massege Sent Successfully")
  }
  return (
    <div className={contactCSS.container}>
      <div className={contactCSS.heading}>
        <h1>Fron-end Doveloper</h1>
        <p>Contact Form</p>
      </div>
      <div className={contactCSS.section}>
        <section className={contactCSS.box}>
            <h1>Let's discuss on somthing <span>cool</span> together</h1>
            <div className={contactCSS.email}>
              <i class="bi bi-envelope-fill"></i>
              <a href="email">hemantkumawar1@gmail.com</a>
            </div>
            <div className={contactCSS.phone}>
              <i class="bi bi-telephone-fill"></i>
              <a href="email">8302805745</a>
            </div>
            <div className={contactCSS.location}>
              <i class="bi bi-geo-alt-fill"></i>
              <a href="email">AB-40 I-block Kirti Sagar</a>
            </div>
        </section>
        <section className={contactCSS.box1}>
          <form id='contactForm'>
              <label className={contactCSS.intrest}>I'm Interested in...</label>
              <section className={contactCSS.desgin}>
                {intrests.map((item) => (
              <button
                type="button"
                key={item}
                className={`option ${
                  selectedInterest === item ? "active" : ""
                }`}
                onClick={() => setSelectedInterest(item)}>
                  {item}
                </button>
              </section>
              <section className={contactCSS.system}>
                <button>DESGIN SYSTEM</button>
                <button>OTHER</button>
              </section>

                <input type="text" placeholder='Your Name' id='name'/>
                <input type="email" placeholder='Your Email' id='email'/>
                <textarea placeholder='Your Massege' id="messege"></textarea>

                <button type='submit'>Send Massege</button>
              </form>
        </section>
      </div>
    </div>
  )
}

export default Contect
