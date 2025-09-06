import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Raya Bogor No. 123, Kota Bogor, Jawa Barat 16111",
      action: "Buka Maps"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 251 123-4567",
      action: "Hubungi"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@daarulhuffazhannajahbogor.ponpes.id",
      action: "Kirim Email"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 16:00 WIB",
      action: null
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-islamic-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami siap membantu Anda dengan informasi lebih lanjut tentang pendaftaran 
            dan program pendidikan di pesantren kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-dark mb-8">Informasi Kontak</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-islamic-green to-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-islamic-dark mb-2">{info.title}</h4>
                        <p className="text-muted-foreground mb-3">{info.content}</p>
                        {info.action && (
                          <Button variant="outline" size="sm" className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                            {info.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-dark mb-8">Kirim Pesan</h3>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-islamic-dark mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-islamic-dark mb-2">
                        No. Telepon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent transition-colors"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-islamic-dark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent transition-colors"
                      placeholder="Masukkan email Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-islamic-dark mb-2">
                      Subjek
                    </label>
                    <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent transition-colors">
                      <option value="">Pilih subjek</option>
                      <option value="pendaftaran">Informasi Pendaftaran</option>
                      <option value="biaya">Informasi Biaya</option>
                      <option value="program">Program Pendidikan</option>
                      <option value="fasilitas">Fasilitas</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-islamic-dark mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-islamic-green focus:border-transparent transition-colors resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white font-semibold py-3">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-islamic-dark mb-6">Kontak Cepat</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            <Button variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
              <Phone className="mr-2 h-5 w-5" />
              Telepon Langsung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;