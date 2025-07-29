import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boka Bord - Restaurang Vy | Online Bokning Stockholm',
  description: 'Boka bord online på Restaurang Vy i Stockholm. Enkel och snabb bokning för middag, lunch eller särskilda tillfällen. Privata middagsrum tillgängliga.',
  keywords: 'boka bord restaurang vy, online bokning stockholm, fransk restaurang bokning, privata middagsrum, särskilda tillfällen',
  openGraph: {
    title: 'Boka Bord - Restaurang Vy | Online Bokning Stockholm',
    description: 'Boka bord online på Restaurang Vy i Stockholm. Enkel och snabb bokning för middag, lunch eller särskilda tillfällen. Privata middagsrum tillgängliga.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://restaurangvy.se/reservations',
    siteName: 'Restaurang Vy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        width: 1200,
        height: 630,
        alt: 'Boka bord - Restaurang Vy Stockholm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boka Bord - Restaurang Vy | Online Bokning Stockholm',
    description: 'Boka bord online på Restaurang Vy i Stockholm. Enkel och snabb bokning för middag, lunch eller särskilda tillfällen. Privata middagsrum tillgängliga.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  alternates: {
    canonical: 'https://restaurangvy.se/reservations',
  },
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 