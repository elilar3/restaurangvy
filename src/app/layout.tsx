import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Restaurang Vy - Fransk Bistro",
    template: "%s | Restaurang Vy"
  },
  description: "Upplev autentisk fransk matlagning i en varm och inbjudande atmosfär. Traditionella bistro-rätter med en modern twist.",
  keywords: "Fransk restaurang, bistro, finmiddag, parisisk matlagning, Stockholm",
  authors: [{ name: "Restaurang Vy" }],
  creator: "Restaurang Vy",
  publisher: "Restaurang Vy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://restaurangvy.se'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://restaurangvy.se',
    siteName: 'Restaurang Vy',
    title: 'Restaurang Vy - Fransk Bistro',
    description: 'Upplev autentisk fransk matlagning i en varm och inbjudande atmosfär. Traditionella bistro-rätter med en modern twist.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        width: 1200,
        height: 630,
        alt: 'Restaurang Vy - Fransk bistro i Stockholm',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@restaurangvy',
    creator: '@restaurangvy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <script type="module" src="https://script.menju.se/MenjuMenuScript.js?id=UUUb1gA5k1xCb24iBOzl&menjuDev=true"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Restaurang Vy",
              "description": "Autentisk fransk matlagning i hjärtat av Stockholm",
              "url": "https://restaurangvy.se",
              "telephone": "+46 8 123 45 67",
              "email": "info@restaurangvy.se",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Storgatan 42",
                "addressLocality": "Stockholm",
                "postalCode": "111 22",
                "addressCountry": "SE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 59.3293,
                "longitude": 18.0686
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "11:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "23:00"
                }
              ],
              "servesCuisine": "French",
              "priceRange": "$$",
              "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "logo": "https://restaurangvy.se/favicon.svg"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
