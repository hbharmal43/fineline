'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const trustBadges = [
  { icon: 'local_shipping', text: 'Free Delivery & Setup' },
  { icon: 'engineering', text: 'On-Site Technician' },
  { icon: 'support_agent', text: 'Dedicated Support' },
  { icon: 'verified_user', text: 'Trusted Since 2001' },
  { icon: 'schedule', text: 'On-Time Guarantee' },
  { icon: 'workspace_premium', text: 'Professional Grade' },
];

export default function TrustSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative w-full py-20 sm:py-28 overflow-hidden">
      {/* Premium Background with Gradient */}
      <div className="absolute inset-0 gradient-dark" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fss-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fss-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-dark rounded-full mb-6 border border-fss-primary/30">
            <span className="material-symbols-outlined text-fss-primary text-xl">military_tech</span>
            <span className="text-fss-primary font-bold text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Gujarat&apos;s Most{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              Trusted
            </span>
            <br />
            AV Rental Partner
          </h2>

          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Full-service AV rental with delivery, professional setup, and on-site technical support across Saurashtra & Gujarat
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-dark p-8 rounded-2xl border border-fss-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Complete AV Rental Service
            </h3>
            <p className="text-white">
              Everything you need for a successful event — equipment, delivery, setup & technical support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fss-primary to-fss-accent flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">
                    {badge.icon}
                  </span>
                </div>
                <span className="text-white text-xs font-semibold text-center leading-tight">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gujarat Coverage Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-dark px-8 py-5 rounded-2xl border border-fss-primary/30">
            <span className="material-symbols-outlined text-fss-primary text-4xl">map</span>
            <div className="text-left">
              <div className="text-2xl font-black text-white">
                All of Gujarat & Saurashtra Coverage
              </div>
              <div className="text-white font-medium">
                Rajkot, Ahmedabad, Jamnagar, Surat, Vadodara, Bhavnagar, Junagadh, Morbi & more
              </div>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
