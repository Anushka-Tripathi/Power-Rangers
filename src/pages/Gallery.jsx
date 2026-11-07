import { useCallback, useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSeo, PageHero } from '../components/ui.jsx'
import { gallery } from '../data/gallery.js'

export default function Gallery() {
  useSeo('Gallery', 'Photographs from the activities of Vidyashree Charitable Trust.')
  const [open, setOpen] = useState(null)
  const closeBtn = useRef(null)
  const last = useRef(null)
  const n = gallery.length
  const go = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n])

  useEffect(() => {
    if (open === null) return
    const key = (e) => { if (e.key === 'Escape') setOpen(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    document.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; last.current?.focus() }
  }, [open === null, go]) // eslint-disable-line

  const p = open !== null ? gallery[open] : null
  return (<>
    <PageHero eyebrow="Gallery" title="Photographs from our activities" text={`${n} photographs. Select any photo to view it larger.`} />
    <section className="section container">
      <div className="masonry">
        {gallery.map((g, i) => (
          <button key={g.id} className="tile" onClick={(e) => { last.current = e.currentTarget; setOpen(i) }} aria-label={`Open photograph ${g.id} of ${n}`}>
            <img src={`/images/gallery/thumbs/${g.file}`} width={Math.round(g.w * Math.min(1, 640 / Math.max(g.w, g.h)))} height={Math.round(g.h * Math.min(1, 640 / Math.max(g.w, g.h)))} alt={g.alt} loading="lazy" decoding="async" />
          </button>))}
      </div>
    </section>
    {p && (
      <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" onClick={() => setOpen(null)}>
        <button ref={closeBtn} className="lb-btn lb-close" onClick={() => setOpen(null)} aria-label="Close"><X size={26} /></button>
        <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous photograph"><ChevronLeft size={30} /></button>
        <figure onClick={(e) => e.stopPropagation()}>
          <img key={p.id} src={`/images/gallery/${p.file}`} width={p.w} height={p.h} alt={p.alt} />
          <figcaption>{open + 1} / {n}</figcaption>
        </figure>
        <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next photograph"><ChevronRight size={30} /></button>
      </div>)}
  </>)
}
