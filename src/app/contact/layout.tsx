import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Restaurang Vy | Adress, Telefon & Öppettider Stockholm',
  description: 'Kontakta Restaurang Vy i Stockholm. Adress: Storgatan 42. Telefon: +46 8 123 45 67. Öppettider: Mån-Fre 11:00-22:00, Lör-Sön 12:00-23:00.',
  keywords: 'kontakt restaurang vy, adress stockholm, telefon, öppettider, storgatan 42, fransk restaurang stockholm',
  openGraph: {
    title: 'Kontakt - Restaurang Vy | Adress, Telefon & Öppettider Stockholm',
    description: 'Kontakta Restaurang Vy i Stockholm. Adress: Storgatan 42. Telefon: +46 8 123 45 67. Öppettider: Mån-Fre 11:00-22:00, Lör-Sön 12:00-23:00.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://restaurangvy.se/contact',
    siteName: 'Restaurang Vy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        width: 1200,
        height: 630,
        alt: 'Kontakt Restaurang Vy - Stockholm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt - Restaurang Vy | Adress, Telefon & Öppettider Stockholm',
    description: 'Kontakta Restaurang Vy i Stockholm. Adress: Storgatan 42. Telefon: +46 8 123 45 67. Öppettider: Mån-Fre 11:00-22:00, Lör-Sön 12:00-23:00.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  alternates: {
    canonical: 'https://restaurangvy.se/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 