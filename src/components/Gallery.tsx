import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const galleryImages = [
    {
      src: "/lovable-uploads/c7d68e8e-7cb8-4bf5-b2c1-8dff2afa4b75.png",
      title: "Wisuda Haflah Tasyakur",
      description: "Acara wisuda dan haflah tasyakur akhirussanah dengan para santri dan ustadz"
    },
    {
      src: "/lovable-uploads/43d56df1-60e1-439d-ba28-73bf1ff500a6.png",
      title: "Kelas Komputer Modern",
      description: "Fasilitas komputer modern dengan pemandangan alam yang indah"
    },
    {
      src: "/lovable-uploads/4f1778f4-0360-4027-8c52-1304aae97acb.png",
      title: "Foto Bersama Santri",
      description: "Kegiatan bersama santri dengan pejabat dan ustadz di ruang multimedia"
    },
    {
      src: "/lovable-uploads/58df06a2-4a7e-4d5a-916b-0c503790b3b9.png",
      title: "Latihan Olahraga Outdoor",
      description: "Kegiatan olahraga dan latihan fisik santri di lapangan terbuka"
    },
    {
      src: "/lovable-uploads/91c53441-90ba-4312-805d-1fcbe5211294.png",
      title: "Santri Berprestasi",
      description: "Para santri berprestasi dengan kopiah tradisional di acara khusus"
    },
    {
      src: "/lovable-uploads/999cf02e-bf3b-4ba9-92ec-4167ed2884ad.png",
      title: "Pelatihan Baris Berbaris",
      description: "Kegiatan pelatihan kedisiplinan baris berbaris dengan instruktur TNI"
    },
    {
      src: "/lovable-uploads/950669dd-d671-46b6-8607-119db703b5bc.png",
      title: "Ruang Media Pembelajaran",
      description: "Ruang media pembelajaran dengan teknologi audio visual modern"
    },
    {
      src: "/lovable-uploads/d0a0d11a-194b-41bb-8b52-8bcf2d678b1a.png",
      title: "Kerjasama Kelembagaan",
      description: "Pertemuan resmi dan kerjasama dengan lembaga pendidikan lainnya"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark mb-4">
            Galeri Kegiatan
          </h2>
          <div className="w-24 h-1 bg-islamic-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan dan fasilitas di Pesantren Daarulhuffazhannajah Bogor
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-[400px] md:h-[500px] object-cover cursor-pointer"
                    onClick={() => openModal(image.src)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-islamic-green' : 'bg-muted'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
                index === currentSlide ? 'ring-4 ring-islamic-green shadow-lg' : 'hover:shadow-lg'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-24 md:h-32 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={modalImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;