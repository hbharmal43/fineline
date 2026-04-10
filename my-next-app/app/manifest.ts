import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fineline System & Services - AV Equipment Rental Rajkot & Gujarat',
    short_name: 'Fineline AV',
    description: 'Professional AV equipment rental in Rajkot & Gujarat. Projectors, LED screens, sound systems, laptops on rent with delivery, setup & technician. Since 2001.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#D4AF37',
    icons: [
      {
        src: '/fss-logo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  };
}
