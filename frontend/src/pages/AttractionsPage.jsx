import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';


// Import local images
import thattekkadHero from '../assets/nearestatraction/thattekkadu-bird-sanctuary.jpg';
import munnarHero from '../assets/nearestatraction/munnar-1.jpg';
import kodanadHero from '../assets/nearestatraction/kodanad-elephant-park-1.jpg';
import thommankuthuHero from '../assets/nearestatraction/thommankuthu-falls-1.jpg';
import bhoothathankettuHero from '../assets/nearestatraction/bhoothathankettu-dam-1.jpg';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#e8e6df] group">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Attraction Detail"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
        />
      </AnimatePresence>
      
      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white scale-150' : 'bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AttractionsPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const destinations = [
    {
      slug: "thattekkad-bird-sanctuary",
      title: "Thattekkad Bird Sanctuary",
      desc: "Covering an area of barely 25 sq km, this sanctuary was the first of its kind established in Kerala under the guidance of renowned ornithologist Salim Ali. It is universally acclaimed as one of the richest bird habitats in peninsular India, comparable only to the eastern Himalayas.",
      images: [
        thattekkadHero
      ]
    },
    {
      slug: "bhoothathankettu-dam",
      title: "Bhoothathankettu Dam",
      desc: "A sprawling dam and idyllic tourist site featuring breathtaking panoramic views and serene boating opportunities. The area sits deeply rooted in ancient mythological lore surrounding the rocky natural formations along the winding Periyar river.",
      images: [
        bhoothathankettuHero
      ]
    },
    {
      slug: "munnar",
      title: "Munnar",
      desc: "An absolutely breathtaking hill station globally renowned for its sprawling, meticulously manicured tea plantations, winding scenic roads, and eternally cool climate. It is the perfect escape into misty valleys and emerald green mountains.",
      images: [
        munnarHero
      ]
    },
    {
      slug: "kodanad-elephant-park",
      title: "Kodanad Elephant Park",
      desc: "Situated gracefully on the southern banks of the Periyar river, Kodanad is one of the most reputed and historic elephant rescue and training centers in Kerala. Connect closely with nature's most magnificent and gentle giants.",
      images: [
        kodanadHero
      ]
    },
    {
      slug: "thommankuthu-water-falls",
      title: "Thommankuthu Water Falls",
      desc: "A dramatic 7-step cascading waterfall ideal for adventure trekking and exploring the dense wilderness. Experience the captivating sound of raw nature crashing through the thick green canopy.",
      images: [
        thommankuthuHero
      ]
    }
  ];

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      <SEO 
        title="Local Attractions" 
        description="Explore the beauty of Kothamangalam. Discover nearby attractions like Bhoothathankettu Dam, Munnar, and Thattekkadu Bird Sanctuary."
      />
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 max-w-[100rem] mx-auto text-center border-b border-[#d1cdba]/50">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Explore Kerala</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-8">
            Near By Attractions.
          </h1>
          <p className="text-[#5b5851] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Venture beyond the sanctuary of the hotel and immerse yourself in the natural wonders of Kothamangalam and the breathtaking surrounding districts.
          </p>
        </motion.div>
      </section>

      {/* 2. Attractions List */}
      <section className="py-24 relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <div className="space-y-32 md:space-y-48">
            {destinations.map((place, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 relative`}>
                  
                  {/* Decorative number behind */}
                  <span className={`absolute top-0 ${isEven ? 'right-0 lg:left-0' : 'left-0'} text-[15rem] leading-none text-[#d1cdba]/10 font-serif select-none pointer-events-none -translate-y-1/4 -z-10`}>
                    0{index + 1}
                  </span>

                  {/* Text Block */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
                    className="w-full lg:w-[45%]"
                  >
                    <p className="tracking-[0.2em] text-[#d1cdba] text-xs uppercase font-bold mb-4">Location 0{index + 1}</p>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#232322] mb-8 leading-tight">
                      {place.title}.
                    </h2>
                    <div className="w-12 h-[1px] bg-[#d1cdba] mb-8"></div>
                    <p className="text-[#5b5851] text-lg font-light leading-relaxed mb-8">
                      {place.desc}
                    </p>
                    <Link to={`/attractions/${place.slug}`} className="inline-flex items-center text-xs tracking-widest text-[#232322] border-b border-[#232322]/20 hover:border-[#232322] pb-1 transition-all uppercase font-medium group">
                      Read More <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  {/* Interactive Carousel Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                    className="w-full lg:w-[55%] relative"
                  >
                    <ImageCarousel images={place.images} />
                    {/* Subtle aesthetic framing border */}
                    <div className={`absolute -bottom-6 ${isEven ? '-left-6' : '-right-6'} w-full h-full border border-[#d1cdba]/50 -z-10 hidden md:block`}></div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AttractionsPage;
