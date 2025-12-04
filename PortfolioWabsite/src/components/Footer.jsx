import React from 'react'
import footerCss from './Footer.module.css';
const Footer = () => {
  return (
    <div className={footerCss.container}>
      <div className={footerCss.box}>
        <h2 className={footerCss.heading}>Build and monetize no-code products</h2>
        <div className={footerCss.box1}>
            <i  className={`bi bi-facebook ${footerCss.icon}`}></i>
            <i className={`bi bi-github ${footerCss.icon}`}></i>
            <i className={`bi bi-instagram ${footerCss.icon}`}></i>
            <i className={`bi bi-telegram ${footerCss.icon}`}></i>
            <i className={`bi bi-whatsapp ${footerCss.icon}`}></i>
        </div>
      </div>
      <div  className={`${footerCss.box2} ${footerCss.row}`}>
        <div className={`${footerCss.column} ${footerCss.section}`}>
            <h3>Find us at</h3>
            <div className={footerCss.sectionBox}>
            <div className={footerCss.icon}>
                <i className={`bi bi-whatsapp ${footerCss.icon}`}></i>
                <i className={`bi bi-telegram ${footerCss.icon}`}></i>
                <i className={`bi bi-instagram ${footerCss.icon}`}></i>
                <i className={`bi bi-linkedin ${footerCss.icon}`}></i>
                </div>
            <ul className={footerCss.list}>
                <li>Whatsapp</li>
                <li>Telegram</li>
                <li>Instagram</li>
                <li>Linkedin</li>
            </ul>
            </div>
        </div>
        <div className={`${footerCss.column} ${footerCss.section}`}>
            <h3>Company</h3>
            <ul className={footerCss.list}>
                <li>About Us</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Jobs</li>
            </ul>
        </div>
        <div className={`${footerCss.column} ${footerCss.section1}`}>
            <h3>Products</h3>
            <ul className={footerCss.list}>
                <li>Plugins</li>
                <li>Convert Bubble to Native</li>
            </ul>
            <div>
                <h3>Legal</h3>
                <ul className={footerCss.list}>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        <div className={`${footerCss.column} ${footerCss.section}`}>
            <h3>Learn more</h3>
            <ul className={footerCss.list}>
                <li>Bubble.io</li>
                <li>Website Builders</li>
                <li>No Code Tools</li>
                <li>FAQs</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

