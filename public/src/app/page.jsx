'use client';
// app/page.tsx
import React, { useState, useEffect } from 'react';
import {
   ChevronDown, Code, Smartphone,
   Globe, Users, ArrowRight, Star,
   Menu, X 
  } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/hero.jsx';
import Services from '../components/services.jsx';
import Testimonial from '@/components/testimonial.jsx';
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
            
            <Services services={services}/>

            </div>
        </section>

      {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto ">
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Countries Served' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center group p-2 py-6 md:py-12">
              <div className="bg-purple-100 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold  mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className=" text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Testimonial />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss your project and bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <Link href='/contact'>
              <button className="group bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                Start Your Project
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
        </div>
      </section>

      </main>
    </>
  );
}





