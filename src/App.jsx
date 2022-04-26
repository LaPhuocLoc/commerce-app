import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog';
import Detail from './pages/Detail/Detail';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])


  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/:category/search/:keyword" element={<Catalog />} />
          <Route path="/:category/:id" element={<Detail />} />
          <Route path="/:category" element={<Catalog />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App