'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: 'inventory_2',
    title: '500+ Professional-Grade Equipment',
    description: 'Top-tier projectors, LED walls, sound systems & laptops maintained to the highest standards for flawless performance.'
  },
  {
    icon: 'local_shipping',
    title: 'Free Delivery, Setup & Technician',
    description: 'Full-service rental: we deliver, set up, and provide an on-site technician so you can focus on your event.'
  },
  {
    icon: 'schedule',
    title: 'Same-Day Availability in Rajkot',
    description: 'Last-minute event? We offer same-day availability for Rajkot events and next-day delivery across Gujarat.'
  }
];

export default function WhyChooseUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-white via-fss-neutral-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-fss-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-fss-neutral-900 tracking-tight mb-4 max-w-3xl">
            Why Choose
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Fineline System & Services?
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Features List */}
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-fss-primary/10 rounded-xl flex items-center justify-center group-hover:bg-fss-primary/20 transition-colors duration-200">
                      <span className="material-symbols-outlined text-fss-primary text-2xl">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base text-fss-neutral-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/equipment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-fss-neutral-900 hover:bg-fss-neutral-800 text-white font-semibold rounded-lg transition-all duration-200 group"
                >
                  Browse Equipment
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-fss-neutral-50 text-fss-neutral-900 font-semibold rounded-lg border-2 border-fss-neutral-200 hover:border-fss-neutral-300 transition-all duration-200 group"
                >
                  View Packages
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center h-full"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069"
                alt="Professional AV equipment setup at an event in Gujarat"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fss-neutral-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
