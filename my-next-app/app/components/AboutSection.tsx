import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-fss-primary text-sm">history</span>
              <span className="text-sm font-semibold text-fss-primary">Since 2001</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 tracking-tight mb-6">
              24+ Years of AV Rental Excellence in Gujarat
            </h2>

            <div className="space-y-4 text-fss-neutral-700 leading-relaxed mb-8">
              <p>
                <strong className="text-fss-neutral-900">Fineline System & Services</strong> has been
                Rajkot and Gujarat&apos;s trusted partner for audio-visual equipment rental since 2001.
                What started as a small venture in Rajkot has grown into one of Saurashtra&apos;s leading
                AV rental companies.
              </p>
              <p>
                We specialize in providing professional projectors, LED screens, sound systems, and laptops
                with <strong className="text-fss-neutral-900">complete delivery, setup, and on-site technician
                support</strong> for weddings, corporate events, exhibitions, and college seminars across Gujarat.
              </p>
              <p>
                Based in Rajkot&apos;s Kandoi Bazar, we&apos;ve been part of over{' '}
                <strong className="text-fss-neutral-900">5,000+ successful events</strong>, earning the
                trust of businesses, families, and institutions throughout the state.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: 'emoji_events', title: 'Industry Leader', desc: "Saurashtra's #1 AV Rental" },
                { icon: 'groups', title: 'Expert Team', desc: 'Trained Professionals' },
                { icon: 'location_on', title: 'Based in Rajkot', desc: 'Serving All Gujarat' },
                { icon: 'new_releases', title: 'Full Service', desc: 'Delivery + Setup + Tech' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fss-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-fss-primary text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-fss-neutral-900">{item.title}</div>
                    <div className="text-sm text-fss-neutral-700">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-lg hover:bg-fss-primary-dark transition-all shadow-md hover:shadow-lg"
            >
              Read Our Full Story
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="h-96 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fss-neutral-900/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black text-fss-primary mb-1">24+</div>
                    <div className="text-sm text-fss-neutral-700 font-medium">Years of Experience</div>
                  </div>
                  <div className="border-l border-fss-neutral-200 pl-6">
                    <div className="text-3xl font-black text-fss-primary mb-1">5000+</div>
                    <div className="text-sm text-fss-neutral-700 font-medium">Successful Events</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -top-6 -right-6 bg-fss-primary rounded-xl p-6 shadow-2xl max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-white text-3xl">star</span>
                <div className="text-white">
                  <div className="text-2xl font-black">350+</div>
                  <div className="text-sm opacity-90">Reviews on JustDial & Google</div>
                </div>
              </div>
              <p className="text-sm text-white">
                Trusted by thousands of clients across Rajkot & Gujarat for weddings, corporate events & more.
              </p>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-2xl">local_shipping</span>
                </div>
                <div>
                  <div className="font-bold text-fss-neutral-900">Free Delivery</div>
                  <div className="text-xs text-fss-neutral-700">Setup Included in Rajkot</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Trust Badges */}
        <div className="mt-20 pt-12 border-t border-fss-neutral-200">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-fss-neutral-900 mb-2">Trusted by Leading Organizations</h3>
            <p className="text-sm text-fss-neutral-700">Serving Gujarat&apos;s top companies, wedding planners, colleges & families</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center text-fss-neutral-700 font-semibold">Corporate Clients</div>
            <div className="text-center text-fss-neutral-700 font-semibold">Wedding Planners</div>
            <div className="text-center text-fss-neutral-700 font-semibold">Hotels & Venues</div>
            <div className="text-center text-fss-neutral-700 font-semibold">Educational Institutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
