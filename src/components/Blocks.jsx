import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, Heart, ExternalLink } from 'lucide-react'
import { org } from '../data/site.js'

export function DonateCta() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>Help a child learn. Help a family live with dignity.</h2>
          <p>Every contribution, whether of time, resources, knowledge or financial support, can make a difference.</p>
        </div>
        <Link to="/donate" className="btn btn-donate"><Heart size={18} /> Support Our Mission</Link>
      </div>
    </section>
  )
}

export function ContactDetails() {
  return (
    <ul className="contact-cards">
      <li><MapPin /><div><strong>Registered address</strong><p>{org.address.map((l) => <span key={l}>{l}<br /></span>)}</p>
        <a href={org.mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <ExternalLink size={14} /></a></div></li>
      <li><Phone /><div><strong>Phone</strong><p><a href={`tel:+91${org.phone}`}>{org.phone}</a></p></div></li>
      <li><MessageCircle /><div><strong>WhatsApp</strong><p><a href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p></div></li>
      <li><Mail /><div><strong>Email</strong>{org.emails.map((e) => <p key={e}><a href={`mailto:${e}`}>{e}</a></p>)}</div></li>
    </ul>
  )
}
