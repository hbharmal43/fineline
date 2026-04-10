import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AV Rental Packages — Corporate, Wedding, Exhibition & College | Fineline Rajkot',
  description: 'Ready-made AV rental packages for corporate events, weddings, exhibitions & college seminars. Packages starting as low as ₹6,120/day. Book on WhatsApp.',
};

const packages = [
  {
    id: 'corporate',
    name: 'Corporate Conference Package',
    icon: 'business_center',
    price: '8,370',
    items: [
      '1x HD Projector (5000 lumens)',
      '1x Projection Screen (8ft)',
      '1x PA System Medium (4 speakers + mixer)',
      '2x Wireless Microphone',
      '1x Business Laptop (i5/i7, 16GB)',
    ],
    perks: ['Free delivery, setup & technician in Rajkot'],
    bestFor: 'Board meetings, conferences, town halls, product launches, training sessions',
    whatsappText: 'Hi, I am interested in the Corporate Conference Package. Please share details and pricing.',
  },
  {
    id: 'wedding',
    name: 'Wedding Reception Package',
    icon: 'celebration',
    price: '14,080',
    popular: true,
    items: [
      '1x Indoor LED Wall 10x6ft',
      '1x PA System Large (6+ speakers)',
      '3x Wireless Microphone',
      '1x LED TV 55" (welcome display)',
      '1x On-site Technician',
    ],
    perks: ['Free delivery & setup in Rajkot'],
    bestFor: 'Reception, sangeet, mehndi, engagement, garba night',
    whatsappText: 'Hi, I am interested in the Wedding Reception Package. Please share details and pricing.',
  },
  {
    id: 'college',
    name: 'College Seminar Package',
    icon: 'school',
    price: '6,120',
    items: [
      '1x HD Projector (5000 lumens)',
      '1x Projection Screen (8ft)',
      '1x PA System Small (2 speakers + mic)',
      '1x Wireless Microphone',
      '1x Basic Laptop (i3/i5, 8GB)',
    ],
    perks: ['Free delivery & setup in Rajkot'],
    bestFor: 'Seminars, guest lectures, convocation, fests, exam center setup',
    whatsappText: 'Hi, I am interested in the College Seminar Package. Please share details and pricing.',
  },
  {
    id: 'exhibition',
    name: 'Exhibition Package',
    icon: 'storefront',
    price: '22,525',
    items: [
      '1x Indoor LED Wall 12x8ft',
      '2x Digital Standee (55")',
      '2x LED TV 55" with Stand',
      '3x Business Laptops',
      '1x PA System Medium + 2x Wireless Mics',
    ],
    perks: ['Free delivery, setup & technician in Rajkot'],
    bestFor: 'Auto expo, trade fair, product launch, demo setup',
    whatsappText: 'Hi, I am interested in the Exhibition Package. Please share details and pricing.',
  },
];

const addOns = [
  { name: 'Extra Wireless Mic', icon: 'mic' },
  { name: 'Extra Projection Screen', icon: 'screen_share' },
  { name: 'Generator (Power Backup)', icon: 'bolt' },
  { name: 'Extra LED TV 55"', icon: 'tv' },
  { name: 'Collar / Lapel Mic', icon: 'settings_voice' },
  { name: 'Stage Lighting', icon: 'wb_twilight' },
];

const faqs = [
  {
    question: 'Can I customize a package?',
    answer: 'Yes! Every package can be customized. You can add or remove items based on your needs. Just message us on WhatsApp and we will create a custom quote for you.',
  },
  {
    question: 'Is delivery and setup included?',
    answer: 'Yes, all packages include free delivery, professional setup, and pickup within Rajkot city. For locations outside Rajkot, a nominal transport charge applies.',
  },
  {
    question: 'Do you provide a technician?',
    answer: 'The Corporate Conference and Exhibition packages include a dedicated on-site technician. For other packages, you can add a technician at a small additional cost.',
  },
  {
    question: 'What is the booking process?',
    answer: 'Simply message us on WhatsApp with your event date, venue, and preferred package. We will confirm availability and send you a final quote. A 50% advance confirms your booking.',
  },
  {
    question: 'Can I book for multiple days?',
    answer: 'Absolutely! Multi-day bookings receive additional discounts. Contact us on WhatsApp for multi-day pricing.',
  },
  {
    question: 'What happens if equipment malfunctions?',
    answer: 'We carry backup equipment for all critical items. In the rare event of a malfunction, our technician will replace the equipment immediately at no extra cost.',
  },
];

