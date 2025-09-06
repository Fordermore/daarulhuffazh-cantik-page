import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Globe, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Pendidikan Berkualitas",
      description: "Kurikulum terpadu yang menggabungkan pendidikan agama dan umum dengan standar nasional dan internasional."
    },
    {
      icon: Heart,
      title: "Akhlak Mulia", 
      description: "Pembentukan karakter Islami yang kuat dengan bimbingan spiritual dan moral yang komprehensif."
    },
    {
      icon: Globe,
      title: "Wawasan Global",
      description: "Mempersiapkan santri menghadapi tantangan global dengan tetap berpegang pada nilai-nilai Islam."
    },
    {
      icon: Star,
      title: "Prestasi Gemilang",
      description: "Tradisi keunggulan akademik dan non-akademik yang telah terbukti menghasilkan alumni berprestasi."
    }
  ];

  return (
    <section id="tentang-kami" className="py-20 bg-islamic-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Tentang Pesantren Daarulhuffazhannajah
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sejak didirikan, Pesantren Daarulhuffazhannajah Bogor telah menjadi mercusuar pendidikan Islam 
            yang menghasilkan generasi unggul dalam ilmu agama dan umum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-islamic-dark mb-6">Visi & Misi Kami</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-islamic-green mb-3">Visi</h4>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi Qur'ani 
                yang berakhlak mulia, berilmu tinggi, dan mampu berkontribusi untuk kemaslahatan umat.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-islamic-green mb-3">Misi</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-islamic-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menyelenggarakan pendidikan Al-Qur'an dan tahfizh yang berkualitas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-islamic-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mengintegrasikan pendidikan agama dan umum secara seimbang
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-islamic-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membentuk karakter santri yang berakhlak karimah
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-islamic-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mempersiapkan santri untuk melanjutkan ke jenjang pendidikan tinggi
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-islamic-green to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">د</span>
              </div>
              <h4 className="text-xl font-bold text-islamic-dark">Keunggulan Kami</h4>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-islamic-gold rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Fasilitas modern dan lengkap</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-islamic-gold rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Tenaga pengajar berkualitas</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-islamic-gold rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Program tahfizh intensif</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 bg-islamic-gold rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground">Ekstrakurikuler yang beragam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-islamic-green to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-islamic-dark mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;