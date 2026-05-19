'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card3D from './Card3D';

const categories = [
  {
    id: 'projectors',
    title: 'Projectors & Screens',
    description: 'HD & 4K projectors from ₹2,000/day',
    icon: 'airplay',
    link: '/equipment#projectors'
  },
  {
    id: 'led-walls',
    title: 'LED Walls & Displays',
    description: 'Indoor & outdoor LED walls from ₹100/sqft',
    icon: 'tv',
    link: '/equipment#led-walls'
  },
  {
    id: 'tvs',
    title: 'TVs & Digital Standees',
    description: '43" to 65" LED TVs from ₹1,500/day',
    icon: 'desktop_windows',
    link: '/equipment#tvs'
  },
  {
    id: 'sound',
    title: 'Sound Systems & Audio',
    description: 'PA systems & mics from ₹1,800/day',
    icon: 'speaker',
    link: '/equipment#audio'
  },
  {
    id: 'laptops',
    title: 'Laptops & Computers',
    description: 'Business laptops from ₹700/day',
    icon: 'laptop_mac',
    link: '/equipment#laptops'
  },
  {
    id: 'lighting',
    title: 'Lighting & Stage',
    description: 'Stage lighting kits for any event',
    icon: 'wb_twilight',
    link: '/equipment#lighting'
  }
];

export default function CategorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fss-primary/5 via-white to-fss-accent/5 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-fss-neutral-900 mb-4">
            AV Equipment
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              On Rent
            </span>
          </h2>
          <p className="text-lg text-fss-neutral-700 max-w-2xl mx-auto">
            Browse our extensive collection of professional audio-visual equipment available for rent in Rajkot and across Gujarat
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card3D className="h-full" intensity={10}>
                <Link
                  href={category.link}
                  className="group block p-5 text-center bg-white hover:bg-gradient-to-br hover:from-fss-primary/5 hover:to-fss-accent/5 rounded-2xl border-2 border-fss-neutral-200 hover:border-fss-primary/50 shadow-md hover:shadow-2xl hover:shadow-fss-primary/20 transition-all h-full"
                >
                  <motion.div
                    className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-fss-primary/10 to-fss-accent/10 flex items-center justify-center group-hover:from-fss-primary group-hover:to-fss-accent group-hover:shadow-lg group-hover:shadow-fss-primary/50 transition-all"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="material-symbols-outlined text-fss-primary group-hover:text-white text-2xl transition-colors">
                      {category.icon}
                    </span>
                  </motion.div>

                  <h3 className="text-sm font-bold text-fss-neutral-900 mb-1 group-hover:text-fss-primary transition-colors">
                    {category.title}
                  </h3>

                  <p className="text-xs text-fss-neutral-700 leading-snug">
                    {category.description}
                  </p>
                </Link>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
