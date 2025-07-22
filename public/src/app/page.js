'use client';
// app/page.tsx
import React, { useState, useEffect } from 'react';
import {
   ChevronDown, Code, Smartphone,
   Globe, Users, ArrowRight, Star,
   Menu, X 
  } from 'lucide-react';
import Image from 'next/image';
import Hero from '../components/hero.jsx';
import styles from './page.module.css';

export default function Home() {
  

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Complete digital marketing solutions including SEO, social media management, and targeted advertising campaigns."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Comprehensive brand development and strategy services to establish your unique identity in the digital landscape."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      text: "GhealsTech transformed our vision into a stunning reality. Their expertise in web development is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      text: "The mobile app they developed increased our customer engagement by 200%. Absolutely incredible work!",
      rating: 5
    },
    {
      name: "Emma Williams",
      company: "Creative Agency",
      text: "Professional, reliable, and innovative. GhealsTech delivered beyond our expectations every single time.",
      rating: 5
    }
  ];

  return (
    <>
      <Hero />
      <main className='text-[#333]'>
               {/* Services Section */}
      <section id="services" className="py-20 bg-[#eee] mt-15 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-medium mb-6">
               Our <span className="">Services</span>
             </h2>
             <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               Comprehensive digital solutions tailored to your unique business needs
             </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-500 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#eee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-[#888] mb-6">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project and bring your vision to life with cutting-edge technology and innovative design.
          </p>
          <button className="group bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Start Your Project
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      </main>
    </>
  );
}


// export default function GhealsTechLanding() {
  
//   return (
//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="w-8 h-8 text-white/60" />
//         </div>
//       </section>


//    
//     </div>
//   );
// }



