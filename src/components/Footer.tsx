import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Beranda",
    "Tentang Kami", 
    "Program Pendidikan",
    "Fasilitas",
    "Berita & Blog",
    "Galeri",
    "Kontak"
  ];

  const programs = [
    "Program Tahfizh",
    "Program Reguler",
    "Program Intensif",
    "Ekstrakurikuler",
    "Bimbingan Konseling"
  ];

  return (
    <footer className="bg-islamic-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-islamic-green to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">د</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Pesantren</h3>
                <p className="text-sm text-islamic-gold">Daarulhuffazhannajah</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Lembaga pendidikan Islam yang membentuk generasi Qur'ani berakhlak mulia, 
              berilmu tinggi, dan berwawasan global.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-green transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-islamic-gold">Menu Utama</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/80 hover:text-islamic-gold transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-islamic-gold">Program Kami</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href="#program"
                    className="text-white/80 hover:text-islamic-gold transition-colors duration-200 text-sm"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-islamic-gold">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-islamic-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    Jl. Raya Bogor No. 123<br />
                    Kota Bogor, Jawa Barat 16111
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-islamic-green flex-shrink-0" />
                <p className="text-white/80 text-sm">+62 251 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-islamic-green flex-shrink-0" />
                <p className="text-white/80 text-sm">info@daarulhuffazhannajahbogor.ponpes.id</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h5 className="font-semibold text-islamic-gold mb-2">Jam Operasional</h5>
              <p className="text-white/80 text-sm">
                Senin - Jumat: 08:00 - 16:00 WIB<br />
                Sabtu: 08:00 - 12:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Pesantren Daarulhuffazhannajah Bogor. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-islamic-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-islamic-gold transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-islamic-gold transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;