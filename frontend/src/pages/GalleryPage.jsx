import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [selectedMedia, setSelectedMedia] = useState(null); // null or { type: 'image'|'video', src: string }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const images = [
    { src: "https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?auto=format&fit=crop&q=80&w=1200", span: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto", alt: "Grand Entrance" },
    { src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=800", span: "col-span-1 aspect-[4/3]", alt: "Suite Interior" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800", span: "col-span-1 aspect-[4/3]", alt: "Spa Details" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 aspect-[21/9]", alt: "Poolside" },
    { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800", span: "col-span-1 aspect-square", alt: "Restaurant Dinner" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800", span: "col-span-1 aspect-square", alt: "Chef Detail" },
    { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", span: "md:col-span-2 aspect-[16/9]", alt: "Banquet Hall" },
  ];

  const videos = [
    { id: "M7lc1UVf-VE", thumb: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800", title: "A Walkthrough Of Hotel Maria" },
    { id: "J87MWuEUgGk", thumb: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", title: "A Day At The Sanctuary Spa" },
    { id: "y2e-S3yN3GQ", thumb: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", title: "Dining Experiences" },
  ];

  const closeLightbox = () => setSelectedMedia(null);

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 max-w-[100rem] mx-auto text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Visual Journey</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-8">
            The Gallery.
          </h1>
          
          <div className="flex justify-center gap-6 mt-12 border-b border-[#d1cdba] pb-4 max-w-sm mx-auto">
            <button 
              onClick={() => setActiveTab('images')}
              className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 pb-4 mb-[-17px] ${activeTab === 'images' ? 'text-[#232322] border-b-2 border-[#232322]' : 'text-[#8a867d] hover:text-[#5b5851]'}`}
            >
              Images
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 pb-4 mb-[-17px] ${activeTab === 'videos' ? 'text-[#232322] border-b-2 border-[#232322]' : 'text-[#8a867d] hover:text-[#5b5851]'}`}
            >
              Videos
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="py-12 relative min-h-[60vh]">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            
            {activeTab === 'images' && (
              <motion.div 
                key="images"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
              >
                {images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`relative overflow-hidden group cursor-pointer bg-[#e8e6df] ${img.span}`}
                    onClick={() => setSelectedMedia({ type: 'image', src: img.src })}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div 
                key="videos"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {videos.map((vid, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div 
                      className="relative overflow-hidden aspect-video bg-[#e8e6df] group cursor-pointer flex items-center justify-center"
                      onClick={() => setSelectedMedia({ type: 'video', src: `https://www.youtube.com/embed/${vid.id}?autoplay=1` })}
                    >
                      <img 
                        src={vid.thumb} 
                        alt={vid.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-100"
                      />
                      <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#f4f0e6] transition-colors duration-500">
                        <Play className="w-6 h-6 text-[#f4f0e6] group-hover:text-[#232322] ml-1 transition-colors" />
                      </div>
                    </div>
                    <h3 className="text-lg font-serif text-[#232322] text-center">{vid.title}</h3>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* 3. Lightbox Overlay */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#111111]/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12 cursor-pointer"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-8 right-8 lg:top-12 lg:right-12 text-[#f4f0e6]/50 hover:text-[#f4f0e6] transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            >
              <X className="w-10 h-10" />
            </button>

            <div className="w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center relative" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt="Enlarged gallery view" 
                  className="max-w-full max-h-full object-contain pointer-events-none drop-shadow-2xl"
                />
              ) : (
                <iframe 
                  src={selectedMedia.src} 
                  title="Video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full max-w-5xl aspect-video rounded-sm shadow-2xl"
                ></iframe>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;
