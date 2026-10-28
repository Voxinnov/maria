import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';


// Import local images
import thattekkad1 from '../assets/nearestatraction/thattekkadu-bird-sanctuary.jpg';
import thattekkad2 from '../assets/nearestatraction/thattekkadu-bird-sanctuary-1.jpg';
import thattekkad3 from '../assets/nearestatraction/thattekkadu-bird-sanctuary-2.jpg';
import thattekkad4 from '../assets/nearestatraction/thattekkadu-bird-sanctuary-3.jpg';

import munnar1 from '../assets/nearestatraction/munnar-1.jpg';
import munnar2 from '../assets/nearestatraction/munnar-2.jpg';
import munnar3 from '../assets/nearestatraction/munnar-3.jpg';
import munnar4 from '../assets/nearestatraction/munnar-4.jpg';

import kodanad1 from '../assets/nearestatraction/kodanad-elephant-park-1.jpg';
import kodanad2 from '../assets/nearestatraction/kodanad-elephant-park-2.jpg';
import kodanad3 from '../assets/nearestatraction/kodanad-elephant-park-3.jpg';
import kodanad4 from '../assets/nearestatraction/kodanad-elephant-park-4.jpg';

import thommankuthu1 from '../assets/nearestatraction/thommankuthu-falls-1.jpg';
import thommankuthu2 from '../assets/nearestatraction/thommankuthu-falls-2.jpg';
import thommankuthu3 from '../assets/nearestatraction/thommankuthu-falls-3.jpg';
import thommankuthu4 from '../assets/nearestatraction/thommankuthu-falls-4.jpg';

import dam1 from '../assets/nearestatraction/bhoothathankettu-dam-1.jpg';
import dam2 from '../assets/nearestatraction/bhoothathankettu-dam-2.jpg';
import dam3 from '../assets/nearestatraction/bhoothathankettu-dam-3.jpg';
import dam4 from '../assets/nearestatraction/bhoothathankettu-dam-4.jpg';

const attractionData = {
  "thattekkad-bird-sanctuary": {
    title: "Thattekkad Bird Sanctuary",
    subtitle: "Ornithologist's Paradise",
    mainImage: thattekkad1,
    description: [
      "The Thattekkad Bird Sanctuary, also known as the Salim Ali Bird Sanctuary, is a hidden gem located on the northern banks of the Periyar River. Established in 1983, it was the first bird sanctuary in Kerala and remains one of the most ecologically diverse habitats in India.",
      "The sanctuary is named after the legendary 'Birdman of India', Dr. Salim Ali, who famously described Thattekkad as the 'richest bird habitat on peninsular India'. Spanning across 25 square kilometers of tropical evergreen and deciduous forests, it serves as a haven for over 300 species of birds, including rare forest birds and migratory species.",
      "Visitors can spot the elusive Frogmouth, the vibrant Malabar Trogon, and the Indian Pitta, along with various species of woodpeckers, kingfishers, and birds of prey. The sanctuary is also home to diverse flora and other wildlife, including butterflies and small mammals."
    ],
    features: ["Bird Watching", "Nature Trails", "Butterfly Park", "Interpretation Center"],
    info: {
      location: "Kothamangalam, Ernakulam",
      bestTime: "November to March",
      distance: "12 km from Hotel Maria"
    },
    gallery: [
      thattekkad2,
      thattekkad3,
      thattekkad4
    ]
  },
  "bhoothathankettu-dam": {
    title: "Bhoothathankettu Dam",
    subtitle: "Mythical River Landscapes",
    mainImage: dam1,
    description: [
      "Bhoothathankettu is more than just a dam; it's a site where nature and mythology intertwine. The name literally translates to 'Monster's Fort', stemming from a local legend that demons (Bhoothams) attempted to submerge the Trikkariyoor Temple by damming the Periyar River with massive boulders.",
      "The natural dam, formed by immense unshaped boulders, is a geological marvel. Today, it serves as a major irrigation project and a popular eco-tourism destination. The area is surrounded by lush forests and offers panoramic views of the river and the distant hills.",
      "Adventure seekers can enjoy tranquil boat rides through the calm waters or explore the nearby forest trails. The neighboring children's park and the scenic beauty make it an ideal spot for family outings and nature photography."
    ],
    features: ["Boating", "Mythological Site", "Hiking Trails", "Children's Park"],
    info: {
      location: "Near Kothamangalam",
      bestTime: "September to June",
      distance: "10 km from Hotel Maria"
    },
    gallery: [
      dam2,
      dam3,
      dam4
    ]
  },
  "munnar": {
    title: "Munnar",
    subtitle: "The Emerald Queen of Hills",
    mainImage: munnar1,
    description: [
      "Perched at an altitude of 1,600 meters, Munnar is one of the most famous hill stations in India. Once the summer resort for the British Government in South India, it is now synonymous with endless tea plantations, misty mountains, and a cool, refreshing climate that persists throughout the year.",
      "The landscape of Munnar is a tapestry of emerald green tea gardens, shimmering lakes, and cascading waterfalls. It is home to Eravikulam National Park, the habitat of the endangered Nilgiri Tahr, and Anamudi Peak, the highest point in South India.",
      "Travelers can visit the Tea Museum to learn about the history of tea processing, enjoy the echo at Echo Point, or simply drive through the winding roads that offer breathtaking vistas at every turn. Munnar is not just a destination; it's an immersive experience in the lap of the Western Ghats."
    ],
    features: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam", "Trekking"],
    info: {
      location: "Idukki District",
      bestTime: "September to May",
      distance: "80 km from Hotel Maria"
    },
    gallery: [
      munnar2,
      munnar3,
      munnar4
    ]
  },
  "kodanad-elephant-park": {
    title: "Kodanad Elephant Park",
    subtitle: "Gentle Giants of the Periyar",
    mainImage: kodanad1,
    description: [
      "Kodanad, a rural riverside village on the southern bank of the Periyar River, was historically one of the largest elephant training centers in Kerala. Today, it operates as Abhayaranyam (a rescue and rehabilitation center), providing a safe haven for stranded and injured elephants.",
      "The center offers a unique opportunity for visitors to witness the disciplined lifestyle of these magnificent animals. You can watch elephants being bathed in the river, fed by their mahouts, and trained with great care and tradition.",
      "In addition to elephants, the park also houses a mini-zoo with deer, peacocks, and various other animals, all set within a sprawling, forested area. The riverside location and the serene environment make it a peaceful retreat for nature lovers and families."
    ],
    features: ["Elephant Rehabilitation", "Mini Zoo", "Riverside Park", "Nature Education"],
    info: {
      location: "Kodanad, Ernakulam",
      bestTime: "August to May",
      distance: "25 km from Hotel Maria"
    },
    gallery: [
      kodanad2,
      kodanad3,
      kodanad4
    ]
  },
  "thommankuthu-water-falls": {
    title: "Thommankuthu Water Falls",
    subtitle: "Nature's Seven-Step Staircase",
    mainImage: thommankuthu1,
    description: [
      "Thommankuthu is a mesmerising seven-step waterfall located in the Idukki district. It's an eco-tourism destination that appeals to both casual tourists and hardcore adventure enthusiasts. The waterfall is named after Mr. Thomman, a legendary local who is said to have discovered this hidden cascade.",
      "What makes Thommankuthu unique is its structure—a series of small cascades that form deep, clear pools at each level. The surrounding forest is a trekking enthusiast's dream, with well-marked trails that lead through dense foliage, caves, and viewpoints.",
      "The area is perfect for forest bathing, picnics, and safe swimming in the designated pool areas. It offers a raw, untouched experience of the Western Ghats' wilderness, far away from the commercial hustle and bustle."
    ],
    features: ["7-Step Waterfall", "Forest Trekking", "Caving", "Natural Swimming Pools"],
    info: {
      location: "Thopprampilly, Idukki",
      bestTime: "September to January",
      distance: "45 km from Hotel Maria"
    },
    gallery: [
      thommankuthu2,
      thommankuthu3,
      thommankuthu4
    ]
  }
};

