import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import doubleRoomAcImg from '../assets/double-room-ac.jpg';
import suiteRoomImg from '../assets/suite-room.jpg';
import fourBeddedImg from '../assets/four-bedded-ac.jpg';
import SEO from '../components/SEO';


const RoomsPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const rooms = [
    {
      title: "Double Room A/C",
      price: "2,000",
      img: doubleRoomAcImg,
      desc: "Comfortable and very quiet thanks to their double glazing, all of the Double rooms are furnished with a double bed and a desk. With lots of natural light, they offer a pleasant, relaxing environment.",
      notes: [
        "Extra person Rs. 500 / extra",
        "GST Taxes are applicable",
        "Rates are on European plan",
        "Checkout time: 12 Noon"
      ]
    },
    {
      title: "Suite A/C",
      price: "2,700",
      img: suiteRoomImg,
      desc: "Comfort is key in the Suite rooms at the Hotel. It is where elegant design and modern conveniences come together in a tastefully and traditionally styled room. Experience a bit of history as the poster bed is an integral part of the traditional interior décor.",
      notes: [
        "Extra person Rs. 500 / extra",
        "GST Taxes are applicable",
        "Rates are on European plan",
        "Checkout time: 12 Noon"
      ]
    },
    {
      title: "4 Bedded A/C",
      price: "3,200",
      img: fourBeddedImg,
      desc: "Perfect for families or groups, the 4 Bedded room offers generous space with four comfortable beds, modern furnishings, and all the amenities needed for a relaxing and convenient stay in Kothamangalam.",
      notes: [
        "Extra person Rs. 500 / extra",
        "GST Taxes are applicable",
        "Rates are on European plan",
        "Checkout time: 12 Noon"
      ]
    }
  ];

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      <SEO 
        title="Rooms & Suites" 
        description="Explore our range of comfortable and elegantly designed rooms and suites in Kothamangalam. From double rooms to luxury suites, find your perfect stay."
      />
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32 max-w-[100rem] mx-auto text-center border-b border-[#d1cdba]/50">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Accommodations</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-12">
            Rooms & Suites.
          </h1>
          <div className="space-y-6 text-[#5b5851] text-lg font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              If you are looking for elegantly designed rooms in Kothamangalam then Hotel Maria International should be your first choice. Despite being located in the heart of the city the spacious rooms provide a tranquil setting where rest and relaxation are assured along with a safe and homely feel. Ideal for both business and leisure travellers the host of modern amenities in each room ensures guest comfort.
            </p>
            <p>
              Large comfortable beds, Satellite television and a well-appointed attached bathroom are just some of the pleasures that await you in your room. The suites are ideal for those travelling with family and requiring spacious accommodation. If you are looking for value for money, convenient and comfortable rooms in the heart of Kothamangalam then the Hotel Maria International rooms are perfect.
            </p>
            <p className="text-sm italic text-[#8a867d] pt-4">
              In addition to all the comfy amenities, we do offer a professional laundry service so that our guests are always ready for their business meetings or tours.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Room Listings */}
      <section className="py-24 relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col gap-32">
            {rooms.map((room, index) => {
              const isEven = index % 2 === 1;
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Image Block */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
                    className="w-full lg:w-[55%] relative group"
                  >
                    <div className="overflow-hidden aspect-[4/3] bg-[#e8e6df] w-full">
                      <img 
                        src={room.img} 
                        alt={room.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out origin-center grayscale-[10%]"
                      />
                    </div>
                  </motion.div>

                  {/* Text Block */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
                    className="w-full lg:w-[45%] flex flex-col justify-center"
                  >
                    <div className="mb-8">
                      <h2 className="text-4xl md:text-5xl font-serif text-[#232322] mb-4">{room.title}</h2>
                      <p className="text-2xl font-serif text-[#a88456] italic">
                        Rs. {room.price} <span className="text-xs tracking-widest text-[#8a867d] uppercase not-italic font-sans">/ Night + Tax</span>
                      </p>
                    </div>

                    <div className="w-12 h-[1px] bg-[#d1cdba] mb-8"></div>
                    
                    <p className="text-[#5b5851] text-base font-light leading-relaxed mb-10">
                      {room.desc}
                    </p>

                    <div className="bg-[#e8e6df]/50 p-6 border-l border-[#cba343] mb-12">
                      <ul className="space-y-2">
                        {room.notes.map((note, nIdx) => (
                          <li key={nIdx} className="text-xs text-[#8a867d] font-light flex items-start gap-3">
                            <span className="text-[#cba343]">•</span> {note}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact#contact-form" className="inline-flex items-center text-xs tracking-widest text-[#232322] border-b border-[#232322]/20 hover:border-[#232322] pb-1 transition-all uppercase font-medium self-start w-auto">
                      Reserve this room <ArrowRight className="w-4 h-4 ml-3" />
                    </Link>

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

export default RoomsPage;
