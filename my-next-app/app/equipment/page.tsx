'use client';

import { useState } from 'react';

// Equipment data
const equipmentData = [
  // Projectors & Screens
  { id: 1, category: 'projectors', name: 'HD Projector (3000-4000 lumens)', specs: 'HD resolution, portable, quick setup', price: '2,000', priceNum: 2000, bestFor: 'Small meetings up to 50 pax', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600', note: '' },
  { id: 2, category: 'projectors', name: 'HD Projector (5000+ lumens)', specs: 'High brightness, crisp visuals', price: '3,500', priceNum: 3500, bestFor: 'Conferences & events 50-200 pax', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=600', note: '' },
  { id: 3, category: 'projectors', name: '4K Laser Projector (7000+ lumens)', specs: '4K resolution, laser light source, vivid colors', price: '7,000', priceNum: 7000, bestFor: 'Premium & outdoor events', image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=600', note: '' },
  { id: 4, category: 'projectors', name: 'Tripod Screen 6ft', specs: 'Portable tripod stand, matte white', price: '500', priceNum: 500, bestFor: 'Small rooms & presentations', image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=600', note: 'Free with projector rental' },
  { id: 5, category: 'projectors', name: 'Tripod Screen 8ft', specs: 'Portable tripod stand, matte white', price: '700', priceNum: 700, bestFor: 'Medium rooms & meetings', image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=600', note: 'Free with projector rental' },
  { id: 6, category: 'projectors', name: 'Motorized Screen 10ft+', specs: 'Electric motorized, wall/ceiling mount', price: '1,500', priceNum: 1500, bestFor: 'Auditoriums & large venues', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600', note: '' },

  // LED Walls & Video Displays
  { id: 7, category: 'led-walls', name: 'Indoor LED Wall (P3/P3.9)', specs: 'High resolution, seamless panels, vibrant', price: '100', priceNum: 100, bestFor: 'Indoor events & conferences', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600', note: 'Per sqft/day — min 24 sqft' },
  { id: 8, category: 'led-walls', name: 'Outdoor LED Wall (P4.8/P5)', specs: 'Weatherproof, high brightness', price: '130', priceNum: 130, bestFor: 'Outdoor events & festivals', image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=600', note: 'Per sqft/day — min 24 sqft' },
  { id: 9, category: 'led-walls', name: 'LED Wall Package 6x4ft', specs: '24 sqft, ready-to-install package', price: '2,500', priceNum: 2500, bestFor: 'Small stages & backdrops', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600', note: 'Most Popular' },
  { id: 10, category: 'led-walls', name: 'LED Wall Package 10x6ft', specs: '60 sqft, stunning visual impact', price: '6,000', priceNum: 6000, bestFor: 'Weddings & corporate events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600', note: '' },
  { id: 11, category: 'led-walls', name: 'LED Wall Package 12x8ft', specs: '96 sqft, massive display', price: '9,500', priceNum: 9500, bestFor: 'Concerts, expos & large events', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600', note: '' },

  // TVs & Digital Standees
  { id: 12, category: 'tvs', name: 'LED TV 43" with Stand', specs: 'Full HD, floor stand included', price: '1,500', priceNum: 1500, bestFor: 'Reception desks & small displays', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600', note: '' },
  { id: 13, category: 'tvs', name: 'LED TV 55" with Stand', specs: '4K UHD, adjustable floor stand', price: '2,000', priceNum: 2000, bestFor: 'Presentations & welcome displays', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600', note: '' },
  { id: 14, category: 'tvs', name: 'LED TV 65" with Stand', specs: '4K UHD, premium display quality', price: '3,000', priceNum: 3000, bestFor: 'Exhibitions & showrooms', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600', note: '' },
  { id: 15, category: 'tvs', name: 'Digital Standee 43"', specs: 'Portrait display, sleek design', price: '2,500', priceNum: 2500, bestFor: 'Lobbies, retail & signage', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', note: '' },
  { id: 16, category: 'tvs', name: 'Digital Standee 55"', specs: 'Large portrait display, eye-catching', price: '3,500', priceNum: 3500, bestFor: 'Events, expos & branding', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', note: '' },

  // Sound Systems & Audio
  { id: 17, category: 'sound', name: 'PA System Small (2 speakers + mic)', specs: '2 speakers, 1 wireless mic, compact', price: '1,800', priceNum: 1800, bestFor: 'Small gatherings up to 50 pax', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600', note: '' },
  { id: 18, category: 'sound', name: 'PA System Medium (4 speakers + mixer)', specs: '4 speakers, mixer console, clear audio', price: '3,500', priceNum: 3500, bestFor: 'Events with 50-200 pax', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600', note: '' },
  { id: 19, category: 'sound', name: 'PA System Large (6+ speakers)', specs: '6+ speakers, sub-woofers, full coverage', price: '7,000', priceNum: 7000, bestFor: 'Large events 200+ pax', image: 'https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?q=80&w=600', note: '' },
  { id: 20, category: 'sound', name: 'Wireless Microphone (handheld)', specs: 'UHF wireless, clear range, reliable', price: '500', priceNum: 500, bestFor: 'Speeches, anchoring & presentations', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600', note: '' },
  { id: 21, category: 'sound', name: 'Collar/Lapel Microphone', specs: 'Clip-on wireless, hands-free', price: '700', priceNum: 700, bestFor: 'Speakers, trainers & presenters', image: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=600', note: '' },
  { id: 22, category: 'sound', name: 'DJ Sound System (full setup)', specs: 'DJ console, speakers, sub, lights', price: '8,000', priceNum: 8000, bestFor: 'Parties, sangeet & celebrations', image: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d1e?q=80&w=600', note: '' },

  // Laptops & Computers
  { id: 23, category: 'laptops', name: 'Basic Laptop (i3/i5, 8GB)', specs: 'Windows 11, 8GB RAM, SSD', price: '700', priceNum: 700, bestFor: 'Registration, data entry & browsing', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600', note: '' },
  { id: 24, category: 'laptops', name: 'Business Laptop (i5/i7, 16GB)', specs: 'i5/i7, 16GB RAM, fast SSD', price: '1,000', priceNum: 1000, bestFor: 'Presentations & business use', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=600', note: '' },
  { id: 25, category: 'laptops', name: 'Premium Laptop (MacBook Pro/Dell XPS)', specs: 'High-performance, premium build', price: '2,000', priceNum: 2000, bestFor: 'Creative work & demos', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600', note: '' },
  { id: 26, category: 'laptops', name: 'Desktop PC with Monitor', specs: 'Full desktop setup with keyboard & mouse', price: '800', priceNum: 800, bestFor: 'Kiosks, counters & offices', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=600', note: '' },
  { id: 27, category: 'laptops', name: 'Bulk Laptops (10+ units)', specs: 'Identical config, pre-setup, bulk ready', price: '500', priceNum: 500, bestFor: 'Training, exams & workshops', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600', note: 'Per unit/day' },

  // Lighting & Stage
  { id: 28, category: 'lighting', name: 'Stage Lighting Kit (basic)', specs: 'Par lights, stand, DMX controller', price: '3,000', priceNum: 3000, bestFor: 'Small stages & conferences', image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600', note: '' },
  { id: 29, category: 'lighting', name: 'Stage Lighting Kit (premium)', specs: 'Moving heads, wash lights, full rig', price: '5,000', priceNum: 5000, bestFor: 'Weddings, concerts & galas', image: 'https://images.unsplash.com/photo-1504501650895-2441b7915699?q=80&w=600', note: '' },
  { id: 30, category: 'lighting', name: 'Moving Head Lights (pair)', specs: 'Beam/spot, DMX, multiple patterns', price: '2,000', priceNum: 2000, bestFor: 'Dynamic stage effects', image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?q=80&w=600', note: '' },
  { id: 31, category: 'lighting', name: 'LED Par Lights (set of 4)', specs: 'RGBW, DMX, versatile colors', price: '1,500', priceNum: 1500, bestFor: 'Uplighting & ambiance', image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600', note: '' },
];

const categories = [
  { id: 'all', name: 'All Equipment', icon: 'inventory_2' },
  { id: 'projectors', name: 'Projectors & Screens', icon: 'videocam' },
  { id: 'led-walls', name: 'LED Walls & Displays', icon: 'tv' },
  { id: 'tvs', name: 'TVs & Digital Standees', icon: 'monitor' },
  { id: 'sound', name: 'Sound Systems & Audio', icon: 'speaker_group' },
  { id: 'laptops', name: 'Laptops & Computers', icon: 'laptop_chromebook' },
  { id: 'lighting', name: 'Lighting & Stage', icon: 'light' },
];

const faqItems = [
  {
    question: 'What AV equipment can I rent from Fineline System & Services?',
    answer: 'We offer a complete range of professional AV equipment on rent including HD & 4K projectors, projection screens, indoor & outdoor LED walls, LED TVs, digital standees, PA sound systems, wireless & lapel microphones, DJ sound systems, laptops, desktop PCs, stage lighting kits, moving head lights, and LED par lights. All equipment is professional-grade and well-maintained.',
  },
  {
    question: 'What is the minimum rental duration?',
    answer: 'Our minimum rental duration is 1 day. We also offer multi-day discounts for extended rentals. Contact us on WhatsApp for special pricing on events lasting 2 or more days.',
  },
  {
    question: 'Do the prices include delivery and setup?',
    answer: 'Yes! All our rentals include professional delivery, complete setup at your venue, and an on-site technician during your event. Delivery and setup within Rajkot city is free. Nominal transport charges apply for other cities in Gujarat.',
  },
  {
    question: 'Can I rent LED walls in custom sizes?',
    answer: 'Absolutely! While we offer popular pre-built LED wall packages (6x4ft, 10x6ft, 12x8ft), we can create custom sizes for any requirement. Indoor LED walls start at ₹100/sqft/day with a minimum of 24 sqft. Contact us with your dimensions for an exact quote.',
  },
  {
    question: 'Do you provide a technician with the equipment?',
    answer: 'Yes, every rental includes a trained on-site technician who will set up, operate, and troubleshoot the equipment throughout your event at no extra cost. For larger events, we deploy multiple technicians.',
  },
  {
    question: 'What areas do you deliver to?',
    answer: 'We serve all of Gujarat and Saurashtra from our Rajkot headquarters. Our primary service areas include Rajkot, Jamnagar, Morbi, Junagadh, Bhavnagar, Gandhidham, Ahmedabad, Surat, Vadodara, Gandhinagar, and Anand. Free delivery and setup is included for Rajkot city.',
  },
  {
    question: 'How do I book equipment?',
    answer: 'The easiest way is through WhatsApp at +91 98252 14052. Simply tell us your event type, date, city, and equipment needs. We will send you a detailed quote within 30 minutes during business hours. You can also call us directly.',
  },
  {
    question: 'Can I rent equipment in bulk for multi-day events?',
    answer: 'Yes! We offer attractive discounts for bulk and multi-day rentals. For example, bulk laptops (10+ units) are available at ₹500/unit/day. Contact us for customized bulk pricing on any equipment.',
  },
];

function getWhatsAppLink(equipmentName: string) {
  const message = encodeURIComponent(`Hi, I want to rent ${equipmentName}. Please share details.`);
  return `https://wa.me/919825214052?text=${message}`;
}

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredEquipment = equipmentData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return equipmentData.length;
    return equipmentData.filter((i) => i.category === catId).length;
  };

  const activeCategoryName = categories.find((c) => c.id === selectedCategory)?.name || 'All Equipment';

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fss-neutral-900 to-fss-neutral-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 border border-fss-primary/20 rounded-full mb-6">
              <span className="material-symbols-outlined text-fss-primary text-sm">inventory_2</span>
              <span className="text-sm font-semibold text-fss-primary">Professional AV Equipment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              AV Equipment on Rent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
                Rajkot &amp; All Gujarat
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-10">
              Projectors, LED walls, sound systems, laptops, lighting &amp; more. Professional-grade equipment with free delivery, setup &amp; technician in Rajkot.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-fss-neutral-700">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search equipment... (e.g. projector, LED wall, mic)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-fss-neutral-200 focus:outline-none focus:ring-2 focus:ring-fss-primary focus:border-transparent text-lg"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-fss-neutral-700 hover:text-fss-neutral-900 transition-colors"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                )}
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 text-white">
              {[
                { icon: 'inventory_2', text: '30+ Equipment Types' },
                { icon: 'local_shipping', text: 'Free Setup in Rajkot' },
                { icon: 'support_agent', text: 'On-site Technician' },
                { icon: 'history', text: 'Since 2001' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-fss-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white rounded-xl border border-fss-neutral-200 font-bold text-fss-neutral-900"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary">filter_list</span>
                  <span>Filter: {activeCategoryName}</span>
                </div>
                <span className={`material-symbols-outlined transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
            </div>

            {/* Sidebar - Categories */}
            <aside className={`lg:w-72 flex-shrink-0 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-2xl border border-fss-neutral-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-fss-neutral-900 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-fss-primary">category</span>
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setMobileFilterOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-fss-primary text-white shadow-lg shadow-fss-primary/20'
                          : 'bg-fss-neutral-50 hover:bg-fss-neutral-100 text-fss-neutral-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                        <span className="font-medium text-sm text-left">{cat.name}</span>
                      </div>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${
                          selectedCategory === cat.id ? 'bg-white/20' : 'bg-fss-neutral-200'
                        }`}
                      >
                        {getCategoryCount(cat.id)}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Contact in Sidebar */}
                <div className="mt-6 pt-6 border-t border-fss-neutral-200">
                  <p className="text-sm text-fss-neutral-700 mb-3">Need help choosing?</p>
                  <a
                    href="https://wa.me/919825214052?text=Hi%2C%20I%20need%20help%20choosing%20AV%20equipment%20for%20my%20event.%20Can%20you%20suggest%20the%20right%20setup%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask an Expert
                  </a>
                </div>
              </div>
            </aside>

            {/* Equipment Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="text-fss-neutral-700">
                  Showing <strong className="text-fss-neutral-900">{filteredEquipment.length}</strong> items
                  {selectedCategory !== 'all' && (
                    <span>
                      {' '}in <strong className="text-fss-primary">{activeCategoryName}</strong>
                    </span>
                  )}
                </div>
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-sm text-fss-primary hover:underline font-medium flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                    Clear filter
                  </button>
                )}
              </div>

              {filteredEquipment.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEquipment.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-2xl border border-fss-neutral-200 overflow-hidden hover:shadow-2xl hover:border-fss-primary/50 transition-all duration-300 flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-fss-neutral-100">
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                        {/* Badge */}
                        {item.note && (
                          <div className="absolute top-3 left-3">
                            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                              item.note === 'Most Popular'
                                ? 'bg-fss-primary text-white'
                                : item.note === 'Free with projector rental'
                                ? 'bg-green-500 text-white'
                                : 'bg-fss-neutral-900 text-white'
                            }`}>
                              {item.note}
                            </span>
                          </div>
                        )}
                        {/* Category tag */}
                        <div className="absolute top-3 right-3">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-fss-neutral-900 backdrop-blur-sm">
                            {categories.find((c) => c.id === item.category)?.name || ''}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-bold text-fss-neutral-900 mb-1 group-hover:text-fss-primary transition-colors text-base leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-sm text-fss-neutral-700 mb-3">{item.specs}</p>

                        {/* Best for tag */}
                        <div className="flex items-start gap-1.5 mb-4">
                          <span className="material-symbols-outlined text-fss-primary text-base mt-0.5 flex-shrink-0">
                            tips_and_updates
                          </span>
                          <span className="text-xs text-fss-neutral-700">
                            <span className="font-semibold text-fss-neutral-900">Best for:</span> {item.bestFor}
                          </span>
                        </div>

                        {/* Price & CTA */}
                        <div className="mt-auto pt-4 border-t border-fss-neutral-200">
                          <div className="flex items-end justify-between mb-3">
                            <div>
                              <div className="text-2xl font-black text-fss-primary">
                                &#8377;{item.price}
                              </div>
                              <div className="text-xs text-fss-neutral-700">per day</div>
                            </div>
                          </div>
                          <a
                            href={getWhatsAppLink(item.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Book on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl border border-fss-neutral-200">
                  <span className="material-symbols-outlined text-6xl text-fss-neutral-700 mb-4 inline-block">
                    search_off
                  </span>
                  <h3 className="text-xl font-bold text-fss-neutral-900 mb-2">No equipment found</h3>
                  <p className="text-fss-neutral-700 mb-6">
                    Try adjusting your search or filters
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-xl hover:bg-fss-primary-dark transition-colors"
                  >
                    <span className="material-symbols-outlined">refresh</span>
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fss-neutral-900 via-fss-neutral-900 to-fss-neutral-800" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-fss-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fss-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Need a Custom Package?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fss-primary via-fss-primary-light to-fss-accent">
              We Will Build It for You
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Tell us your event type, expected crowd, and venue. We will recommend the perfect equipment setup and give you the best bundled pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://wa.me/919825214052?text=Hi%2C%20I%20need%20a%20custom%20AV%20equipment%20package.%20Can%20you%20help%20me%20with%20a%20quote%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-2xl transition-all shadow-2xl hover:shadow-green-500/50 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Custom Quote on WhatsApp
            </a>
            <a
              href="tel:+919825214052"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 hover:bg-white/20 text-white text-lg font-bold rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all"
            >
              <span className="material-symbols-outlined text-2xl">call</span>
              Call +91 98252 14052
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-white">
            {[
              { icon: 'schedule', text: 'Quote in 30 mins' },
              { icon: 'local_offer', text: 'Bundle Discounts' },
              { icon: 'local_shipping', text: 'Free Setup (Rajkot)' },
              { icon: 'engineering', text: 'Technician Included' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-fss-primary text-lg">{item.icon}</span>
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fss-primary/10 rounded-full mb-4">
              <span className="material-symbols-outlined text-fss-primary text-sm">help</span>
              <span className="text-sm font-semibold text-fss-primary">Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-fss-neutral-900 mb-4">
              Equipment Rental FAQ
            </h2>
            <p className="text-lg text-fss-neutral-700">
              Common questions about renting AV equipment in Rajkot &amp; Gujarat
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-fss-neutral-50 rounded-2xl border border-fss-neutral-200 overflow-hidden hover:border-fss-primary/30 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-fss-neutral-900 text-left pr-4">{faq.question}</h3>
                  <span className="material-symbols-outlined text-fss-primary flex-shrink-0 transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-fss-neutral-700 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-fss-neutral-700 mb-4">Still have questions?</p>
            <a
              href="https://wa.me/919825214052?text=Hi%2C%20I%20have%20a%20question%20about%20AV%20equipment%20rental."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fss-primary text-white font-bold rounded-xl hover:bg-fss-primary-dark transition-colors"
            >
              <span className="material-symbols-outlined">chat</span>
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