const AttractionDetailPage = () => {
  const { slug } = useParams();
  const data = attractionData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-serif mb-4">Location Not Found</h1>
        <Link to="/attractions" className="text-[#a88456] hover:underline uppercase tracking-widest text-sm">Return to Attractions</Link>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <div className="bg-[#f4f0e6] min-h-screen text-[#232322]">
      <SEO 
        title={data.title} 
        description={data.description[0].substring(0, 160)}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
          src={data.mainImage}
          alt={data.title}
          className="w-full h-full object-cover grayscale-[10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#232322]/80 via-transparent to-transparent flex flex-col justify-end p-6 lg:p-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <Link to="/attractions" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors uppercase tracking-[0.2em] text-[10px] font-bold">
              <ArrowLeft className="w-4 h-4 mr-3" /> Back to Explorations
            </Link>
            <p className="text-[#d1cdba] uppercase tracking-[0.3em] text-xs font-bold mb-4">{data.subtitle}</p>
            <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tight">{data.title}.</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Left: Detailed Text */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-8">
              {data.description.map((paragraph, idx) => (
                <p key={idx} className="text-[#5b5851] text-lg lg:text-xl font-light leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-[#232322]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
              {data.gallery.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-[4/3] overflow-hidden bg-[#e8e6df]"
                >
                  <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Info Panel */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 h-fit"
          >
            {/* Essential Info Card */}
            <div className="bg-white/40 backdrop-blur-sm p-10 lg:p-12 border border-[#d1cdba]/30">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8a867d] mb-10 pb-4 border-b border-[#d1cdba]/30">Essential Information</h3>
              
              <ul className="space-y-8">
                <li className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#232322] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#f4f0e6]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a867d] mb-1">Location</p>
                    <p className="font-serif italic text-lg">{data.info.location}</p>
                  </div>
                </li>
                <li className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#232322] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-[#f4f0e6]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a867d] mb-1">Best Time to Visit</p>
                    <p className="font-serif italic text-lg">{data.info.bestTime}</p>
                  </div>
                </li>
                <li className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#232322] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#f4f0e6]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8a867d] mb-1">Proximity</p>
                    <p className="font-serif italic text-lg">{data.info.distance}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Highlights Section */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#8a867d] mb-8">Major Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-[#e8e6df]/50 rounded-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#a88456]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#5b5851]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-8">
              <Link to="/contact#contact-form" className="block w-full text-center py-5 bg-[#232322] text-[#f4f0e6] uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#a88456] transition-colors duration-500">
                Book Your Stay with Us
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-24 border-t border-[#d1cdba]/30">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/attractions" className="group">
            <p className="text-[10px] text-[#8a867d] uppercase tracking-[0.2em] mb-2 group-hover:text-[#232322] transition-colors">Previous</p>
            <h4 className="text-2xl font-serif text-[#232322] group-hover:italic transition-all">Explorations</h4>
          </Link>
          <div className="w-px h-16 bg-[#d1cdba]/30 hidden md:block"></div>
          <Link to="/rooms" className="text-right group">
            <p className="text-[10px] text-[#8a867d] uppercase tracking-[0.2em] mb-2 group-hover:text-[#232322] transition-colors">Next</p>
            <h4 className="text-2xl font-serif text-[#232322] group-hover:italic transition-all">Our Suites</h4>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AttractionDetailPage;
