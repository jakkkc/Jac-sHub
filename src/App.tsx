import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MouseTrail from './components/MouseTrail'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Methodology from './pages/Methodology'
import Products from './pages/Products'
import Writing from './pages/Writing'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <MouseTrail />
      <div className="relative z-10">
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/products" element={<Products />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </>
  )
}

export default App
