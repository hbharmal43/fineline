import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Fineline System & Services — Gujarat\'s Trusted AV Rental Since 2001',
  description: '24+ years of AV rental excellence in Gujarat. 5000+ events, 500+ equipment units, full-service delivery & setup. Based in Rajkot, serving all Gujarat.',
  alternates: {
    canonical: 'https://www.finelinesystem.com/about',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Fineline, I want to learn more about your services. Can we discuss?'
);

const milestones = [
  { year: '2001', title: 'Founded in Rajkot', description: 'Started as a small AV equipment rental service in Kandoi Bazar, Rajkot with a handful of projectors and sound systems.' },
  { year: '2005', title: 'Expanded to Saurashtra', description: 'Extended services to Jamnagar, Junagadh, and Bhavnagar. Built a reputation for reliability and professional service.' },
  { year: '2010', title: '1000+ Events Milestone', description: 'Completed over 1,000 successful events including weddings, corporate conferences, and college seminars across Gujarat.' },
  { year: '2015', title: 'LED Wall Technology', description: 'Invested in indoor and outdoor LED wall technology, becoming one of the first rental companies in Saurashtra to offer high-resolution LED displays.' },
  { year: '2020', title: 'Gujarat-Wide Coverage', description: 'Expanded service area to cover all major cities in Gujarat including Ahmedabad, Surat, Vadodara, and Gandhinagar.' },
  { year: '2025', title: '5000+ Events & Growing', description: 'Serving all of Gujarat with 500+ professional-grade equipment units. Trusted by corporates, wedding planners, colleges, and exhibition organizers.' },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-fss-neutral-900 to-fss-neutral-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/20 rounded-full mb-6">
            <span className="material-symbols-outlined text-fss-primary text-sm">history</span>
            <span className="text-sm font-semibold text-fss-primary">Established 2001 | Rajkot, Gujarat</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            24+ Years of AV Rental Excellence
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            From a small equipment rental service in Rajkot&apos;s Kandoi Bazar to Gujarat&apos;s most trusted audio-visual rental company — the Fineline System & Services story.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-fss-neutral-700 leading-relaxed">
                <p>
                  Founded in <strong className="text-fss-neutral-900">2001 in Rajkot</strong>,{' '}
                  <strong className="text-fss-neutral-900">Fineline System & Services</strong> began
                  with a simple mission: to provide high-quality audio-visual equipment and professional
                  service to the people of Rajkot and Saurashtra.
                </p>
                <p>
                  What started in a small office near Kandoi Bazar with just a handful of projectors and
                  speakers has grown into one of Gujarat&apos;s most trusted AV rental companies. Today, we
                  maintain an extensive inventory of <strong className="text-fss-neutral-900">500+
                  professional-grade equipment units</strong> and serve clients across all major cities
                  in Gujarat.
                </p>
                <p>
                  Over the past 24+ years, we&apos;ve had the privilege of being part of more than{' '}
                  <strong className="text-fss-neutral-900">5,000 successful events</strong> — from
                  intimate family gatherings to grand corporate conferences, from traditional Gujarati
                  weddings to modern product launches and college fests.
                </p>
                <p>
                  What sets us apart is our <strong className="text-fss-neutral-900">full-service
                  model</strong>: we don&apos;t just rent equipment — we deliver it to your venue, set it
                  up professionally, and provide an on-site technician to operate it during your event.
                  This means you can focus entirely on your event while we handle the technical details.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800')`
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-fss-primary rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-black text-white mb-2">24+</div>
                <div className="text-white">Years Serving Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24 bg-fss-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
              Key milestones in our 24+ year journey of serving Gujarat
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-black text-fss-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-fss-primary border-4 border-fss-primary/20" />
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-fss-primary/20 min-h-[60px]" />
                  )}
                </div>
                <div className="bg-white rounded-xl p-6 border border-fss-neutral-200 shadow-sm flex-1">
                  <h3 className="text-lg font-bold text-fss-neutral-900 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-fss-neutral-700 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
              The principles that guide everything we do at Fineline System & Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'verified', title: 'Reliability', desc: 'On-time delivery and setup, every single time. Your event schedule is our top priority.' },
              { icon: 'inventory_2', title: 'Quality Equipment', desc: 'We maintain only professional-grade equipment and regularly update our inventory with the latest technology.' },
              { icon: 'engineering', title: 'Professional Service', desc: 'Trained technicians handle delivery, setup, and on-site operation for a seamless experience.' },
              { icon: 'payments', title: 'Transparent Pricing', desc: 'Clear, upfront pricing with no hidden charges. What we quote is what you pay.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-fss-neutral-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-fss-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-fss-primary text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">{value.title}</h3>
                <p className="text-fss-neutral-700 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-fss-primary to-fss-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">24+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">5000+</div>
              <div className="text-white">Events Completed</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-white">Equipment Units</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">100%</div>
              <div className="text-white">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Why Choose Fineline System & Services?
            </h2>
            <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
              What sets us apart from other AV rental companies in Gujarat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: '24+ Years of Experience', desc: 'Founded in 2001, we bring deep industry expertise and local knowledge to every event' },
              { title: 'Full-Service Model', desc: 'Delivery + Professional Setup + On-Site Technician included with every rental' },
              { title: 'All of Gujarat & Saurashtra', desc: 'Based in Rajkot, serving Ahmedabad, Surat, Vadodara, Jamnagar, and all major cities' },
              { title: 'Same-Day Availability', desc: 'Last-minute event in Rajkot? We offer same-day availability for local events' },
              { title: '500+ Equipment Units', desc: 'Projectors, LED walls, sound systems, laptops — all professional-grade and well-maintained' },
              { title: 'Trusted by All Sectors', desc: 'Corporates, wedding families, colleges, and exhibition organizers trust us for their events' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-fss-neutral-50 rounded-xl">
                <div className="w-10 h-10 bg-fss-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white">check</span>
                </div>
                <div>
                  <h3 className="font-bold text-fss-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-fss-neutral-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fss-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-fss-neutral-900 mb-4">
            Let&apos;s Work Together on Your Next Event
          </h2>
          <p className="text-lg text-fss-neutral-700 mb-8">
            Whether it&apos;s a wedding, conference, exhibition, or college fest — we have the equipment and expertise to make it a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919714595111?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat With Us on WhatsApp
            </a>
            <a
              href="tel:+919714595111"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-all shadow-lg"
            >
              <span className="material-symbols-outlined">call</span>
              Call +91 97145 95111
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
