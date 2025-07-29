import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurang Vy - Fransk Bistro",
  description: "Upplev autentisk fransk matlagning i en varm och inbjudande atmosfär. Traditionella bistro-rätter med en modern twist.",
  keywords: "Fransk restaurang, bistro, finmiddag, parisisk matlagning, Stockholm",
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
        <script type="module" src="https://menuscript-14000.firebaseapp.com/menuScript.js?id=UUUb1gA5k1xCb24iBOzl&menjuDev=true"></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
