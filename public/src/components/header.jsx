'use client';

import {
   ChevronDown, Code, Smartphone,
   Globe, Users, ArrowRight, Star,
   Menu, X 
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header({}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
    return (      
        <header className={`sticky top-0 w-full z-50 transition-[background-color] duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg text-[whitesmoke]' : 'bg-transparent'} px-2 md:px-12 py-2 flex  justify-between items-center min-h-12 flex-wrap`}>
            <Link href='/' className='font-semibold text-lg'>GhealsTech</Link>
            <nav className='hidden ml-auto md:block'>
                <ul className='flex justify-between '>
                  {
                    ['Services','About','Contact','FAQ'].map((item,i)=><Link key={i} href={`/${item.toLowerCase()}`} className='p-2 hover:bg-purple-800 hover:text-white active:bg-purple-900 mx-2 '>
                        <li>{item}</li>
                      </Link>
                      )
                  }
                </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="ml-auto md:opacity-0">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${scrollY > 50 ? 'text-[whitesmoke]': 'text-[#222]'}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={25} />}
              </button>
            </div>
            

            
            
            
            {/* Mobile Menu */}
          <div className={`transition-[height] duration-400 w-[98vw] m-auto ${isMenuOpen? 'h-50' : 'h-0'} md:hidden bg-slate-800 rounded-lg mt-2 overflow-hidden`}>
              {['Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-gray-300 hover:text-white transition-colors text-center border-b text-2xl h-1/4">
                  {item}
                </a>
              ))}
            </div>
        </header>
    );
};