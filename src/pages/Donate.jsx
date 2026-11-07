import { MessageCircle, Smartphone, Landmark, ShieldAlert } from 'lucide-react'
import { useSeo, PageHero, CopyButton } from '../components/ui.jsx'
import { bank, org, TAX_CLAIMS_VERIFIED } from '../data/site.js'

const Row = ({ k, v, copy }) => (
  <div className="row"><dt>{k}</dt><dd>{v}{copy && <CopyButton value={v} label={k} />}</dd></div>
)

export default function Donate() {
  useSeo('Donate', 'Support Vidyashree Charitable Trust by bank transfer, UPI or QR code scan.')
  return (<>
    <PageHero eyebrow="Donate" title="Your gift helps a child learn" text="You can donate by bank transfer, UPI or by scanning the QR code below." />
    <section className="section container donate-grid">
      <article className="card qr-card">
        <h2><Smartphone size={22} /> Scan to donate (UPI)</h2>
        <img src="/images/donation-qr.png" width="146" height="142" alt="Official UPI QR code for Vidyashree Charitable Trust" className="qr" />
        <p className="small">UPI ID</p>
        <p className="mono">{bank.upi}</p><CopyButton value={bank.upi} label="UPI ID" />
      </article>

      <article className="card">
        <h2><Landmark size={22} /> Bank transfer</h2>
        <dl className="dl">
          <Row k="Bank" v={bank.bank} />
          <Row k="Account type" v={bank.type} />
          <Row k="Account name" v={org.name} />
          <Row k="Account number" v={bank.account} copy />
          <Row k="IFSC code" v={bank.ifsc} copy />
          <Row k="UPI ID" v={bank.upi} copy />
        </dl>
      </article>
    </section>

    <section className="section tint"><div className="container donate-grid">
      <article className="card">
        <h2><MessageCircle size={22} /> After you donate</h2>
        <ol className="steps">
          <li>Make your donation by bank transfer, UPI or QR code.</li>
          <li>Send your payment details on WhatsApp to <b>{org.phone}</b> so the Trust can confirm it.</li>
          <li>Include your full name, PAN (if you need a receipt), complete address with city and PIN code, the amount, and any special purpose.</li>
          <li>After the Trust confirms the payment, a hard-copy donation receipt is sent to your address by courier.</li>
        </ol>
        <a className="btn btn-primary" href={`https://wa.me/${org.whatsapp}?text=${encodeURIComponent('Hello, I have made a donation to Vidyashree Charitable Trust and would like a receipt.')}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> WhatsApp for receipt
        </a>
        {TAX_CLAIMS_VERIFIED && <p className="small">Donations are eligible for deduction under Section 80G of the Income Tax Act.</p>}
      </article>
      <article className="card notice">
        <h2><ShieldAlert size={22} /> Please note</h2>
        <ul>
          <li>Donations are made directly through your own bank or UPI app. This website does not process payments.</li>
          <li>Payments are confirmed manually by the Trust. Nothing on this site is verified automatically.</li>
          <li>Please verify the account number and UPI ID above before paying, and never share your PIN or OTP with anyone.</li>
        </ul>
      </article>
    </div></section>
  </>)
}
