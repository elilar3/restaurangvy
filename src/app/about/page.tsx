import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om Oss - Restaurang Vy | Vår Historia & Kock Pierre Dubois',
  description: 'Läs om Restaurang Vys historia från Paris till Stockholm. Träffa vår kock Pierre Dubois och upptäck vår filosofi för autentisk fransk matlagning.',
  keywords: 'om restaurang vy, kock pierre dubois, fransk restaurang historia, le cordon bleu, michelin kock stockholm',
  openGraph: {
    title: 'Om Oss - Restaurang Vy | Vår Historia & Kock Pierre Dubois',
    description: 'Läs om Restaurang Vys historia från Paris till Stockholm. Träffa vår kock Pierre Dubois och upptäck vår filosofi för autentisk fransk matlagning.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://restaurangvy.se/about',
    siteName: 'Restaurang Vy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
        width: 1200,
        height: 630,
        alt: 'Kock Pierre Dubois - Restaurang Vy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om Oss - Restaurang Vy | Vår Historia & Kock Pierre Dubois',
    description: 'Läs om Restaurang Vys historia från Paris till Stockholm. Träffa vår kock Pierre Dubois och upptäck vår filosofi för autentisk fransk matlagning.',
    images: ['https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'],
  },
  alternates: {
    canonical: 'https://restaurangvy.se/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Vår Historia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En resa från gatorna i Paris till hjärtat av Stockholm, 
            som för med sig autentisk fransk matlagning till Sverige.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                En Dröm Född i Paris
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Restaurang Vy föddes ur en enkel dröm: att förmedla de autentiska 
                smakerna och den varma atmosfären från en traditionell fransk bistro till Stockholm. 
                Vår grundare, Kock Pierre Dubois, tillbringade över 15 år med att bemästra sitt hantverk 
                i några av Paris mest prestigefyllda kök.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Efter att ha förälskat sig i Stockholm under ett kulinariskt utbytesprogram 
                bestämde sig Pierre för att skapa en bit av Paris i hjärtat av Sverige. 
                År 2018 öppnade Restaurang Vy sina dörrar och kombinerade traditionella franska 
                tekniker med de finaste svenska ingredienserna.
              </p>
              <p className="text-lg text-gray-600">
                Idag fortsätter vi att hedra traditionerna inom fransk matlagning samtidigt som 
                vi omfamnar den lokala kulturen och säsongsbetonade ingredienserna som gör 
                svensk matlagning så speciell.
              </p>
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

      {/* Chef Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Träffa Vår Kock
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kock Pierre Dubois för med sig över två decennier av kulinarisk expertis 
              och en passion för autentisk fransk matlagning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div 
                className="aspect-square rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
                }}
              ></div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Kock Pierre Dubois
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Född och uppvuxen i Lyon, Frankrike, upptäckte Kock Pierre sin passion 
                för matlagning i tidig ålder och lärde sig traditionella tekniker från 
                sin mormor i hennes kök.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Efter examen från det prestigefyllda Le Cordon Bleu i Paris 
                arbetade Pierre på Michelin-stjärnade restauranger över hela Frankrike, 
                inklusive L'Astrance och Le Chateaubriand, innan han flyttade till Stockholm.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Hans filosofi är enkel: respekt för tradition, engagemang för kvalitet, 
                och en djup kärlek till att skapa minnesvärda middagsupplevelser som 
                förflyttar gäster till hjärtat av Frankrike.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Le Cordon Bleu-examen
                </span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  20+ Års Erfarenhet
                </span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Michelin-bakgrund
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vår Filosofi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi tror på kraften i autentisk matlagning för att föra människor samman 
              och skapa bestående minnen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Varje rätt tillagas med kärlek och uppmärksamhet på detaljer, 
                som hedrar traditionerna inom fransk matlagning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kvalitet</h3>
              <p className="text-gray-600">
                Vi använder endast de finaste ingredienserna och arbetar med lokala 
                producenter och säsongsbetonade produkter.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gemenskap</h3>
              <p className="text-gray-600">
                Vi skapar en varm, välkomnande atmosfär där varje gäst 
                känner sig som familj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Erkännande & Utmärkelser
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vårt engagemang för excellens har erkänts av det kulinariska samhället.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4.8</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Google Betyg</h3>
              <p className="text-gray-600">Baserat på 500+ recensioner</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2023</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bästa Franska Restaurang</h3>
              <p className="text-gray-600">Stockholm Food Awards</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">5</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">År av Excellens</h3>
              <p className="text-gray-600">Sedan 2018</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1000+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nöjda Gäster</h3>
              <p className="text-gray-600">Serverade månadsvis</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 