export default function PackagesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-primary to-fss-accent py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            AV Rental Packages
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-2">
            Pre-built packages for corporate events, weddings, exhibitions and college seminars.
          </p>
          <p className="text-white">
            All packages include delivery, professional setup & on-site technician support.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl border-2 ${
                  pkg.popular ? 'border-fss-primary shadow-lg' : 'border-fss-neutral-200'
                } overflow-hidden hover:shadow-xl transition-shadow`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-fss-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-fss-primary/10 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-fss-primary text-2xl">{pkg.icon}</span>
                    </div>
                    <h3 className="text-xl font-black text-fss-neutral-900">{pkg.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-fss-neutral-200">
                    <span className="text-xs text-fss-neutral-700 uppercase font-semibold tracking-wider">Starting at</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-4xl font-black text-fss-neutral-900">&#8377;{pkg.price}</span>
                      <span className="text-fss-neutral-700">/day</span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-fss-neutral-900 uppercase tracking-wider mb-4">What&apos;s Included</h4>
                    <ul className="space-y-3">
                      {pkg.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="material-symbols-outlined text-green-600 text-lg mt-0">check_circle</span>
                          <span className="text-fss-neutral-700">{item}</span>
                        </li>
                      ))}
                      {pkg.perks.map((perk, idx) => (
                        <li key={`perk-${idx}`} className="flex items-start gap-3 text-sm">
                          <span className="material-symbols-outlined text-fss-primary text-lg mt-0">local_shipping</span>
                          <span className="text-fss-neutral-900 font-medium">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-fss-neutral-50 rounded-xl p-4 mb-6">
                    <p className="text-xs font-bold text-fss-neutral-700 uppercase tracking-wider mb-1">Best for</p>
                    <p className="text-sm text-fss-neutral-900">{pkg.bestFor}</p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/919825214052?text=${encodeURIComponent(pkg.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Book This Package
                    </a>
                    <a
                      href={`https://wa.me/919825214052?text=${encodeURIComponent(`Hi, I want to customize the ${pkg.name}. Please share options.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-fss-neutral-200 text-fss-neutral-900 font-bold rounded-xl hover:border-fss-primary hover:text-fss-primary transition-colors text-sm"
                    >
                      <span className="material-symbols-outlined text-lg">tune</span>
                      Customize
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">Popular Add-ons</h2>
            <p className="text-lg text-fss-neutral-700">
              Enhance any package with additional equipment. Ask us for pricing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-xl border border-fss-neutral-200 p-5 text-center hover:border-fss-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-fss-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-fss-primary text-xl">{addon.icon}</span>
                </div>
                <h3 className="font-semibold text-fss-neutral-900 text-sm">{addon.name}</h3>
              </div>
            ))}
          </div>

          <p className="text-center text-fss-neutral-700 mt-8 text-sm">
            Need something not listed here?{' '}
            <a href="https://wa.me/919825214052" target="_blank" rel="noopener noreferrer" className="text-fss-primary hover:underline font-semibold">
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-fss-neutral-700">
              Everything you need to know about our AV rental packages
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Not Sure Which Package to Pick?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Tell us about your event and we will recommend the best setup. We also create fully custom quotes tailored to your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919825214052?text=Hi%2C%20I%20need%20help%20choosing%20an%20AV%20rental%20package%20for%20my%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919825214052"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-fss-primary transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Call +91 98252 14052
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
