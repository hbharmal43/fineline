import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AV Rental for Weddings, Corporate Events, Exhibitions & Colleges | Fineline Gujarat',
  description: 'Full-service AV rental packages for weddings, corporate events, exhibitions & college seminars across Gujarat. Delivery + setup + technician included.',
};

const services = [
  {
    id: 'corporate',
    title: 'Corporate Event AV Rental',
    icon: 'business_center',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800',
    target: 'Companies, HR teams & event managers',
    description:
      'Deliver impactful presentations and seamless corporate experiences with professional AV equipment. Whether it is a board meeting for 10 people or an annual day celebration for 2,000+ employees, we supply, deliver, and operate everything you need.',
    events: [
      'Board meetings & conferences',
      'Town halls & training sessions',
      'Product launches',
      'Annual day celebrations',
    ],
    equipment: [
      'Projector + large screen (100" to 200")',
      'PA system with speakers & amplifier',
      'Wireless & collar microphones',
      'Laptops & clickers for presentations',
      'LED display / video wall',
      'Podium with gooseneck mic',
    ],
    packageName: 'Corporate Conference Package',
    packagePrice: '8,370',
    packageIncludes: [
      '4K Projector + 8x6 ft screen',
      '2 Column speakers + amplifier',
      '2 Wireless microphones',
      'Laptop with clicker',
      'Delivery, setup & on-site technician',
    ],
    ctaText: 'Get Corporate Event Quote',
    whatsappMessage: 'Hi, I need a quote for Corporate Event AV rental. Please share details.',
  },
  {
    id: 'wedding',
    title: 'Wedding AV Rental',
    icon: 'celebration',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    target: 'Families, wedding planners & decorators',
    description:
      'Create unforgettable wedding celebrations with stunning LED walls, powerful sound systems, and vibrant stage lighting. From the mehndi ceremony to the grand reception, we make every function look and sound spectacular.',
    events: [
      'Reception & ring ceremony',
      'Sangeet & garba night',
      'Mehndi ceremony',
      'Engagement function',
    ],
    equipment: [
      'Indoor/outdoor LED video wall',
      'Large PA system with subwoofers',
      'Multiple wireless & handheld microphones',
      'Stage lighting & effect lights',
      'DJ setup with mixer',
      'Backup equipment on standby',
    ],
    packageName: 'Wedding Package',
    packagePrice: '14,080',
    packageIncludes: [
      '8x6 ft LED video wall (P3 indoor)',
      '4 Column speakers + 2 subwoofers + amplifier',
      '4 Wireless microphones',
      'Stage lighting (8 par lights + 2 moving heads)',
      'Delivery, setup & on-site technician',
    ],
    ctaText: 'Get Wedding Quote',
    whatsappMessage: 'Hi, I need a quote for Wedding AV rental. Please share details.',
  },
  {
    id: 'exhibition',
    title: 'Exhibition & Trade Show AV Rental',
    icon: 'storefront',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    target: 'Businesses, expo organisers & marketing teams',
    description:
      'Stand out at exhibitions and trade shows with eye-catching LED walls, interactive digital standees, and professional sound. We provide end-to-end AV solutions for booths, demo areas, and main stages at expos across Gujarat.',
    events: [
      'Auto expos & trade fairs',
      'Product launch events',
      'Demo setup & brand activations',
      'Government & industry exhibitions',
    ],
    equipment: [
      'LED video walls (multiple sizes)',
      'Digital standees & kiosks',
      '43" to 65" LED TVs on floor stands',
      'Laptops with pre-loaded content',
      'PA system with wireless mics',
      'Portable sound systems for booths',
    ],
    packageName: 'Exhibition Package',
    packagePrice: '22,525',
    packageIncludes: [
      '10x6 ft LED video wall (P3 indoor)',
      '2 Digital standees (43")',
      '2 LED TVs (55") on stands',
      '2 Laptops',
      'PA system with 2 wireless mics',
      'Delivery, setup & on-site technician',
    ],
    ctaText: 'Get Exhibition Quote',
    whatsappMessage: 'Hi, I need a quote for Exhibition / Trade Show AV rental. Please share details.',
  },
  {
    id: 'college',
    title: 'College & Educational Events',
    icon: 'school',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800',
    target: 'College fest organisers, principals & event committees',
    description:
      'Affordable, reliable AV equipment for educational institutions. From guest lectures and seminars to annual college fests and convocation ceremonies, we deliver the right setup at budget-friendly rates.',
    events: [
      'Seminars & guest lectures',
      'Convocation ceremonies',
      'College fests & cultural events',
      'Exam centre & workshop setups',
    ],
    equipment: [
      'Projector + screen (various sizes)',
      'PA system with column speakers',
      'Wireless & wired microphones',
      'Laptops for presentations',
      'Portable sound systems',
      'Podium with microphone',
    ],
    packageName: 'College Package',
    packagePrice: '6,120',
    packageIncludes: [
      '4K Projector + 6x4 ft screen',
      '2 Column speakers + amplifier',
      '2 Wireless microphones',
      'Laptop with clicker',
      'Delivery, setup & on-site technician',
    ],
    ctaText: 'Get College Event Quote',
    whatsappMessage: 'Hi, I need a quote for College / Educational Event AV rental. Please share details.',
  },
];

