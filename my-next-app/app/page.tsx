import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import EventTypesSection from './components/EventTypesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import JustDialBadge from './components/JustDialBadge';
import StatsSection from './components/StatsSection';
import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I need AV equipment for an event. Can you share details?'
);

const packages = [
  {
    name: 'Corporate Conference Package',
    price: '8,370',
    bestFor: 'Board meetings, conferences, seminars',
    items: [
      '1x HD Projector (5000 lumens)',
      '1x Projection Screen (8ft)',
      '1x PA System Medium (4 speakers)',
      '2x Wireless Microphone',
      '1x Business Laptop',
    ],
    whatsappText: 'Hi, I am interested in the Corporate Conference Package. Please share details and pricing.',
  },
  {
    name: 'Wedding Reception Package',
    price: '14,080',
    bestFor: 'Reception, sangeet, engagement',
    items: [
      '1x Indoor LED Wall 10x6ft',
      '1x PA System Large (6+ speakers)',
      '3x Wireless Microphone',
      '1x LED TV 55" (welcome display)',
      '1x On-site Technician',
    ],
    whatsappText: 'Hi, I am interested in the Wedding Reception Package. Please share details and pricing.',
    popular: true,
  },
  {
    name: 'College Seminar Package',
    price: '6,120',
    bestFor: 'Seminars, guest lectures, fests',
    items: [
      '1x HD Projector (5000 lumens)',
      '1x Projection Screen (8ft)',
      '1x PA System Small (2 speakers)',
      '1x Wireless Microphone',
      '1x Basic Laptop',
    ],
    whatsappText: 'Hi, I am interested in the College Seminar Package. Please share details and pricing.',
  },
  {
    name: 'Exhibition Package',
    price: '22,525',
    bestFor: 'Trade shows, expos, product launches',
    items: [
      '1x Indoor LED Wall 12x8ft',
      '2x Digital Standee (55")',
      '2x LED TV 55" with Stand',
      '3x Business Laptops',
      '1x PA System + 2x Mics',
    ],
    whatsappText: 'Hi, I am interested in the Exhibition Package. Please share details and pricing.',
  },
];

const faqItems = [
  {
    question: 'What AV equipment can I rent from Fineline System & Services?',
    answer: 'We offer a complete range of AV equipment on rent including HD & 4K projectors, LED walls, LED TVs, digital standees, sound systems, wireless microphones, laptops, and stage lighting. All equipment is professional-grade and well-maintained.'
  },
  {
    question: 'What areas do you serve in Gujarat?',
    answer: 'We serve all of Gujarat and Saurashtra from our Rajkot headquarters. Our primary service areas include Rajkot, Jamnagar, Morbi, Junagadh, Bhavnagar, Gandhidham, Ahmedabad, Surat, Vadodara, Gandhinagar, and Anand. Free delivery and setup is included for Rajkot city.'
  },
  {
    question: 'Do you provide delivery and setup?',
    answer: 'Yes! We are a full-service AV rental company. Every rental includes professional delivery, complete setup at your venue, and an on-site technician to operate the equipment during your event. Free delivery and setup within Rajkot city.'
  },
  {
    question: 'What is the minimum rental duration?',
    answer: 'Our minimum rental duration is 1 day. We also offer multi-day discounts for extended rentals. Contact us on WhatsApp for special pricing on events lasting 2 or more days.'
  },
  {
    question: 'How do I book equipment?',
    answer: 'The easiest way to book is through WhatsApp at +91 98252 14052. Simply tell us your event type, date, city, and equipment needs. We will send you a detailed quote within 30 minutes during business hours. You can also call us or fill out the form on our contact page.'
  },
];

