import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import graduationCeremony from "@/assets/graduation-ceremony.jpg";
import computerClass from "@/assets/computer-class.jpg";
import studySession from "@/assets/study-session.jpg";
import sportsActivity from "@/assets/sports-activity.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const galleryImages = [
    {
      src: graduationCeremony,
      title: "Wisuda Santri",
      description: "Momen bahagia wisuda santri yang telah menyelesaikan pendidikan"
    },
    {
      src: computerClass,
      title: "Kelas Komputer",
      description: "Fasilitas komputer modern untuk pembelajaran teknologi"
    },
    {
      src: studySession,
      title: "Kajian Al-Qur'an",
      description: "Sesi kajian dan pembelajaran Al-Qur'an bersama ustadz"
    },
    {
      src: sportsActivity,
      title: "Kegiatan Olahraga", 
      description: "Aktivitas olahraga untuk menjaga kesehatan jasmani santri"
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