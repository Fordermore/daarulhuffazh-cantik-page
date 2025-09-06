import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Trophy } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Program Tahfizh",
      description: "Program unggulan untuk menghafal Al-Qur'an 30 juz dengan metode yang terbukti efektif",
      duration: "6 Tahun",
      capacity: "50 Santri/Angkatan",
      features: [
        "Hafalan 30 Juz Al-Qur'an",
        "Pembelajaran Tajwid",
        "Tafsir Al-Qur'an",
        "Bahasa Arab & Inggris"
      ],
      icon: BookOpen,
      color: "from-islamic-green to-primary"
    },
    {
      title: "Program Reguler",
      description: "Program pendidikan menengah dengan kurikulum nasional plus pembelajaran agama intensif",
      duration: "3-6 Tahun",
      capacity: "100 Santri/Angkatan",
      features: [
        "Kurikulum Nasional",
        "Pembelajaran Agama",
        "Ekstrakurikuler",
        "Bimbingan Konseling"
      ],
      icon: Users,
      color: "from-islamic-gold to-accent"
    },
    {
      title: "Program Intensif",
      description: "Program khusus untuk santri yang ingin mendalami ilmu agama secara intensif",
      duration: "2-4 Tahun", 
      capacity: "30 Santri/Angkatan",
      features: [
        "Kajian Kitab Kuning",
        "Fiqh & Ushul Fiqh",
        "Hadits & Ulumul Hadits",
        "Sejarah Islam"
      ],
      icon: Clock,
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="program" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Program Pendidikan
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Berbagai program pendidikan yang dirancang untuk mengembangkan potensi santri 
            secara optimal dalam bidang agama dan akademik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-islamic-dark">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-islamic-green" />
                    <span className="text-muted-foreground">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-islamic-green" />
                    <span className="text-muted-foreground">{program.capacity}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-islamic-dark text-sm">Materi Unggulan:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <Trophy className="h-3 w-3 text-islamic-gold mt-1 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white mt-6">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-islamic-green to-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Siap Bergabung dengan Keluarga Besar Kami?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Daftarkan putra-putri Anda sekarang dan berikan mereka pendidikan terbaik 
            untuk masa depan yang cerah dan berkah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-islamic-gold/90 text-islamic-dark font-semibold">
              Daftar Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;