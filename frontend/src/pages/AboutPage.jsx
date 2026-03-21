import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const attractions = [
    {
      title: "Bhoothathankettu Dam",
      img: "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=800",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
    },
    {
      title: "Thattekkad Bird Sanctuary",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      desc: "Covering an area of barely 25 sq km, this was the first bird sanctuary established in Kerala under the guidance of Salim Ali."
    },
    {
      title: "Munnar",
      img: "https://images.unsplash.com/photo-1542314831-c6a4d27ce6a2?auto=format&fit=crop&q=80&w=800",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
    },
    {
      title: "Kodanad Elephant Park",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
    }
  ];

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 max-w-[100rem] mx-auto text-center border-b border-[#d1cdba]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Our Legacy</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-8">
            The Spirit of <br/> Kothamangalam.
          </h1>
          <p className="text-[#5b5851] text-lg font-light leading-relaxed">
             Hotel Maria International is a premium property of the EVM Group. It is located in the heart of Kerala’s lush landscapes, offering a sanctuary of unparalleled tranquility.
          </p>
        </motion.div>
      </section>

      {/* 2. History & Heritage Segment */}
      <section className="py-32 relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Immersive Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
              className="lg:w-1/2 overflow-hidden bg-[#e8e6df] aspect-[4/5] w-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=1200" 
                alt="Hotel Maria Architecture" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </motion.div>

            {/* Narrative Content */}
            <div className="lg:w-1/2 lg:sticky lg:top-40 pt-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#232322] leading-tight mb-6">
                Founded in 1935.
              </h2>
              <div className="w-12 h-[1px] bg-[#d1cdba] mb-8"></div>
              
              <div className="space-y-6 text-[#5b5851] text-base font-light leading-relaxed">
                <p>
                  Established by Mr. E.V Mathai as a small enterprise, the EVM Group has meticulously transformed into one of Kerala’s leading conglomerates. Under the stewardship of six directors, the sons of the founder, the EVM group has expanded its horizons into emerging business areas, prominently the hospitality sector.
                </p>
                <p>
                  Hotel Maria International at Kothamangalam is the crown jewel of our hospitality ventures. Our sister properties include the renowned Isola-Di-Cocco Beach Resort at Poovar, Hotel Hill View at Munnar, and Mountain Club Resorts at Chinnakanal.
                </p>
                
                <h3 className="text-xl font-serif text-[#232322] pt-8">The EVM Conglomerate</h3>
                <ul className="space-y-3 pt-2 text-[#8a867d]">
                  <li className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d1cdba]"></span>
                    Cultivation, Selling and Export of Hill products (Cardamom, Cashew, Lemon grass oil).
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d1cdba]"></span>
                    Supply of Natural Rubber to major Indian tyre manufacturers.
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d1cdba]"></span>
                    More than 20 prestigious Movie houses spread across Kerala.
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d1cdba]"></span>
                    Distribution for TATA Tea & Coffee, Reliance, Volkswagen, and Nissan.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Near by Attractions Segment */}
      <section className="py-32 bg-[#232322] text-[#f4f0e6]">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#f4f0e6]">
              Near By Attractions
            </h2>
            <div className="w-12 h-[1px] bg-[#d1cdba] mt-8 opacity-40"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-[4/3] bg-[#343432] mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                </div>
                <h3 className="text-xl font-serif mb-3 text-[#f4f0e6] group-hover:text-[#d1cdba] transition-colors">{item.title}</h3>
                <p className="text-sm font-light text-[#8a867d] leading-relaxed mb-4 line-clamp-3">
                  {item.desc}
                </p>
                <span className="inline-flex items-center text-[10px] tracking-widest text-[#d1cdba] uppercase font-bold group-hover:text-[#f4f0e6] transition-colors">
                  Explore <ArrowRight className="w-3 h-3 ml-2" />
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
