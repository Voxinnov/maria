import React from 'react';
import { motion } from 'framer-motion';
import restaurantImg from '../assets/restaurant.jpg';
import SEO from '../components/SEO';


const RestaurantPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const diningOptions = [
    {
      title: "Main Restaurant",
      desc: "Multi-Cuisine restaurant offering a diverse selection of Indian, Continental, and Chinese delicacies."
    },
    {
      title: "Coffee Shop",
      desc: "An exclusive, round-the-clock Coffee Shop for your late-night cravings or early morning brew."
    },
    {
      title: "Board Room",
      desc: "An intimate and exclusive space designed for private gatherings or meetings of about 25 pax."
    },
    {
      title: "Banquet Facilities",
      desc: "Our expansive Roof Top multipurpose A/C Hall, boasting a seating capacity of up to 300 pax."
    },
    {
      title: "Lemon Grass",
      desc: "Our signature multi-cuisine family restaurant. With a cozy capacity of 52 pax, it invites you to travel through an international à la carte menu set within a chic ambience."
    },
    {
      title: "Service Hours",
      desc: "We proudly serve Breakfast, Lunch, and Dinner across our dining venues."
    }
  ];

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      <SEO 
        title="Fine Dining" 
        description="Savor exquisite local and international cuisines at our Michelin-selected restaurant. Experience the best dining in Kothamangalam."
      />
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 max-w-[100rem] mx-auto text-center border-b border-[#d1cdba]/50">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Culinary Excellence</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-8">
            Our Restaurant.
          </h1>
          <p className="text-[#5b5851] text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Embark on a gastronomic journey curated by master chefs. From intimate coffee respites to grand banquet celebrations, our dining spaces are crafted for unforgettable moments.
          </p>
        </motion.div>
      </section>

      {/* 2. Content Section */}
      <section className="py-24 relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left: Menu / Facilities List */}
            <div className="w-full lg:w-1/2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                <div className="space-y-12">
                  {diningOptions.map((item, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeUp}
                      className="border-b border-[#d1cdba]/50 pb-8 last:border-0 group"
                    >
                      <h3 className="text-2xl md:text-3xl font-serif text-[#232322] mb-4 group-hover:text-[#a88456] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#5b5851] text-base font-light leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Immersive Visual */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-40 mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
                className="overflow-hidden aspect-[4/5] bg-[#e8e6df] w-full"
              >
                <img 
                  src={restaurantImg} 
                  alt="Hotel Maria Restaurant" 
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-[2s] ease-out"
                />
              </motion.div>
              {/* Image Caption */}
              <p className="mt-6 text-xs tracking-widest text-[#8a867d] uppercase text-right">A curated dining atmosphere</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default RestaurantPage;
