import React from 'react';
import { motion } from 'framer-motion';

const AmenitiesPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const complimentary = [
    "24-hour Front desk",
    "Breakfast",
    "2 bottles of mineral water per day",
    "Newspapers in lobby & rooms",
    "Luggage storage",
    "Iron board & box",
    "Shoe cleaning facility",
    "Slippers",
    "Wake up-call service",
    "Electronic Safe deposit locker",
    "Hot Water facility",
    "Toiletries"
  ];

  const chargeable = [
    "Room service (24 hours)",
    "Travel desk",
    "Business Centre",
    "Laundry facilities",
    "Mini bar",
    "Multi Cuisine Restaurant",
    "Conference Halls",
    "Curio Shop",
    "High Speed WiFi",
    "Doctor on Call"
  ];

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 max-w-[100rem] mx-auto text-center border-b border-[#d1cdba]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Uncompromising Comfort</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-8">
            Exquisite <br/> Facilities.
          </h1>
          <p className="text-[#5b5851] text-lg font-light leading-relaxed">
            Every detail of your stay is anticipated and catered to. Experience our comprehensive array of amenities designed for absolute tranquility and convenience.
          </p>
        </motion.div>
      </section>

      {/* 2. Lists Section */}
      <section className="py-24 relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Left Column: Complimentary */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="flex-1"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-[#232322] mb-12">
                Facilities & Amenities <br/> <span className="text-[#8a867d] text-lg italic">Provided on a complimentary basis</span>
              </h2>
              
              <ul className="space-y-6">
                {complimentary.map((item, index) => (
                  <li key={index} className="flex items-center gap-6 border-b border-[#d1cdba]/50 pb-6 group">
                    <span className="text-[10px] tracking-widest text-[#d1cdba] uppercase font-bold w-6">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[#5b5851] text-base font-light group-hover:text-[#232322] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Chargeable */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 lg:mt-32"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-[#232322] mb-12">
                Bespoke Services <br/> <span className="text-[#8a867d] text-lg italic">Upon request on chargeable basis</span>
              </h2>
              
              <ul className="space-y-6">
                {chargeable.map((item, index) => (
                  <li key={index} className="flex items-center gap-6 border-b border-[#d1cdba]/50 pb-6 group">
                    <span className="text-[10px] tracking-widest text-[#d1cdba] uppercase font-bold w-6">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[#5b5851] text-base font-light group-hover:text-[#232322] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>
      </section>
      
      {/* 3. Image Highlight */}
      <section className="py-12 bg-[#f4f0e6]">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
            className="overflow-hidden bg-[#e8e6df] aspect-[21/9] w-full relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" 
              alt="Facilities Overview" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AmenitiesPage;
