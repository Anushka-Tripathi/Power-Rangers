import { useSeo, PageHero } from '../components/ui.jsx'
import { team } from '../data/site.js'

const initials = (n) => n.split(' ').map((w) => w[0]).join('')

export default function Team() {
  useSeo('Our Team', 'Meet the trustees of Vidyashree Charitable Trust.')
  return (<>
    <PageHero eyebrow="Our team" title="The people behind the trust" text="Our trustees guide Vidyashree Charitable Trust with compassion, responsibility and commitment." />
    <section className="section container">
      <div className="team-grid">
        {team.map((m, i) => (
          <article key={m.name} className="member">
            <div className={`avatar c${i % 4}`} aria-hidden="true">{initials(m.name)}</div>
            <h3>{m.name}</h3><p>{m.role}</p>
          </article>))}
      </div>
    </section>
  </>)
}
