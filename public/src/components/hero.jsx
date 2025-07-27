import Image from 'next/image';
import {
   ChevronDown, Code, Smartphone,
   Globe, Users, ArrowRight, Star,
   Menu, X 
  } from 'lucide-react';
import Link from 'next/link';

export default function Hero(){
    return (
        <section className='pt-24'>
            <div className="mb-4 md:mb-24 mx-auto w-fit px-4 py-2 bg-purple-800/20 rounded-full text-purple-900 text-sm font-medium backdrop-blur-sm">
                ✨ Digital Innovation Starts Here
            </div>
            
            <section className='px-2 md:px-12 text-center md:text-start md:flex justify-between items-center'>

          

                <section className='w-9/10 mx-auto md:mx-0 md:w-2/5 min-w-80'>
                    <h1 className='text-5xl md:text-5xl pt-12 pb-4 text-[#222]'>Revamp Your <span className="bg-gradient-to-r from-purple-900 to-pink-400 bg-clip-text text-transparent"> Digital</span> Future</h1>
                    <p className='text-gray-500 pb-12 '>Our team harness the power of technology and creativity to transform your online presence and drive business growth.</p>

                    <Link href='/contact' className="block w-fit md:mx-0 mb-12 mx-auto group bg-gradient-to-r from-purple-900 to-pink-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none">
                        <button className=' flex items-center gap-2'>
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </section>

                <Image src='/img/index.avif' width={'500'} height={"500"} alt='Happy satisfied business owner ' className='w-full md:w-1/2 max-h-120 object-cover rounded' />
                
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <ChevronDown className="w-8 h-8 text-white/60" />
               </div>


        </section>
    </section>
    );

}