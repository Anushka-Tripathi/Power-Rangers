import { Eye, Download, FileText } from 'lucide-react'
import { useSeo, PageHero } from '../components/ui.jsx'
import { org } from '../data/site.js'

export default function TrustDeed() {
  useSeo('Trust Deed', 'View or download the registered Trust Deed of Vidyashree Charitable Trust.')
  return (<>
    <PageHero eyebrow="Transparency" title="Our Trust Deed" text="Vidyashree Charitable Trust is a registered trust. Read the registered Trust Deed for yourself." />
    <section className="section container narrow">
      <div className="card deed">
        <FileText size={44} />
        <p>The Trust Deed was registered on <b>{org.registeredOn}</b> (Registration No. <b>{org.regNo}</b>). It sets out the name, objectives, trustees and governance of the Trust. The document is a scanned copy and is written in Hindi.</p>
        <div className="btn-row">
          <a className="btn btn-primary" href="/documents/trust-deed.pdf" target="_blank" rel="noopener noreferrer"><Eye size={18} /> View Trust Deed</a>
          <a className="btn btn-outline" href="/documents/trust-deed.pdf" download="Vidyashree-Charitable-Trust-Deed.pdf"><Download size={18} /> Download Trust Deed</a>
        </div>
        <p className="small">PDF document</p>
      </div>
    </section>
  </>)
}
