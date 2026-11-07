import { GraduationCap, Gift, Stethoscope, Users, Baby, Building2, Leaf, HeartHandshake } from 'lucide-react'

export const org = {
  name: 'Vidyashree Charitable Trust',
  tagline: 'Every child deserves the gift of education.',
  registeredOn: '3 March 2025',
  regNo: '11815',
  darpan: 'HR/2025/0618727',
  pan: 'AAETV5088K',
  phone: '9896531238',
  whatsapp: '919896531238',
  emails: ['info.vidyashreeworld@gmail.com', 'anilbhatnagar.india@gmail.com'],
  address: ['Vidyashree House', '131, Kayasthan Street, Near Bada Bazar', 'Rohtak – 124001', 'Haryana, India'],
  // Search-based link. The NGO should confirm the pin and may swap in an exact Google Maps share link.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vidyashree+House+131+Kayasthan+Street+Bada+Bazar+Rohtak+124001',
  site: 'www.vidyashree.org',
}

// IMPORTANT: set to true ONLY after the NGO has checked the current 80G / 12A certificates.
export const TAX_CLAIMS_VERIFIED = false

export const bank = {
  bank: 'Punjab National Bank',
  type: 'Current Account',
  account: '3009002100014150',
  ifsc: 'PUNB0300900',
  upi: '9896531238m@pnb',
}

export const areas = [
  { icon: GraduationCap, title: 'Educational assistance', text: 'Encouraging children and young people to learn and build skills for a brighter future.' },
  { icon: Gift, title: 'Essential items', text: 'Distribution of essential items to people who need a helping hand.' },
  { icon: Stethoscope, title: 'Healthcare & awareness', text: 'Health and awareness programmes for the communities we serve.' },
  { icon: Users, title: 'Community welfare', text: 'Welfare activities that bring people together and support one another.' },
  { icon: Baby, title: 'Women & child welfare', text: 'Initiatives that support women and children and promote equality.' },
  { icon: Building2, title: 'Community development', text: 'Working with volunteers, donors and well-wishers towards stronger communities.' },
  { icon: Leaf, title: 'Environmental awareness', text: 'Promoting awareness and responsibility towards our environment.' },
  { icon: HeartHandshake, title: 'Support for the disadvantaged', text: 'Standing beside individuals facing financial or social difficulties.' },
]

export const values = [
  ['Compassion', 'We treat every person with kindness, respect and dignity.', 'orange'],
  ['Integrity', 'We conduct our activities honestly, responsibly and transparently.', 'blue'],
  ['Equality', 'Everyone deserves fair opportunities regardless of background or circumstances.', 'pink'],
  ['Service', 'We are committed to serving communities with dedication and sincerity.', 'green'],
  ['Sustainability', 'We aim to create solutions that bring meaningful and lasting benefits.', 'navy'],
]

export const team = [
  { name: 'Anil Bhatnagar', role: 'Founder & Chairman' },
  { name: 'Aarti Mathur', role: 'Secretary' },
  { name: 'Shalini Bhatnagar', role: 'Treasurer' },
  { name: 'Rachna Sinha', role: 'Trustee' },
  { name: 'Sunil Kumar', role: 'Trustee' },
]

export const nav = [
  ['/', 'Home'], ['/about', 'About'], ['/vision-mission', 'Vision & Mission'], ['/our-work', 'Our Work'],
  ['/team', 'Team'], ['/gallery', 'Gallery'], ['/trust-deed', 'Trust Deed'], ['/contact', 'Contact'],
]
