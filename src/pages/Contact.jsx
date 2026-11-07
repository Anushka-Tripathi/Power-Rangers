import { useState } from 'react'
import { Send } from 'lucide-react'
import { useSeo, PageHero } from '../components/ui.jsx'
import { ContactDetails } from '../components/Blocks.jsx'
import { org } from '../data/site.js'

export default function Contact() {
  useSeo('Contact Us', 'Contact Vidyashree Charitable Trust, Rohtak, Haryana. Phone 9896531238, WhatsApp and email.')
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const href = `mailto:${org.emails[0]}?subject=${encodeURIComponent('Message from website: ' + f.name)}&body=${encodeURIComponent(`${f.message}\n\nName: ${f.name}\nEmail: ${f.email}`)}`
  return (<>
    <PageHero eyebrow="Contact us" title="Let's talk" text="Volunteer, donate or ask us anything." />
    <section className="section container contact-grid">
      <div><ContactDetails /></div>
      <div className="card">
        <h2>Send a message</h2>
        <p className="small">This opens your own email app with the message ready to send. Nothing is sent from this website.</p>
        <div className="form">
          <label>Your name<input value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Your email<input type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Message<textarea rows="5" value={f.message} onChange={set('message')} /></label>
          <a className="btn btn-primary" href={href}><Send size={18} /> Open in email app</a>
        </div>
      </div>
    </section>
  </>)
}
