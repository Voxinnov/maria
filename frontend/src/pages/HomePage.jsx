import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

const HomePage = () => {
  const horizontalRef = useRef(null);

  // Smooth scroll configuration
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });
  
  // Fade in animation configuration
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white">
      
      {/* 1. Cinematic Split-Screen Hero */}
      <section className="relative h-screen flex flex-col lg:flex-row">
        {/* Left: Text Content */}
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-8 lg:px-20 pt-24 lg:pt-0 relative z-10 bg-[#f4f0e6]">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="space-y-6"
          >
            <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium">Resort & Spa</p>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif leading-[0.9] text-[#232322]">
              Hotel <br /> Maria.
            </h1>
            <p className="max-w-md text-[#5b5851] text-lg font-light leading-relaxed pt-6">
              A serene escape blending nature’s raw beauty with uncompromising architectural elegance. Find your center in our secluded sanctuaries.
            </p>
            <div className="pt-10 flex items-center gap-8">
              <Link to="/booking" className="inline-block bg-[#232322] text-[#f4f0e6] px-10 py-4 text-xs font-semibold tracking-widest hover:bg-primary-600 transition-colors">
                RESERVE
              </Link>
              <button className="flex items-center gap-3 text-xs tracking-widest font-medium group hover:text-primary-600 transition-colors">
                <span className="w-10 h-10 rounded-full border border-[#d1cdba] flex items-center justify-center group-hover:border-primary-600 transition-colors">
                  <Play className="w-3 h-3 ml-1" />
                </span>
                THE FILM
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Immersive Media Carousel */}
        <div className="w-full lg:w-[55%] h-[60vh] lg:h-full relative overflow-hidden mt-8 lg:mt-0">
          <HeroCarousel scaleTransform={useTransform(smoothProgress, [0, 0.2], [1, 1.1])} />
        </div>
      </section>

      {/* 2. Cinematic Accordion Image Gallery */}
      <section className="py-32 bg-[#f4f0e6] relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div>
              <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-4">Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-serif text-[#232322] leading-tight max-w-xl">
                A Curated Perspective.
              </h2>
            </div>
            <p className="text-[#5b5851] text-sm font-light leading-relaxed max-w-md md:text-right">
              Every stone, fabric, and shadow is a deliberate choice. We believe luxury is found in meticulous curation.
            </p>
          </motion.div>

          <HoverAccordionGallery />

        </div>
      </section>

      {/* 3. Our Restaurant Section */}
      <RestaurantSection />

      {/* 4. Elegant Text Focused Final Section */}
      <section className="py-40 bg-[#232322] text-[#f4f0e6] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600"
            alt="Dining detail"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto mb-12 shadow-2xl z-10 relative"
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <p className="text-xl md:text-3xl font-serif leading-relaxed font-light mb-12">
              "The essence of Hotel Maria is not just in its walls, but in the seamless harmony between its minimalist architecture and unbridled natural surroundings. It is a slow, methodical return to peace."
            </p>
            <Link to="/about" className="inline-flex items-center text-xs tracking-[0.2em] border-b border-[#f4f0e6]/30 pb-2 hover:border-[#f4f0e6] transition-colors">
              READ OUR STORY <ArrowRight className="w-4 h-4 ml-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

// Hero Carousel Component
const HeroCarousel = ({ scaleTransform }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2000"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div style={{ scale: scaleTransform }} className="w-full h-full transform origin-bottom relative bg-[#e8e6df]">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Hero Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Optional: Slide indicators */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Our Restaurant Section
const RestaurantSection = () => {
  return (
    <section className="py-32 bg-[#f4f0e6]">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Left */}
          <div className="lg:w-1/2">
            <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-4">Culinary Excellence</p>
            <h2 className="text-4xl md:text-6xl font-serif text-[#232322] leading-tight mb-8">
              Our <br/> Restaurant.
            </h2>
            <div className="w-12 h-[1px] bg-[#d1cdba] mb-8"></div>
            <p className="text-[#5b5851] text-lg font-light leading-relaxed mb-8">
              Honoring the purity of local ingredients, our Michelin-selected chefs weave international techniques with indigenous flavors. Dining at Hotel Maria is an intimate, cinematic journey—from the first light of breakfast overlooking the valley, to exquisite multi-course dinners under the stars.
            </p>
            <Link to="/dining" className="inline-flex items-center text-xs tracking-widest text-[#232322] border-b border-[#232322]/20 hover:border-[#232322] pb-1 transition-all uppercase font-medium">
              View Menus <ArrowRight className="w-4 h-4 ml-3" />
            </Link>
          </div>

          {/* Image Right Area With Offset Collage */}
          <div className="lg:w-1/2 w-full relative">
            {/* Main large image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
              className="overflow-hidden aspect-[4/5] bg-[#e8e6df] w-full max-w-md ml-auto relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" 
                alt="Restaurant Dining" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out origin-center"
              />
            </motion.div>
            
            {/* Small hovering offset image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute -bottom-16 left-0 lg:left-12 w-48 lg:w-64 aspect-[3/4] border-8 border-[#f4f0e6] hidden md:block overflow-hidden bg-[#e8e6df]"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800" 
                alt="Chef details"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const HoverAccordionGallery = () => {
  const [active, setActive] = useState(0);

  const gallery = [
    {
      title: "The Grand Foyer",
      img: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=1200",
      desc: "An entrance designed to leave a profound, lasting impression of architectural purity."
    },
    {
      title: "Thermal Spa",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
      desc: "Submerge yourself in therapies rooted in ancient restorative traditions."
    },
    {
      title: "Lobby Lounge",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      desc: "A sanctuary to converse, read, and exist in effortless tranquility."
    },
    {
      title: "Fine Dining",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      desc: "Culinary expeditions crafted by Michelin-selected chefs in a cinematic setting."
    }
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-[60vh] md:h-[70vh] gap-4 cursor-pointer">
      {gallery.map((item, idx) => {
        const isActive = active === idx;
        return (
          <motion.div 
            key={idx}
            onMouseEnter={() => setActive(idx)}
            className={`relative overflow-hidden transition-all duration-[800ms] ease-[0.16,1,0.3,1] ${isActive ? 'flex-[4] md:flex-[5]' : 'flex-1'} h-full bg-[#e8e6df]`}
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className={`w-full h-full object-cover transition-transform duration-[2s] ease-out origin-center ${isActive ? 'scale-100' : 'scale-110'}`}
            />
            {/* Dark overlay for contrast */}
            <div className={`absolute inset-0 bg-black/30 transition-opacity duration-700 ${isActive ? 'opacity-40' : 'opacity-10'}`}></div>
            
            {/* Text Content overlay */}
            <div className={`absolute inset-0 flex flex-col justify-end p-8 text-[#fcfbf9] transition-all duration-[800ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#d1cdba]">0{idx + 1}</span>
                <div className="w-8 h-[1px] bg-[#d1cdba]"></div>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif mb-4 flex-shrink-0 whitespace-nowrap">{item.title}</h3>
              <p className="text-sm font-light text-[#fcfbf9]/80 max-w-sm line-clamp-3">
                {item.desc}
              </p>
            </div>
            
            {/* Vertical text when inactive */}
            <div className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-500 delay-100 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-[#fcfbf9] font-serif text-xl md:-rotate-90 whitespace-nowrap md:mb-12 drop-shadow-md">
                {item.title}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HomePage;