const additionalServices = [
  {
    icon: 'local_shipping',
    title: 'Delivery & Setup',
    description:
      'We deliver all equipment to your venue well before the event, set everything up, test it thoroughly, and ensure it is ready to go. After the event, we handle teardown and pickup too.',
  },
  {
    icon: 'support_agent',
    title: 'On-Site Technical Support',
    description:
      'A trained technician stays at your venue throughout the event to handle sound checks, troubleshoot any issues, and make real-time adjustments so everything runs flawlessly.',
  },
  {
    icon: 'settings',
    title: 'Equipment Operation',
    description:
      'Don\'t worry about operating the gear yourself. Our team manages projectors, sound desks, lighting consoles, and video walls so you can focus entirely on your event.',
  },
];

const serviceAreas = [
  { city: 'Rajkot', href: '/av-equipment-rental-in-rajkot' },
  { city: 'Ahmedabad', href: '/av-equipment-rental-in-ahmedabad' },
  { city: 'Surat', href: '/av-equipment-rental-in-surat' },
  { city: 'Vadodara', href: '/av-equipment-rental-in-vadodara' },
  { city: 'Jamnagar', href: '/av-equipment-rental-in-jamnagar' },
  { city: 'Morbi', href: '/av-equipment-rental-in-morbi' },
  { city: 'Junagadh', href: '/av-equipment-rental-in-junagadh' },
  { city: 'Bhavnagar', href: '/av-equipment-rental-in-bhavnagar' },
  { city: 'Gandhidham', href: '/av-equipment-rental-in-gandhidham' },
  { city: 'Gandhinagar', href: '/av-equipment-rental-in-gandhinagar' },
  { city: 'Anand', href: '/av-equipment-rental-in-anand' },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-primary to-fss-accent py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            AV Equipment Rental Services in Gujarat
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Full-service AV rental packages for weddings, corporate events, exhibitions and college seminars.
            Delivery + setup + technician included.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 sm:py-24 ${index % 2 === 1 ? 'bg-fss-neutral-50' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-fss-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-fss-primary text-2xl">{service.icon}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900">{service.title}</h2>
            </div>
            <p className="text-sm text-fss-primary font-semibold mb-6 ml-15">
              For {service.target}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: Image + Description */}
              <div>
                <div
                  className="h-64 sm:h-72 rounded-2xl bg-cover bg-center mb-6"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.25)), url('${service.image}')`,
                  }}
                />
                <p className="text-fss-neutral-700 leading-relaxed mb-6">{service.description}</p>

                <h3 className="font-bold text-fss-neutral-900 mb-3">Events We Cover:</h3>
                <ul className="space-y-2 mb-6">
                  {service.events.map((event, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-fss-neutral-700">
                      <span className="material-symbols-outlined text-fss-primary text-base mt-0.5">event</span>
                      {event}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-fss-neutral-900 mb-3">Equipment Typically Needed:</h3>
                <ul className="space-y-2">
                  {service.equipment.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-fss-neutral-700">
                      <span className="material-symbols-outlined text-fss-primary text-base mt-0.5">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Package + CTA */}
              <div>
                <div className="bg-white rounded-2xl border-2 border-fss-primary/20 shadow-lg p-8">
                  <div className="text-center mb-6">
                    <p className="text-sm font-semibold text-fss-primary uppercase tracking-wide mb-1">
                      Popular Package
                    </p>
                    <h3 className="text-2xl font-black text-fss-neutral-900 mb-2">{service.packageName}</h3>
                    <p className="text-xs text-fss-neutral-700 uppercase font-semibold tracking-wider mb-1">Starting at</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-black text-fss-primary">&#8377;{service.packagePrice}</span>
                      <span className="text-fss-neutral-700 text-sm">/day</span>
                    </div>
                  </div>

                  <div className="border-t border-fss-neutral-200 pt-6">
                    <h4 className="font-bold text-fss-neutral-900 mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3 mb-8">
                      {service.packageIncludes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-fss-neutral-700">
                          <span className="material-symbols-outlined text-green-600 text-base mt-0.5">check_circle</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/919714595111?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-lg"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    {service.ctaText}
                  </a>

                  <p className="text-xs text-fss-neutral-700 text-center mt-3">
                    Prices are indicative. Custom packages available on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">Additional Services</h2>
            <p className="text-lg text-fss-neutral-700">
              Every rental includes delivery, setup and technical support at no hidden cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-fss-neutral-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-fss-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-fss-primary text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-fss-neutral-900 mb-3">{item.title}</h3>
                <p className="text-fss-neutral-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">We Serve All of Gujarat</h2>
            <p className="text-lg text-fss-neutral-700">
              Fast delivery and on-site support across major cities in Gujarat
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.city}
                href={area.href}
                className="bg-white border border-fss-neutral-200 rounded-lg p-4 text-center hover:border-fss-primary hover:shadow-md transition-all group"
              >
                <span className="material-symbols-outlined text-fss-primary mb-2 group-hover:scale-110 transition-transform inline-block">
                  location_on
                </span>
                <div className="font-semibold text-fss-neutral-900">{area.city}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Ready to Book AV Equipment?</h2>
          <p className="text-lg text-white mb-8">
            Tell us your event date, venue and requirements. We will send you a custom quote within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919714595111?text=${encodeURIComponent('Hi, I want to book AV equipment for my event. Please share details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-fss-primary transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              +91 97145 95111
            </a>
            <a
              href="tel:+919825214052"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-fss-primary transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              +91 98252 14052
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
