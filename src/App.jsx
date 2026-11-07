import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import VisionMission from './pages/VisionMission.jsx'
import OurWork from './pages/OurWork.jsx'
import Team from './pages/Team.jsx'
import Gallery from './pages/Gallery.jsx'
import Donate from './pages/Donate.jsx'
import TrustDeed from './pages/TrustDeed.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vision-mission" element={<VisionMission />} />
        <Route path="our-work" element={<OurWork />} />
        <Route path="team" element={<Team />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="donate" element={<Donate />} />
        <Route path="trust-deed" element={<TrustDeed />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
