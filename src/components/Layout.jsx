import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, MessageCircle, Heart } from 'lucide-react'
import { nav, org } from '../data/site.js'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Vidyashree Charitable Trust – home">
          <img src="/images/logo.jpeg" alt="Vidyashree Charitable Trust logo" width="44" height="51" />
          <span>Vidyashree<small>Charitable Trust</small></span>
        </Link>
        <nav id="main-nav" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {nav.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
          <Link to="/donate" className="btn btn-donate nav-cta"><Heart size={16} /> Donate</Link>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo.jpeg" alt="Vidyashree Charitable Trust logo" width="90" height="104" className="footer-logo" />
          <p className="muted-light">{org.tagline}</p>
          <p className="muted-light small">Registered {org.registeredOn} · Reg. No. {org.regNo}<br />NGO Darpan ID: {org.darpan}<br />PAN: {org.pan}</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>{nav.map(([to, l]) => <li key={to}><Link to={to}>{l}</Link></li>)}<li><Link to="/donate">Donate</Link></li><li><Link to="/privacy-policy">Privacy Policy</Link></li></ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="contact-list">
            <li><MapPin size={16} /><span>{org.address.join(', ')}</span></li>
            <li><Phone size={16} /><a href={`tel:+91${org.phone}`}>{org.phone}</a></li>
            <li><MessageCircle size={16} /><a href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            {org.emails.map((e) => <li key={e}><Mail size={16} /><a href={`mailto:${e}`}>{e}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} {org.name}. All rights reserved.</div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (<>
    <a href="#main" className="skip">Skip to content</a>
    <Navbar /><main id="main"><Outlet /></main><Footer />
  </>)
}
