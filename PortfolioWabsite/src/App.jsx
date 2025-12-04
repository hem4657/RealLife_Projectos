import React from 'react'
// import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import appCss from './App.module.css';
import Header from './components/Header';
import Footer from './components/footer';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
function App() {
  return (
    <>
        <Header/>
    <div className={appCss.container}>
        <Home/>
        <About/>
        <Contect/>
    </div>
        <Footer/>
    </>
  )
}

export default App
