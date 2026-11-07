import { Link } from 'react-router-dom'
import { useSeo } from '../components/ui.jsx'

export default function NotFound() {
  useSeo('Page not found', 'The page you are looking for could not be found.')
  return (
    <section className="section container center narrow notfound">
      <p className="eyebrow">Error 404</p>
      <h1>This page could not be found</h1>
      <p className="lead">The page may have moved or the link may be incorrect.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
  )
}
