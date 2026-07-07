import { Routes, Route, Link } from 'react-router-dom'
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
      <nav className="flex gap-4 p-4 border-b border-white/10 text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/methodology">Methodology</Link>
        <Link to="/products">Products</Link>
        <Link to="/writing">Writing</Link>
        <Link to="/contact">Contact</Link>
      </nav>

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
    </>
  )
}

export default App
