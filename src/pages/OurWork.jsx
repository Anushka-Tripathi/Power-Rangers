import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useSeo, PageHero, SectionHead, Photo } from '../components/ui.jsx'
import { DonateCta } from '../components/Blocks.jsx'
import { areas } from '../data/site.js'
import { img } from '../data/gallery.js'

export default function OurWork() {
  useSeo('Our Work', 'Areas of work of Vidyashree Charitable Trust: education, essential items, healthcare awareness, community welfare, women and child welfare, environment and more.')
  const a = img(38), b = img(31)
  return (<>
    <PageHero eyebrow="Our work" title="Education first, and care for every community" text="Our activities respond to the needs of the people we serve." />
    <section className="section container feature-row">
      <Photo p={{ ...a, alt: 'Volunteers with children holding notebooks and school supplies' }} sizes="(max-width:900px) 100vw, 50vw" />
      <div><SectionHead eyebrow="Education" title="Encouraging children to learn" />
        <p>We believe education is one of the strongest tools for social change. We encourage children and young people to pursue education and develop the knowledge and skills they need to build a brighter future.</p></div>
    </section>
    <section className="section container feature-row flip">
      <Photo p={{ ...b, alt: 'Volunteer handing over a blanket to a woman outside her home' }} sizes="(max-width:900px) 100vw, 50vw" />
      <div><SectionHead eyebrow="Essential items" title="A helping hand where it is needed" />
        <p>We organise distribution of essential items and support people facing financial or social difficulties, with kindness, respect and dignity.</p></div>
    </section>
    <section className="section tint"><div className="container">
      <SectionHead center eyebrow="All areas of work" title="What we focus on" />
      <div className="area-grid">{areas.map(({ icon: Icon, title, text }, i) => (
        <article key={title} className={`area c${i % 4}`}><span className="icon"><Icon size={24} /></span><h3>{title}</h3><p>{text}</p></article>))}
      </div>
      <p className="center"><Link to="/gallery" className="btn btn-primary">See photographs <ArrowRight size={18} /></Link></p>
    </div></section>
    <DonateCta />
  </>)
}
