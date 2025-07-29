import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurang Vy - Autentisk Fransk Matlagning i Stockholm',
  description: 'Upplev autentisk fransk matlagning i hjärtat av Stockholm. Traditionella bistro-rätter med en modern twist. Boka bord online för en oförglömlig middagsupplevelse.',
  keywords: 'fransk restaurang stockholm, bistro, coq au vin, beef bourguignon, bouillabaisse, finmiddag, parisisk matlagning',
  openGraph: {
    title: 'Restaurang Vy - Autentisk Fransk Matlagning i Stockholm',
    description: 'Upplev autentisk fransk matlagning i hjärtat av Stockholm. Traditionella bistro-rätter med en modern twist.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://restaurangvy.se',
    siteName: 'Restaurang Vy',
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
    title: 'Restaurang Vy - Autentisk Fransk Matlagning i Stockholm',
    description: 'Upplev autentisk fransk matlagning i hjärtat av Stockholm. Traditionella bistro-rätter med en modern twist.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  alternates: {
    canonical: 'https://restaurangvy.se',
  },
};

export default function Home() {
  const featuredDishes = [
    {
      name: 'Coq au Vin',
      description: 'Klassisk fransk kyckling i rödvin med svamp och pärllök',
      price: '285 kr',
      image: '/coq-au-vin.jpg'
    },
    {
      name: 'Bouillabaisse',
      description: 'Traditionell provensalsk fiskgryta med saffran och färska örter',
      price: '320 kr',
      image: '/bouillabaisse.jpg'
    },
    {
      name: 'Beef Bourguignon',
      description: 'Långkokt nötkött i rödvin med morötter och pärllök',
      price: '295 kr',
      image: '/beef-bourguignon.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Restaurang Vy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Upplev autentisk fransk matlagning i hjärtat av Stockholm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition-colors duration-200"
            >
              Boka Bord
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Se Meny
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                En Smak av Paris i Stockholm
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                På Restaurang Vy för vi med oss de autentiska smakerna och den varma atmosfären 
                från en traditionell fransk bistro till hjärtat av Stockholm. Vår kock, 
                utbildad i de finaste parisiska köken, skapar rätter som hedrar 
                franska kulinariska traditioner samtidigt som de omfamnar lokala svenska ingredienser.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Från vår noggrant utvalda vinlista till våra handgjorda desserter 
                är varje detalj designad för att förflytta dig till de charmiga gatorna i Paris.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
              >
                Läs Mer Om Oss
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div 
                className="aspect-square rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utvalda Rätter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upptäck våra signaturfranska rätter, var och en tillagad med passion och 
              de finaste ingredienserna
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${
                      index === 0 
                        ? 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' // Coq au Vin - braised chicken with wine sauce
                        : index === 1 
                        ? 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' // Bouillabaisse - seafood stew (keeping the good one)
                        : 'https://oldcutkitchen.com/wp-content/uploads/2023/12/IMG_7156.jpg' // Beef Bourguignon - new image
                    }')`
                  }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                    <span className="text-amber-600 font-semibold">{dish.price}</span>
                  </div>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition-colors duration-200"
            >
              Se Hela Menyn
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Redo att Uppleva Fransk Matlagning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Följ med oss för en oförglömlig middagsupplevelse. Boka ditt bord idag 
            och låt oss förflytta dig till hjärtat av Paris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition-colors duration-200"
            >
              Gör en Bokning
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Kontakta Oss
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
