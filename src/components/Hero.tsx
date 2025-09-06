import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import mosqueHero from "@/assets/mosque-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mosqueHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-islamic-green/90 via-islamic-green/75 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            {/* Arabic Text */}
            <div className="mb-6">
              <p className="text-islamic-gold text-xl md:text-2xl font-arabic mb-2">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Pesantren
              <span className="block text-islamic-gold">Daarulhuffazhannajah</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-white/90">Bogor</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Membentuk generasi Qur'ani yang berakhlak mulia, berilmu tinggi, dan berwawasan global 
              dalam bingkai nilai-nilai Islam yang rahmatan lil alamiin.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-islamic-gold hover:bg-islamic-gold/90 text-islamic-dark font-semibold shadow-xl">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <BookOpen className="h-6 w-6 text-islamic-gold mr-2" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <p className="text-white/80">Tahun Pengalaman</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Users className="h-6 w-6 text-islamic-gold mr-2" />
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <p className="text-white/80">Santri Aktif</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <Award className="h-6 w-6 text-islamic-gold mr-2" />
                  <span className="text-2xl font-bold text-white">100+</span>
                </div>
                <p className="text-white/80">Alumni Berprestasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;