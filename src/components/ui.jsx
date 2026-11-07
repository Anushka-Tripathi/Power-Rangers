import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function useSeo(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | Vidyashree Charitable Trust` : 'Vidyashree Charitable Trust | Every child deserves the gift of education'
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
  }, [title, description])
}

export function CopyButton({ value, label }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(value) }
    catch { const t = document.createElement('textarea'); t.value = value; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove() }
    setDone(true); setTimeout(() => setDone(false), 1800)
  }
  return (
    <button type="button" className="copy" onClick={copy} aria-label={`Copy ${label}`}>
      {done ? <Check size={16} /> : <Copy size={16} />}<span>{done ? 'Copied' : 'Copy'}</span>
    </button>
  )
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <header className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
      </div>
    </header>
  )
}

export function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}

export const Photo = ({ p, sizes, className = '', eager }) => (
  <img className={className} src={`/images/gallery/${p.file}`} width={p.w} height={p.h} alt={p.alt}
       loading={eager ? 'eager' : 'lazy'} decoding="async" sizes={sizes} />
)
