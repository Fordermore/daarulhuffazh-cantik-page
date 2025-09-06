import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Trophy, Users } from "lucide-react";

const Programs = () => {
  const mainPrograms = [
    {
      title: "Tahfizh Al-Qur'an 30 Juz Mutqin",
      description: "Program unggulan menghafal Al-Qur'an dengan target hafalan yang kokoh sehingga nilai Al-Qur'an tertanam dalam pribadi santri.",
      features: ["Hafalan 30 Juz", "Metode Mutqin", "Bimbingan Intensif", "Evaluasi Berkala"],
      color: "bg-islamic-green"
    },
    {
      title: "Akhlaqul Karimah dan Penguatan Karakter", 
      description: "Penerapan nilai-nilai Al-Qur'an dalam kehidupan sehari-hari sehingga santri kelak menjadi pribadi yang berakhlak Al-Qur'an.",
      features: ["Pendidikan Karakter", "Bimbingan Spiritual", "Praktek Ibadah", "Pembinaan Akhlak"],
      color: "bg-islamic-gold"
    },
    {
      title: "Military Discipline",
      description: "Pembinaan karakter santri agar menjadi pribadi yang disiplin dimana hal ini menjadi salah satu faktor utama dalam meraih kesuksesan.",
      features: ["Kedisiplinan", "Kepemimpinan", "Tanggung Jawab", "Ketahanan Mental"],
      color: "bg-blue-600"
    },
    {
      title: "English & Arabic Intensive Course",
      description: "Pemantapan bahasa asing santri sehingga memiliki persiapan untuk berkuliah di luar negeri dan juga fasih dalam pengucapan bahasa asing.",
      features: ["Bahasa Inggris", "Bahasa Arab", "Conversation", "Grammar"],
      color: "bg-purple-600"
    },
    {
      title: "Kitab Turats (Kitab Kuning)",
      description: "Belajar dengan literasi Arab, sehingga santri faham dengan bahasa Al-Qur'an, Hadits serta karya ulama juga mahir dalam penerapan hukum Fiqih.",
      features: ["Nahwu Sharaf", "Fiqih", "Hadits", "Tafsir"],
      color: "bg-green-700"
    },
    {
      title: "Fahmil Qur'an (Tadabbur Al-Qur'an)",
      description: "Belajar dan mengkaji ayat-ayat Al-Qur'an secara maudhui melalui Nahwu-Sharaf dan Balaghah, tentunya tafsir Al-Qur'an sebagai referensi utama.",
      features: ["Tadabbur", "Tafsir", "Balaghah", "Kajian Tematik"],
      color: "bg-teal-600"
    }
  ];

  const facilities = [
    "Ruang Belajar Multimedia",
    "Lemari Pakaian Pribadi", 
    "View Bukit yang Indah",
    "Kasur dan Bantar Sendiri",
    "Gazebo Tahfizh",
    "Kamar Mandi Bersih",
    "Taman Tahfizh",
    "Laundry",
    "Makan 3x Sehari",
    "Kantin Sehat",
    "Sarana Olahraga Memadai"
  ];

  return (
    <section id="program" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Program Unggulan Kami
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Terbentuknya generasi Al-Qur'an yang berkarakter, berakhlak mulia, 
            beraqidah Ahlussunnah wal Jama'ah, berprestasi dan terampil."
          </p>
        </div>

        {/* Main Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainPrograms.map((program, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-full h-2 ${program.color} rounded-t-lg mb-4`}></div>
                <CardTitle className="text-lg text-islamic-dark leading-tight">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-islamic-dark text-sm">Fokus Pembelajaran:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-islamic-dark mb-4">Fasilitas Unggulan</h3>
            <p className="text-muted-foreground">Lingkungan pendidikan yang mendukung dan kondusif</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-islamic-cream transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-islamic-green flex-shrink-0" />
                <span className="text-muted-foreground">{facility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Users className="h-8 w-8 text-islamic-green mx-auto mb-3" />
            <div className="text-2xl font-bold text-islamic-dark mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Santri Aktif</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Trophy className="h-8 w-8 text-islamic-gold mx-auto mb-3" />
            <div className="text-2xl font-bold text-islamic-dark mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Alumni Hafizh</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Star className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-islamic-dark mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-islamic-dark mb-1">A</div>
            <div className="text-sm text-muted-foreground">Akreditasi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;