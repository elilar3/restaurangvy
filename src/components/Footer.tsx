import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">VY</span>
              </div>
              <span className="text-xl font-bold">Restaurang Vy</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Upplev autentisk fransk matlagning i hjärtat av Stockholm. 
              Vår bistro för med sig värme och charm från Paris till ditt bord.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Vår Meny
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Bokningar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt & Öppettider</h3>
            <div className="space-y-2 text-gray-300">
              <p>Storgatan 42</p>
              <p>111 22 Stockholm</p>
              <p className="mt-4">+46 8 123 45 67</p>
              <p>info@restaurangvy.se</p>
              <div className="mt-4">
                <p className="font-medium">Öppettider:</p>
                <p>Mån-Fre: 11:00 - 22:00</p>
                <p>Lör-Sön: 12:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Restaurang Vy. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
} 