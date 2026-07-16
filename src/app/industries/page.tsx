import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';
import { getAllTradeSlugs } from '@/data/trades';

export const metadata = generateMetadata({
  title: 'Industries We Serve | Coltura Website Design',
  description: 'We build websites for 80+ trades and industries. Barbers, builders, plumbers, salons, cafes, dentists, and more. See if we serve yours.',
  keywords: ['industries we serve', 'trade websites', 'business website design', 'websites for trades'],
});

const TRADE_LABELS: Record<string, string> = {
  'accountants': 'Accountants',
  'aerial-satellite-installers': 'Aerial & Satellite Installers',
  'air-conditioning-hvac': 'Air Conditioning & HVAC',
  'appliance-repair': 'Appliance Repair',
  'architects': 'Architects',
  'barbers': 'Barbers',
  'bathroom-fitters': 'Bathroom Fitters',
  'bedroom-fitters': 'Bedroom Fitters',
  'bricklayers': 'Bricklayers',
  'builders': 'Builders',
  'cafes': 'Cafes',
  'car-valeting-detailing': 'Car Valeting & Detailing',
  'carpet-cleaners': 'Carpet Cleaners',
  'catering': 'Catering',
  'cctv-security-installers': 'CCTV & Security Installers',
  'chauffeurs': 'Chauffeurs',
  'chimney-sweeps': 'Chimney Sweeps',
  'chiropractors': 'Chiropractors',
  'cleaners': 'Cleaners',
  'commercial-contract-cleaning': 'Commercial Contract Cleaning',
  'damp-proofing': 'Damp Proofing',
  'demolition-excavation': 'Demolition & Excavation',
  'dental-clinics': 'Dental Clinics',
  'dog-groomers': 'Dog Groomers',
  'dog-walkers': 'Dog Walkers',
  'double-glazing': 'Double Glazing',
  'driveways': 'Driveways',
  'driving-instructors': 'Driving Instructors',
  'electrical-contractors': 'Electrical Contractors',
  'electricians': 'Electricians',
  'estate-agents': 'Estate Agents',
  'event-catering': 'Event Catering',
  'fascias-soffits-guttering': 'Fascias, Soffits & Guttering',
  'fencing-contractors': 'Fencing Contractors',
  'flooring': 'Flooring',
  'funeral-directors': 'Funeral Directors',
  'garage-door-installers': 'Garage Door Installers',
  'garage-doors': 'Garage Doors',
  'garage-mechanics': 'Garage Mechanics',
  'garden-design': 'Garden Design',
  'gardeners': 'Gardeners',
  'groundworkers': 'Groundworkers',
  'hair-salons': 'Hair Salons',
  'handyman-property-maintenance': 'Handyman & Property Maintenance',
  'heating-engineers': 'Heating Engineers',
  'insulation-contractors': 'Insulation Contractors',
  'interior-designers': 'Interior Designers',
  'it-support': 'IT Support',
  'joiners': 'Joiners',
  'kitchen-fitters': 'Kitchen Fitters',
  'landscapers': 'Landscapers',
  'lawn-care': 'Lawn Care',
  'local-shops': 'Local Shops',
  'locksmiths': 'Locksmiths',
  'mechanics': 'Mechanics',
  'nail-studios': 'Nail Studios',
  'opticians': 'Opticians',
  'painters-decorators': 'Painters & Decorators',
  'personal-trainers': 'Personal Trainers',
  'pest-control': 'Pest Control',
  'photographers-videographers': 'Photographers & Videographers',
  'physiotherapists': 'Physiotherapists',
  'piling': 'Piling',
  'plant-hire': 'Plant Hire',
  'plasterers': 'Plasterers',
  'plumbers': 'Plumbers',
  'removal-companies': 'Removal Companies',
  'renderers': 'Renderers',
  'renewable-energy': 'Renewable Energy',
  'restaurants': 'Restaurants',
  'roofers': 'Roofers',
  'scaffolders': 'Scaffolders',
  'security-services': 'Security Services',
  'sheet-metal-fabrication': 'Sheet Metal Fabrication',
  'sign-makers': 'Sign Makers',
  'skip-hire': 'Skip Hire',
  'stonemasons': 'Stonemasons',
  'stove-fireplace-installers': 'Stove & Fireplace Installers',
  'surveyors': 'Surveyors',
  'takeaways': 'Takeaways',
  'tattoo-shops': 'Tattoo Shops',
  'tilers': 'Tilers',
  'tree-surgeons': 'Tree Surgeons',
  'tv-repair-electronics': 'TV Repair & Electronics',
  'upholsterers': 'Upholsterers',
  'vets': 'Vets',
  'wedding-photographers': 'Wedding Photographers',
  'welders': 'Welders',
  'welders-fabricators': 'Welders & Fabricators',
  'window-cleaners': 'Window Cleaners',
  'window-fitters-glaziers': 'Window Fitters & Glaziers',
};

export default function IndustriesPage() {
  const allSlugs = getAllTradeSlugs();
  
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Industries"
        title="Websites for Every Trade and Industry"
        subtitle="We build websites for 80+ trades and industries across Cheshire and Greater Manchester. See if we serve yours."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel label="Browse by Trade" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {allSlugs.sort().map((slug) => (
              <a
                key={slug}
                href={`/websites-for-${slug}`}
                className="rounded-xl border border-line bg-card p-3 text-center transition-all hover:border-brand/30 hover:shadow-[0_0_20px_rgba(223,44,50,0.08)]"
              >
                <span className="text-xs font-heading font-semibold text-ink transition-colors hover:text-brand">
                  {TRADE_LABELS[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
