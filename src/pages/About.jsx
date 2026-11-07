import { useSeo, PageHero, SectionHead } from '../components/ui.jsx'
import { DonateCta } from '../components/Blocks.jsx'
import { areas, values, org } from '../data/site.js'

export default function About() {
  useSeo('About Us', 'About Vidyashree Charitable Trust: registered 3 March 2025, Reg. No. 11815, NGO Darpan ID HR/2025/0618727. Our work and values.')
  return (<>
    <PageHero eyebrow="About us" title="Compassion, turned into action" text="A charitable trust working to build a stronger, kinder and more inclusive society." />
    <section className="section container prose-grid">
      <div className="prose">
        <p>Welcome to Vidyashree Charitable Trust, a charitable trust dedicated to creating a positive and lasting impact in the lives of helpless individuals, poor families and backward communities.</p>
        <p>The trust was established with a simple and yet powerful vision: to serve humanity and contribute towards building a stronger, kinder and more inclusive society. We work with compassion, responsibility and commitment to support people who need a helping hand, and we encourage individuals to become self-reliant and confident.</p>
        <p>Our work is guided by the needs of the communities we serve, and we organise and support charitable activities across India.</p>
      </div>
      <aside className="card details">
        <h3>Organisation details</h3>
        <dl>
          <dt>Registered on</dt><dd>{org.registeredOn}</dd>
          <dt>Registration number</dt><dd>{org.regNo}</dd>
          <dt>NGO Darpan ID</dt><dd>{org.darpan}</dd>
          <dt>PAN</dt><dd>{org.pan}</dd>
        </dl>
        <p className="small">Registered with the Government of India under the Indian Trusts Act, and with the NGO Darpan portal of NITI Aayog.</p>
      </aside>
    </section>
    <section className="section tint"><div className="container">
      <SectionHead eyebrow="What we do" title="Areas of work" />
      <ul className="check-list">{areas.map((a) => <li key={a.title}>{a.title}</li>)}</ul>
    </div></section>
    <section className="section container">
      <SectionHead center eyebrow="What guides us" title="Our values" />
      <div className="values">{values.map(([t, d, c]) => <article key={t} className={`value ${c}`}><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
    <section className="section container center narrow">
      <h2>Join us</h2>
      <p className="lead">We invite individuals and organisations to become part of our journey. Together, we can transform compassion into action and create opportunities that change lives.</p>
    </section>
    <DonateCta />
  </>)
}
