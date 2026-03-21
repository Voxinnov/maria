import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#232322] text-[#f4f0e6] pt-32 pb-16 overflow-hidden relative">
      <div className="absolute -top-10 left-0 text-[18rem] md:text-[25rem] leading-none text-[#f4f0e6]/[0.02] font-serif whitespace-nowrap pointer-events-none select-none z-0">
        MARIA
      </div>
      
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10 border-b border-[#f4f0e6]/10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          <div className="md:col-span-4 lg:col-span-5 pr-8">
            <Link to="/" className="inline-block mb-8">
              <img src="/logo.svg" alt="Hotel Maria Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-[#8a867d] font-light leading-relaxed mb-12 max-w-sm">
              Discover a sanctuary of timeless tranquility, where meticulous architectural grandeur meets unparalleled hospitality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[#f4f0e6]/20 flex items-center justify-center hover:bg-[#d1cdba] hover:border-[#d1cdba] hover:text-[#232322] transition-colors rounded-full text-[#8a867d]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#f4f0e6]/20 flex items-center justify-center hover:bg-[#d1cdba] hover:border-[#d1cdba] hover:text-[#232322] transition-colors rounded-full text-[#8a867d]">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#f4f0e6]/20 flex items-center justify-center hover:bg-[#d1cdba] hover:border-[#d1cdba] hover:text-[#232322] transition-colors rounded-full text-[#8a867d]">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-widest text-[#d1cdba] font-semibold">The Retreat</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-sm font-light text-[#8a867d] hover:text-[#f4f0e6] transition-colors">Philosophy</Link></li>
                <li><Link to="/rooms" className="text-sm font-light text-[#8a867d] hover:text-[#f4f0e6] transition-colors">Sanctuaries</Link></li>
                <li><Link to="/amenities" className="text-sm font-light text-[#8a867d] hover:text-[#f4f0e6] transition-colors">Wellness SPA</Link></li>
                <li><Link to="/gallery" className="text-sm font-light text-[#8a867d] hover:text-[#f4f0e6] transition-colors">Visual Journey</Link></li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-widest text-[#d1cdba] font-semibold">Reach Us</h4>
              <ul className="space-y-4">
                <li className="text-sm font-light text-[#8a867d] leading-relaxed pr-6">
                  Aluva-Munnar Road, Kothamangalam, Ernakulam District, Kerala 686 691
                </li>
                <li className="text-sm font-light text-[#f4f0e6] hover:text-[#d1cdba] transition-colors cursor-pointer mt-4">
                  <a href="tel:+914852822015">+91 485-2822015</a>
                </li>
                <li className="text-sm font-light text-[#f4f0e6] hover:text-[#d1cdba] transition-colors cursor-pointer">
                  <a href="tel:+919495922104">+91 9495 9221 04</a>
                </li>
                <li className="text-sm font-light text-[#f4f0e6] hover:text-[#d1cdba] transition-colors cursor-pointer">
                  <a href="mailto:hotelmariafo@gmail.com">hotelmariafo@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 lg:col-span-1 space-y-8">
              <h4 className="text-[10px] uppercase tracking-widest text-[#d1cdba] font-semibold">The Journal</h4>
              <p className="text-[#8a867d] text-sm font-light">Exclusive serenity delivered to your inbox.</p>
              <form className="relative border-b border-[#f4f0e6]/30 pb-3 flex group mt-6">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent w-full outline-none placeholder:text-[#8a867d] font-light text-sm text-[#f4f0e6]"
                />
                <button type="submit" className="text-[#f4f0e6] group-hover:text-[#d1cdba] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[#8a867d] text-[10px] tracking-widest uppercase font-medium">
          &copy; {new Date().getFullYear()} Hotel Maria. All rights reserved.
        </p>
        <div className="flex gap-8 text-[#8a867d] text-xs font-light">
          <a href="#" className="hover:text-[#fcfbf9] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#fcfbf9] transition-colors">Imprint</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
