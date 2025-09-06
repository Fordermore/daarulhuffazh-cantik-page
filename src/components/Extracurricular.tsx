import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gamepad2, 
  Palette, 
  Mic,
  Users,
  BookOpen,
  Camera,
  Globe,
  Zap
} from "lucide-react";

const Extracurricular = () => {
  const categories = [
    {
      title: "SPORT",
      icon: Gamepad2,
      activities: ["Futsal", "Badminton", "Tenis Meja", "Berkuda", "Panahan"],
      color: "bg-red-500",
      image: "/lovable-uploads/8deb5ee8-f4ef-43d7-820f-94176435bc0b.png"
    },
    {
      title: "ISLAMIC ART", 
      icon: Palette,
      activities: ["Hadroh", "Gambus", "Qori Mujawwad", "Shalawat Acapella"],
      color: "bg-green-600",
      image: "/lovable-uploads/8deb5ee8-f4ef-43d7-820f-94176435bc0b.png"
    },
    {
      title: "SKILL",
      icon: Zap,
      activities: ["English Group", "Arabic Group", "Science Group"],
      color: "bg-blue-600",
      image: "/lovable-uploads/8deb5ee8-f4ef-43d7-820f-94176435bc0b.png"
    },
    {
      title: "MULTIMEDIA",
      icon: Camera,
      activities: ["Desain Grafis", "Editing", "Photography", "Podcast", "Website"],
      color: "bg-purple-600",
      image: "/lovable-uploads/8deb5ee8-f4ef-43d7-820f-94176435bc0b.png"
    }
  ];

  const specialPrograms = [
    {
      title: "Kemasyarakatan",
      description: "Para Santri dibina untuk peduli terhadap lingkungan sekitar dan memiliki skill yang dibutuhkan dalam bermasyarakat, sehingga santri menjadi sosok yang hidup dan tidak menjadi orang asing dalam masyarakatnya sendiri.",
      icon: Users
    },
    {
      title: "Public Speaking",
      description: "Para santri dilatih agar dapat lancar berbicara di depan umum baik untuk pidato, presentasi, ceramah, khutbah, maupun bersosialisasi.",
      icon: Mic
    },
    {
      title: "Rihlah",
      description: "Kegiatan ini dilakukan saat masa liburan santri, baik berupa tafakkur alam, field trip dan studi banding program kepesantrean baik dalam maupun luar negeri.",
      icon: Globe
    },
    {
      title: "Interpreurship",
      description: "Menumbuhkan jiwa kewirausahaan para santri dengan mengajak mereka turut andil dalam acara kewirausahaan di sekitar lingkungan pesantren.",
      icon: Zap
    },
    {
      title: "IT Training",
      description: "Pelatihan IT untuk para santri difokuskan pada pembentukan skill para santri sesuai perkembangan zamannya, seperti mendesain microsoft, desain grafis, videomaker, dll.",
      icon: Camera
    },
    {
      title: "Exam Preparation",
      description: "Wadah para santri untuk mendapatkan bimbingan extra agar dapat lulus ujian jenjang pendidikan yang lebih tinggi dengan nilai yang diharapkan.",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Ekstrakurikuler & Pengembangan Diri
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Yuk bergabung bersama kami di Pondok Pesantren Daarul Huffazh An-Najah
          </p>
        </div>

        {/* Extracurricular Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-islamic-dark">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  {category.activities.map((activity, actIndex) => (
                    <Badge key={actIndex} variant="outline" className="text-xs mr-1 mb-1">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-islamic-dark text-center mb-12">General Program</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-islamic-green rounded-full flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-islamic-dark">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Highlight */}
        <div className="bg-gradient-to-r from-islamic-green to-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Mengapa Memilih Pesantren Kami?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Kurikulum Terpadu</h4>
              <p className="text-sm text-white/90">Kombinasi pendidikan agama dan umum yang seimbang</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Pembinaan Karakter</h4>
              <p className="text-sm text-white/90">Fokus pada pembentukan akhlak mulia dan disiplin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Wawasan Global</h4>
              <p className="text-sm text-white/90">Persiapan untuk melanjutkan ke perguruan tinggi terbaik</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;