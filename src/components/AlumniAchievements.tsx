import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, University, Star, MapPin } from "lucide-react";

const AlumniAchievements = () => {
  const universities = [
    { name: "Jamiah Al-Azhar", location: "Cairo, Mesir", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "Darius University", location: "Turki", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "UIN Bandung", location: "Bandung", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "IIQ Jakarta", location: "Jakarta", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "UNISSULA", location: "Semarang", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "UHAMKA", location: "Jakarta", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "PTIQ", location: "Jakarta", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "TRISAKTI", location: "Jakarta", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" },
    { name: "British University", location: "Mesir", logo: "/lovable-uploads/afe524dd-05cb-45bb-bc07-011806f20c4c.png" }
  ];

  const featuredAlumni = [
    {
      name: "Zahra Maujudatishol Ihah",
      university: "IIQ, Tangerang Selatan",
      achievement: "Lulusan Terbaik Fakultas Usuluddin"
    },
    {
      name: "Liza Azizah", 
      university: "Jamiah Al-Azhar, Cairo - Mesir",
      achievement: "Beasiswa Penuh Al-Azhar"
    },
    {
      name: "Adinda Augelya Salsyahna",
      university: "Univ. Al-Ahgaf, Yaman (Universitas Islamiyyah)",
      achievement: "Program Tahfizh Internasional"
    },
    {
      name: "Sabrina Fitraa",
      university: "Jamiah Al-Azhar, Cairo - Mesir", 
      achievement: "Fakultas Syariah"
    },
    {
      name: "Ilyas Firmansyah",
      university: "UIN Bandung (Perbandingan Mazhab dan Hukum)",
      achievement: "Magna Cum Laude"
    },
    {
      name: "Febi Fakhirizal Mukhtar",
      university: "UJM Madinah (Usuluddin)",
      achievement: "Beasiswa Pemerintah Saudi"
    }
  ];

  const achievementStats = [
    { number: "95%", label: "Alumni Melanjutkan Kuliah", icon: GraduationCap },
    { number: "50+", label: "Universitas Partner", icon: University },
    { number: "30+", label: "Alumni Berprestasi", icon: Star },
    { number: "10+", label: "Negara Tujuan", icon: MapPin }
  ];

  return (
    <section className="py-20 bg-islamic-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Prestasi Alumni
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Alhamdulillah telah diterima di berbagai universitas ternama dalam dan luar negeri
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievementStats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-islamic-green to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-islamic-dark mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* University Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-islamic-dark text-center mb-8">
            Universitas Tujuan Alumni
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {universities.map((university, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-islamic-green rounded-full flex items-center justify-center mx-auto mb-3">
                    <University className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-islamic-dark text-sm mb-1">{university.name}</h4>
                  <p className="text-xs text-muted-foreground">{university.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Alumni */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-islamic-dark text-center mb-8">
            Alumni Berprestasi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-islamic-gold to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-islamic-dark mb-2">{alumni.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{alumni.university}</p>
                    <Badge variant="secondary" className="text-xs">
                      {alumni.achievement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-islamic-green to-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Raih Prestasi Seperti Alumni Kami!
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Bergabunglah dengan keluarga besar Pesantren Daarulhuffazhannajah dan wujudkan 
            cita-cita pendidikan tinggi impian Anda di universitas terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-islamic-gold/90 text-islamic-dark font-semibold">
              Daftar Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              Konsultasi Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniAchievements;