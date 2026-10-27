import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajarata Villa | Luxury Paddy-View Eco Sanctuary & EV Charging, Anuradhapura',
  description: 'Experience tranquil luxury at Rajarata Villa in Anuradhapura. Breathtaking emerald paddy views, authentic Sri Lankan dining, solar-powered 22kW EV car charging, and minutes to Ruwanwelisaya and Sri Maha Bodhi.',
  keywords: [
    'Rajarata Villa',
    'Anuradhapura Villa',
    'Anuradhapura Hotels',
    'EV Charging Villa Sri Lanka',
    'Luxury Villa Anuradhapura',
    'Paddy View Villa Anuradhapura',
    'Ruwanwelisaya accommodation',
    'Sri Maha Bodhi stay',
    'Eco Resort Anuradhapura'
  ],
  authors: [{ name: 'Rajarata Villa' }],
  openGraph: {
    title: 'Rajarata Villa | Paddy-View Eco Sanctuary & EV Charging, Anuradhapura',
    description: 'Tranquil luxury retreat overlooking emerald paddy fields with solar EV fast charging and proximity to Anuradhapura sacred heritage sites.',
    url: 'https://rajaratavilla.com',
    siteName: 'Rajarata Villa',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F9F8F5] text-[#3D4841] antialiased selection:bg-[#1B3B2B] selection:text-[#F9F8F5]">
        {children}
      </body>
    </html>
  );
}
