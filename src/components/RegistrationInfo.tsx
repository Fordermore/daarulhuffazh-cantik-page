import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CreditCard, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Phone,
  Globe,
  Users
} from "lucide-react";

const RegistrationInfo = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Usia Calon Santri",
      description: "Usia calon santri baru/pindahan 10 s/d 21 tahun",
      icon: Users
    },
    {
      step: 2,
      title: "Formulir Pendaftaran",
      description: "Mengisi formulir pendaftaran yang diberikan dari administrasi Ponpes",
      icon: FileText
    },
    {
      step: 3,
      title: "Dokumen Persyaratan",
      description: "Membawa dokumen-dokumen yang diperlukan sesuai ketentuan",
      icon: CheckCircle
    }
  ];

  const requiredDocuments = [
    "PC Ijazah & SKHUN terakhir (Legalisir)",
    "PC Kartu Keluarga", 
    "PC Akta Kelahiran",
    "Visa & Paspor (Bagi pendaftar dari luar Indonesia)",
    "Surat Keterangan Sehat",
    "Asli surat keterangan pindah dari sekolah asal (Khusus santri pindahan)"
  ];

  const tuitionPlans = [
    {
      title: "Program Tahfizh",
      duration: "6 Tahun",
      features: [
        "Hafalan Al-Qur'an 30 Juz",
        "Pembelajaran Kitab Kuning",
        "Bahasa Arab & Inggris",
        "Fasilitas Lengkap",
        "Makan 3x Sehari",
        "Laundry"
      ],
      highlight: "Paling Populer"
    },
    {
      title: "Program Reguler",
      duration: "3 Tahun",
      features: [
        "Kurikulum Nasional + Agama",
        "Hafalan Juz Amma",
        "Pembelajaran Bahasa Asing", 
        "Ekstrakurikuler",
        "Fasilitas Asrama",
        "Pembinaan Karakter"
      ],
      highlight: "Terjangkau"
    },
    {
      title: "Program Intensif",
      duration: "2-4 Tahun",
      features: [
        "Fokus Kitab Kuning",
        "Tahsin & Tahfizh",
        "Bahasa Arab Intensif",
        "Kajian Mendalam",
        "Bimbingan Personal",
        "Persiapan Kuliah"
      ],
      highlight: "Eksklusif"
    }
  ];

  const admissionInfo = {
    year: "2025/2026",
    phone: "081-999-801-333",
    website: "www.daarulhuffazhannajah.ponpes.id",
    address: "Jl. Qona'ah No. 10, Perum Bukit Az-Zikra RT. 001/RW. 005, Ds. Cipambuán, Kec. Babakan Madang, Sentul City - Bogor - Jawa Barat"
  };

  return (
    <section id="pendaftaran" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Pendaftaran Santri Baru
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Penerimaan Santri Baru dan Pindahan Tahun Pendidikan {admissionInfo.year}
          </p>
          <Badge variant="secondary" className="mt-4 bg-islamic-green text-white">
            #AYO MONDOK - Online Registration
          </Badge>
        </div>

        {/* Registration Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {registrationSteps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-islamic-green to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-islamic-gold mb-2">
                  {step.step}
                </div>
                <CardTitle className="text-lg text-islamic-dark">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-islamic-dark text-center mb-8">
            Dokumen yang Diperlukan
          </h3>
          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-islamic-cream transition-colors duration-200">
                    <CheckCircle className="h-5 w-5 text-islamic-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{document}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tuition Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-islamic-dark text-center mb-8">
            Program Pendidikan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tuitionPlans.map((plan, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-islamic-gold text-white px-3 py-1 text-xs font-semibold">
                    {plan.highlight}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-islamic-dark text-center">{plan.title}</CardTitle>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-islamic-green">{plan.duration}</span>
                    <p className="text-sm text-muted-foreground">Durasi Program</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-islamic-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white">
                    Pilih Program
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-islamic-green to-primary rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Informasi Pendaftaran</h3>
            <p className="text-white/90">Hubungi kami untuk informasi lebih lanjut dan proses pendaftaran</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-3 text-islamic-gold" />
              <h4 className="font-semibold mb-2">Telepon</h4>
              <p className="text-white/90">{admissionInfo.phone}</p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-3 text-islamic-gold" />
              <h4 className="font-semibold mb-2">Website</h4>
              <p className="text-white/90">{admissionInfo.website}</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-islamic-gold" />
              <h4 className="font-semibold mb-2">Tahun Ajaran</h4>
              <p className="text-white/90">{admissionInfo.year}</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-islamic-gold hover:bg-islamic-gold/90 text-islamic-dark font-semibold mr-4">
              Daftar Online
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-islamic-green">
              Download Brosur
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationInfo;