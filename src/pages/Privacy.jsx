import { useSeo, PageHero } from '../components/ui.jsx'
import { org } from '../data/site.js'

export default function Privacy() {
  useSeo('Privacy Policy', 'Privacy policy of the Vidyashree Charitable Trust website.')
  return (<>
    <PageHero eyebrow="Legal" title="Privacy Policy" />
    <section className="section container narrow prose">
      <h2>Information we collect</h2>
      <p>This website does not collect, store or process personal information. It has no user accounts, no payment processing and no database. The contact page opens your own email app and sends nothing from the site itself.</p>
      <h2>Messages and donations</h2>
      <p>If you email or WhatsApp the Trust, or send donation details for a receipt, the information you send is used only to reply to you and to issue your receipt. Please do not share bank PINs, passwords or OTPs with anyone.</p>
      <h2>Third-party services</h2>
      <p>The site loads fonts from Google Fonts and is hosted on Netlify, which may record standard technical data such as IP address. Links to WhatsApp and Google Maps are governed by those services' own policies.</p>
      <h2>Photographs</h2>
      <p>Photographs show the Trust's activities. If you would like a photograph removed, contact us and we will respond promptly.</p>
      <h2>Contact</h2>
      <p>{org.name}, {org.address.join(', ')}. Email: <a href={`mailto:${org.emails[0]}`}>{org.emails[0]}</a>.</p>
    </section>
  </>)
}
