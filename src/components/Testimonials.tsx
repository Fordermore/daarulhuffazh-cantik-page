import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "DR. NAHLA AL-ASAEEDI",
      title: "Dean of the Faculty of Islamic Sciences for Expatriates, and Advisor to the Sheikh of Al-Azhar for expatriate affairs",
      quote: "Belajar di Pondok Pesantren Daarul Huffazh An-Najah bisa lanjut ke Al Azhar, Cairo-Mesir",
      image: "/lovable-uploads/50a8fe31-3e59-440f-b328-f0b90a284748.png"
    },
    {
      name: "DR. SUGIHARTO (ALM)",
      title: "Ketua Menteri BUMN (Badan Usaha Milik Negara)",
      quote: "Pondok Pesantren Daarul Huffazh An-Najah mencetak generasi unggulan bangsa Indonesia",
      image: "/lovable-uploads/50a8fe31-3e59-440f-b328-f0b90a284748.png"
    },
    {
      name: "DR. (HC.) ARY GINANJAR A.",
      title: "Pendiri ESQ Leadership Center",
      quote: "Untuk mencapai kesuksesan yang bukan hanya cerdas intelektual saja, tetapi yang terpenting adalah cerdas emosional dan cerdas spiritual, An-Najah menjawab tantangan tersebut.",
      image: "/lovable-uploads/50a8fe31-3e59-440f-b328-f0b90a284748.png"
    },
    {
      name: "TAQY MALIK",
      title: "Influencer",
      quote: "Ini adalah sebuah kesempatan bagi kita semua yang ingin menghapal, mencintai dan dekat dengan Al-Qur'an. Dengan adanya wasilah Pesantren An-Najah Insya Allah menjadi generasi Al-Qur'an yang cinta dengan Al-Qur'an.",
      image: "/lovable-uploads/50a8fe31-3e59-440f-b328-f0b90a284748.png"
    },
    {
      name: "UST. MUZAMMIL HASBALLAH",
      title: "Influencer dan Hafizh Al-Qur'an",
      quote: "Bagi orang tua yang ingin memiliki anak Ahlul Qur'an ago titipkan putra/putrinya di An-Najah, dan Insya Allah kita semua dan keluarga kita dapat bimbingan dari Allah S.W.T untuk dapat menghapal Al-Qur'an.",
      image: "/lovable-uploads/50a8fe31-3e59-440f-b328-f0b90a284748.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Why Must Daarul Huffazh An-Najah...?
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Testimoni dari para tokoh dan ulama tentang keunggulan Pesantren Daarulhuffazhannajah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-4">
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-islamic-gold" />
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-to-br from-islamic-green to-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ')[0].charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-islamic-dark">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* International Recognition */}
        <div className="mt-16 bg-gradient-to-r from-islamic-green to-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Pengakuan Internasional</h3>
          <p className="text-white/90 mb-6 max-w-3xl mx-auto">
            Pesantren kami telah mendapat pengakuan dari berbagai tokoh dan institusi ternama, 
            baik dalam maupun luar negeri, sebagai lembaga pendidikan Islam yang berkualitas tinggi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-islamic-gold mb-2">Al-Azhar</div>
              <p className="text-sm text-white/90">Kerjasama dengan Universitas Al-Azhar Cairo</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-islamic-gold mb-2">IIUM</div>
              <p className="text-sm text-white/90">Partnership dengan International Islamic University Malaysia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-islamic-gold mb-2">10+</div>
              <p className="text-sm text-white/90">Negara tujuan alumni melanjutkan studi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;