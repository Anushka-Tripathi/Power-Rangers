import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import { useSeo, SectionHead, Photo } from '../components/ui.jsx'
import { DonateCta, ContactDetails } from '../components/Blocks.jsx'
import { areas, org } from '../data/site.js'
import { img } from '../data/gallery.js'

export default function Home() {
  useSeo('', 'Vidyashree Charitable Trust, Rohtak. Building a society where every individual can learn, grow and live with dignity through education, compassion and community action.')
  const picks = [38, 27, 31, 4, 9, 5].map(img)
  return (<>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Vidyashree Charitable Trust · Rohtak, Haryana</p>
          <h1>Every child deserves the gift of <em>education.</em></h1>
          <p className="lead">Building a society where every individual has the opportunity to learn, grow and live with dignity. Together, we can create meaningful change through education, compassion and community action.</p>
          <div className="btn-row">
            <Link to="/our-work" className="btn btn-primary">Explore Our Work <ArrowRight size={18} /></Link>
            <Link to="/donate" className="btn btn-outline">Support Our Mission</Link>
          </div>
        </div>
        <div className="hero-art">
          <Photo p={img(2)} eager sizes="(max-width:900px) 100vw, 50vw" className="hero-photo" />
          <span className="blob b1" /><span className="blob b2" />
        </div>
      </div>
    </section>

    <section className="facts">
      <div className="container facts-grid">
        <div><BadgeCheck /><span>Registered Trust<br /><b>Reg. No. {org.regNo}</b></span></div>
        <div><BadgeCheck /><span>Registered on<br /><b>{org.registeredOn}</b></span></div>
        <div><BadgeCheck /><span>NGO Darpan ID<br /><b>{org.darpan}</b></span></div>
        <div><BadgeCheck /><span>PAN<br /><b>{org.pan}</b></span></div>
      </div>
    </section>

    <section className="section container intro">
      <SectionHead eyebrow="Who we are" title="Serving humanity, one opportunity at a time" />
      <div>
        <p>Vidyashree Charitable Trust is dedicated to creating a positive and lasting impact in the lives of helpless individuals, poor families and backward communities. We believe every person deserves the opportunity to live with dignity, hope, and equal access to basic necessities and opportunities for growth.</p>
        <Link to="/about" className="text-link">Read our story <ArrowRight size={16} /></Link>
      </div>
    </section>

    <section className="section tint">
      <div className="container vm-grid">
        <article className="vm-card blue"><h3>Our Vision</h3><p>A society where no one is deprived of basic opportunities because of poverty or disadvantage, and everyone can live with dignity and support.</p></article>
        <article className="vm-card orange"><h3>Our Mission</h3><p>To improve the quality of life of underprivileged and vulnerable communities by providing meaningful support and creating opportunities for a better future.</p></article>
        <Link to="/vision-mission" className="text-link">Vision &amp; Mission in full <ArrowRight size={16} /></Link>
      </div>
    </section>

    <section className="section container">
      <SectionHead center eyebrow="Areas of work" title="How we serve our communities" />
      <div className="area-grid">
        {areas.map(({ icon: Icon, title, text }, i) => (
          <article key={title} className={`area c${i % 4}`}><span className="icon"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>

    <section className="section tint">
      <div className="container">
        <SectionHead center eyebrow="From our activities" title="Moments from our work" />
        <div className="picks">
          {picks.map((p) => <Photo key={p.id} p={p} sizes="(max-width:700px) 50vw, 33vw" />)}
        </div>
        <p className="center"><Link to="/gallery" className="btn btn-primary">View full gallery <ArrowRight size={18} /></Link></p>
      </div>
    </section>

    <DonateCta />

    <section className="section container contact-home">
      <SectionHead eyebrow="Get in touch" title="We would love to hear from you" text="Volunteer, donate, or simply ask a question. Reach us any time." />
      <ContactDetails />
    </section>
  </>)
}