const serviceAreas = [
  { city: 'Rajkot', href: '/av-equipment-rental-in-rajkot', highlight: true },
  { city: 'Ahmedabad', href: '/av-equipment-rental-in-ahmedabad' },
  { city: 'Jamnagar', href: '/av-equipment-rental-in-jamnagar' },
  { city: 'Morbi', href: '/av-equipment-rental-in-morbi' },
  { city: 'Junagadh', href: '/av-equipment-rental-in-junagadh' },
  { city: 'Bhavnagar', href: '/av-equipment-rental-in-bhavnagar' },
  { city: 'Gandhidham', href: '/av-equipment-rental-in-gandhidham' },
  { city: 'Surat', href: '/av-equipment-rental-in-surat' },
  { city: 'Vadodara', href: '/av-equipment-rental-in-vadodara' },
  { city: 'Gandhinagar', href: '/' },
  { city: 'Anand', href: '/' },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <EventTypesSection />
      <StatsSection />
      <WhyChooseUsSection />

      {/* Popular Packages Section */}
      <section className="w-full py-20 sm:py-28 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-fss-primary text-sm">local_offer</span>
              <span className="text-sm font-semibold text-fss-primary">Ready-Made Packages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-fss-neutral-900 mb-4">
              Popular AV Rental Packages
            </h2>
            <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
              Pre-built packages for common event types. Save more with bundled pricing. All packages include free delivery, setup & technician in Rajkot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl border-2 ${
                  pkg.popular ? 'border-fss-primary shadow-xl shadow-fss-primary/10' : 'border-fss-neutral-200'
                } p-6 hover:shadow-xl transition-shadow flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fss-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-fss-neutral-900 mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-xs text-fss-neutral-700 uppercase font-semibold">Starting at</span>
                  <div>
                    <span className="text-3xl font-black text-fss-primary">&#8377;{pkg.price}</span>
                    <span className="text-sm text-fss-neutral-700">/day</span>
                  </div>
                </div>
                <p className="text-xs text-fss-neutral-700 mb-4 px-3 py-1.5 bg-fss-neutral-50 rounded-lg inline-block">
                  Best for: {pkg.bestFor}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-fss-neutral-700">
                      <span className="material-symbols-outlined text-green-500 text-base mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-sm text-green-600 font-medium">
                    <span className="material-symbols-outlined text-green-500 text-base mt-0.5">local_shipping</span>
                    Free delivery + setup (Rajkot)
                  </li>
                </ul>
                <a
                  href={`https://wa.me/919825214052?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get This Package
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 bg-fss-neutral-900 text-white font-bold rounded-xl hover:bg-fss-neutral-800 transition-colors"
            >
              View All Packages & Customize
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <TrustSection />
      <AboutSection />

      {/* Reviews Section - JustDial Badge */}
      <section className="w-full py-20 sm:py-28 relative overflow-hidden bg-fss-dark-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-fss-dark-navy via-fss-neutral-900 to-fss-dark-navy" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-panel rounded-full mb-6 border border-fss-primary/20">
              <span className="material-symbols-outlined text-fss-primary text-xl">reviews</span>
              <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">Client Reviews</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Trusted by Thousands
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
                Across Gujarat
              </span>
            </h2>
            <p className="text-xl text-fss-neutral-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Check out our verified reviews from real clients on JustDial
            </p>
            <div className="flex justify-center mb-8">
              <JustDialBadge />
            </div>
            <p className="text-fss-neutral-700">
              200+ reviews on JustDial and 150+ reviews on Google from satisfied clients across Rajkot, Ahmedabad, Surat, and all of Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              AV Equipment Rental Across Gujarat
            </h2>
            <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
              Based in Rajkot, we deliver and set up professional AV equipment across all of Saurashtra and Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-fss-neutral-200">
              <div className="p-4 bg-gradient-to-r from-fss-primary to-fss-accent">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined">location_on</span>
                  Our Location — Rajkot, Gujarat
                </h3>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4378.77967421856!2d70.8023744758664!3d22.299149742936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca03c18fffbb%3A0x334e3d9ae98f1cbe!2sFineline%20System%20And%20Services!5e1!3m2!1sen!2sus!4v1762467336958!5m2!1sen!2sus"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fineline System & Services Location - Rajkot, Gujarat"
                />
              </div>
            </div>

            {/* Cities */}
            <div>
              <h3 className="text-xl font-bold text-fss-neutral-900 mb-6">Cities We Serve</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.city}
                    href={area.href}
                    className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                      area.highlight
                        ? 'bg-fss-primary/10 border-fss-primary/30 text-fss-primary font-bold'
                        : 'bg-white border-fss-neutral-200 hover:border-fss-primary text-fss-neutral-900'
                    }`}
                  >
                    <span className="material-symbols-outlined text-fss-primary text-lg">location_city</span>
                    <span className="text-sm font-medium">{area.city}</span>
                    {area.highlight && <span className="text-xs bg-fss-primary text-white px-2 py-0.5 rounded-full ml-auto">HQ</span>}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-fss-neutral-700">
                Free delivery & setup in Rajkot city. Nominal delivery charges for other cities.
                All rentals include professional setup and on-site technician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-20 bg-fss-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-fss-neutral-700">
              Common questions about AV equipment rental in Rajkot & Gujarat
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-fss-neutral-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-fss-neutral-900 text-left pr-4">{faq.question}</h3>
                  <span className="material-symbols-outlined text-fss-primary flex-shrink-0 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-fss-neutral-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="w-full py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fss-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Elevate<br />
            Your Event?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Get Your Free Quote Now
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
            Professional AV equipment rental with 24+ years of expertise.
            <br />
            <span className="text-fss-primary-light font-semibold">Free delivery & setup in Rajkot!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href={`https://wa.me/919825214052?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-2xl transition-all shadow-2xl hover:shadow-green-500/50 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Instant Quote on WhatsApp
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
            <a
              href="tel:+919825214052"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 glass-panel text-white text-lg font-bold rounded-2xl border-2 border-fss-primary/50 hover:border-fss-primary hover:bg-white/10 transition-all shadow-xl"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Call +91 98252 14052
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            {[
              { icon: 'history', text: 'Since 2001' },
              { icon: 'schedule', text: 'On-Time Guarantee' },
              { icon: 'local_shipping', text: 'Free Setup in Rajkot' },
              { icon: 'workspace_premium', text: 'Professional Equipment' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-fss-primary text-xl">{item.icon}</span>
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
