import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Phone } from 'lucide-react';
import SEO from '../components/SEO';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };

  return (
    <div className="bg-[#f4f0e6] text-[#232322] min-h-screen font-sans selection:bg-primary-500 selection:text-white pt-24 pb-12">
      <SEO 
        title="Connect With Us" 
        description="Get in touch with Hotel Maria International for bookings, inquiries, or feedback. We are here to ensure your stay in Kothamangalam is exceptional."
      />
      
      {/* 1. Page Header */}
      <section className="relative px-6 lg:px-12 py-20 max-w-[100rem] mx-auto text-center border-b border-[#d1cdba]/50">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <p className="tracking-[0.2em] text-[#8a867d] text-xs uppercase font-medium mb-6">Reach Out</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#232322] leading-tight mb-8">
            Contact Us.
          </h1>
        </motion.div>
      </section>

      {/* 2. Form & Contact Info Section */}
      <section className="py-24 relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left: Form */}
            <motion.div 
              id="contact-form"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="lg:w-[55%] scroll-mt-24"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#232322] mb-2">
                Send a message
              </h2>
              <p className="text-[#8a867d] text-sm italic mb-12">
                Pick a room that best suits your taste and budget
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-[#232322] font-semibold mb-3">Your Name</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="bg-[#e8e6df] text-[#232322] p-4 text-sm font-light outline-none border border-transparent focus:border-[#d1cdba] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-widest text-[#232322] font-semibold mb-3">Your Email</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="bg-[#e8e6df] text-[#232322] p-4 text-sm font-light outline-none border border-transparent focus:border-[#d1cdba] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#232322] font-semibold mb-3">Subject</label>
                  <input 
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="bg-[#e8e6df] text-[#232322] p-4 text-sm font-light outline-none border border-transparent focus:border-[#d1cdba] transition-colors"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-widest text-[#232322] font-semibold mb-3">Message</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} required rows="6"
                    className="bg-[#e8e6df] text-[#232322] p-4 text-sm font-light outline-none border border-transparent focus:border-[#d1cdba] transition-colors resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-[#232322] text-[#f4f0e6] px-12 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#a88456] transition-colors duration-300"
                >
                  Submit Now
                </button>
              </form>
            </motion.div>

            {/* Right: Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-[45%]"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-[#232322] mb-12 pb-6 border-b border-[#d1cdba]">
                Contact Info
              </h2>

              <ul className="space-y-10">
                
                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-[#232322] rounded-full flex items-center justify-center flex-shrink-0 text-[#f4f0e6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-2">
                    <p className="text-[#5b5851] text-sm leading-loose font-light uppercase tracking-wider">
                      Aluva-Munnar Road,<br/>
                      Kothamangalam, Ernakulam<br/>
                      District, Kerala, South India,<br/>
                      PIN-686 691
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-[#232322] rounded-full flex items-center justify-center flex-shrink-0 text-[#f4f0e6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="pt-3">
                    <a href="mailto:hotelmariafo@gmail.com" className="text-[#5b5851] text-sm leading-relaxed font-light hover:text-[#a88456] transition-colors">
                      hotelmariafo@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-[#232322] rounded-full flex items-center justify-center flex-shrink-0 text-[#f4f0e6]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="pt-3">
                    <p className="text-[#5b5851] text-sm leading-relaxed font-light">
                      Check in, Check out time : 12.00 Noon
                    </p>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-12 h-12 bg-[#232322] rounded-full flex items-center justify-center flex-shrink-0 text-[#f4f0e6]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-col space-y-2">
                      <a href="tel:+919946106931" className="text-lg font-serif italic text-[#5b5851] hover:text-[#a88456] transition-colors">+ 91 9946 1069 31</a>
                      <a href="tel:+914852822015" className="text-lg font-serif italic text-[#5b5851] hover:text-[#a88456] transition-colors">FAX + 91 485 2822015</a>
                      <a href="tel:+919495922104" className="text-lg font-serif italic text-[#5b5851] hover:text-[#a88456] transition-colors">+ 91 9495 9221 04</a>
                      <a href="tel:+914852822015" className="text-lg font-serif italic text-[#5b5851] hover:text-[#a88456] transition-colors">+ 91 485-2822015</a>
                    </div>
                  </div>
                </li>

              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Map Section */}
      <section className="w-full h-[60vh] md:h-[70vh] relative grayscale-[20%] mt-8 border-y border-[#d1cdba]/30">
        <iframe 
          title="Hotel Maria Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.437324316037!2d76.6228058!3d10.0632067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e61272a288eb%3A0x864a2dd3c8426ae8!2sHotel%20Maria%20International!5e0!3m2!1sen!2sin!4v1774525004943!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-10"
        ></iframe>
      </section>

    </div>
  );
};

export default ContactPage;
