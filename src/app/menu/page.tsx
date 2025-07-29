import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meny - Restaurang Vy | Autentisk Fransk Matlagning Stockholm',
  description: 'Upptäck vår autentiska franska meny med klassiska rätter som Coq au Vin, Beef Bourguignon och Bouillabaisse. Vegetariska och glutenfria alternativ tillgängliga.',
  keywords: 'fransk meny stockholm, coq au vin, beef bourguignon, bouillabaisse, vegetarisk fransk mat, glutenfri fransk mat',
  openGraph: {
    title: 'Meny - Restaurang Vy | Autentisk Fransk Matlagning Stockholm',
    description: 'Upptäck vår autentiska franska meny med klassiska rätter som Coq au Vin, Beef Bourguignon och Bouillabaisse. Vegetariska och glutenfria alternativ tillgängliga.',
    type: 'website',
    locale: 'sv_SE',
    url: 'https://restaurangvy.se/menu',
    siteName: 'Restaurang Vy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        width: 1200,
        height: 630,
        alt: 'Fransk meny - Restaurang Vy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meny - Restaurang Vy | Autentisk Fransk Matlagning Stockholm',
    description: 'Upptäck vår autentiska franska meny med klassiska rätter som Coq au Vin, Beef Bourguignon och Bouillabaisse. Vegetariska och glutenfria alternativ tillgängliga.',
    images: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
  },
  alternates: {
    canonical: 'https://restaurangvy.se/menu',
  },
};

export default function Menu() {
  const menuSections = [
    {
      title: 'Förrätter',
      subtitle: 'Appetizers',
      items: [
        {
          name: 'Escargots de Bourgogne',
          description: 'Burgundiska sniglar i vitlökssmör med baguette',
          price: '145 kr',
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Soupe à l\'Oignon',
          description: 'Klassisk fransk löksoppa med smält Gruyère-ost',
          price: '125 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Salade Niçoise',
          description: 'Färsk tonfisk, grönbönor, oliver och kokta ägg',
          price: '165 kr',
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Terrine de Foie Gras',
          description: 'Ankleverterrin med fikonkompott och brioche',
          price: '185 kr',
          spicy: false,
          vegetarian: false
        }
      ]
    },
    {
      title: 'Huvudrätter',
      subtitle: 'Main Courses',
      items: [
        {
          name: 'Coq au Vin',
          description: 'Kyckling i rödvin med svamp och pärllök',
          price: '285 kr',
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Beef Bourguignon',
          description: 'Långkokt nötkött i rödvin med morötter och pärllök',
          price: '295 kr',
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Bouillabaisse',
          description: 'Provensalsk fiskgryta med saffran och färska örter',
          price: '320 kr',
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Ratatouille Niçoise',
          description: 'Traditionell grönsaksgryta med aubergine, zucchini och tomater',
          price: '245 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Duck Confit',
          description: 'Konfiterad anka med krispig skinn och pommes de terre',
          price: '315 kr',
          spicy: false,
          vegetarian: false
        },
        {
          name: 'Moules Marinières',
          description: 'Musslor ångade i vitt vin, schalottenlök och örter',
          price: '275 kr',
          spicy: false,
          vegetarian: false
        }
      ]
    },
    {
      title: 'Desserter',
      subtitle: 'Sweet Endings',
      items: [
        {
          name: 'Crème Brûlée',
          description: 'Klassisk vaniljkräm med karamelliserat socker',
          price: '95 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Tarte Tatin',
          description: 'Upp och ned äppeltårta med vaniljglass',
          price: '105 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Profiteroles',
          description: 'Chouxbakelse fylld med vaniljglass och chokladsås',
          price: '115 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Mousse au Chocolat',
          description: 'Rik mörk chokladmousse med färska bär',
          price: '95 kr',
          spicy: false,
          vegetarian: true
        }
      ]
    },
    {
      title: 'Drycker',
      subtitle: 'Beverages',
      items: [
        {
          name: 'Franska Viner',
          description: 'Noggrant utvalda viner från olika franska regioner',
          price: '85-285 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Champagne',
          description: 'Premium fransk champagne per glas eller flaska',
          price: '145-895 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Café au Lait',
          description: 'Traditionell fransk kaffe med ångad mjölk',
          price: '45 kr',
          spicy: false,
          vegetarian: true
        },
        {
          name: 'Thé à la Menthe',
          description: 'Uppfriskande marockansk mintte',
          price: '35 kr',
          spicy: false,
          vegetarian: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Vår Meny
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upptäck vår autentiska franska matlagning, tillagad med passion och de finaste ingredienserna. 
            Varje rätt berättar en historia om tradition och kulinarisk excellens.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600">{section.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {item.spicy && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            Stark
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Vegetarisk
                          </span>
                        )}
                        <span className="text-amber-600 font-semibold text-lg">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Note */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Kostpreferenser
          </h3>
          <p className="text-gray-600 mb-6">
            Vi anpassar för olika kostpreferenser. Meddela vår personal om eventuella allergier 
            eller särskilda kostbehov, så hjälper vi dig att anpassa rätterna därefter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Vegetariska Alternativ Tillgängliga
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Glutenfria Alternativ
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Allergier Anpassas
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 