import React from 'react'
import { Fragment } from 'react'
import headerCss from './Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
  return (
    <div className={`${headerCss.header1} ${headerCss.row}`}>
      <div class={headerCss.column}>
        <h1 className={headerCss.h1}>Mr. Heamnt</h1>
      </div>
      <div className={headerCss.searchBox}>
        <label className={headerCss.searchIcon}><i className={`bi bi-search ${headerCss.icon}`}></i></label>
        <input className={headerCss.searchInput} type="text" placeholder='google' />
      </div>
          <ul className={headerCss.box}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Skills</li>
          </ul>
    </div>
  )
}

export default Header
