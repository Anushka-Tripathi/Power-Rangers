import { useSeo, PageHero } from '../components/ui.jsx'
import { DonateCta } from '../components/Blocks.jsx'

export default function VisionMission() {
  useSeo('Vision & Mission', 'The vision and mission of Vidyashree Charitable Trust: a society where no one is deprived of basic opportunities because of poverty or disadvantage.')
  return (<>
    <PageHero eyebrow="Vision & Mission" title="Small acts of kindness create great change" />
    <section className="section container vm-page">
      <article className="vm-block blue">
        <h2>Our Vision</h2>
        <p>Our vision is to create a society where no individual is deprived of basic opportunities because of poverty, disadvantage or difficult circumstances. We aspire to build communities where people support one another, children can dream without limitations and every individual has the opportunity to live a life of dignity and purpose.</p>
        <p>Meaningful change requires collective effort. We bring together volunteers, donors, community members, professionals and well-wishers who share our commitment to social welfare. Every contribution, whether through time, resources, knowledge or financial support, can make a difference.</p>
        <p>With continued support and collective efforts, we hope to build a more caring, empowered and sustainable society for present and future generations.</p>
      </article>
      <article className="vm-block orange">
        <h2>Our Mission</h2>
        <p>Our mission is to improve the quality of life of underprivileged and vulnerable communities by providing meaningful support and creating opportunities for a better future. We focus on education, training, skill development, healthcare, food and basic necessities, women and child welfare, community development, environmental awareness, and support for disadvantaged individuals.</p>
        <p>We believe education is one of the strongest tools for social change. We encourage children and young people to pursue education and develop the knowledge and skills needed to build a brighter future. Alongside education, we support initiatives that promote health, awareness, equality and social responsibility.</p>
        <p className="quote">Together, let us serve, inspire, and make a difference.</p>
      </article>
    </section>
    <DonateCta />
  </>)
}
