'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9c5c767?w=400&h=400&fit=crop&crop=face",
    content: "GhealsTech transformed our entire digital infrastructure. Their innovative approach and technical expertise helped us scale from a startup to a market leader.",
    rating: 5,
    project: "Cloud Migration & DevOps"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    content: "Working with GhealsTech was a game-changer. They delivered a cutting-edge mobile app that exceeded our expectations and boosted user engagement by 300%.",
    rating: 5,
    project: "Mobile App Development"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "DataVision Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "The AI solutions GhealsTech built for us revolutionized our data analytics. Their team's expertise in machine learning is truly world-class.",
    rating: 5,
    project: "AI & Machine Learning"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Operations Director",
    company: "RetailNext",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "GhealsTech's e-commerce platform increased our online sales by 250%. Their attention to UX details and performance optimization is outstanding.",
    rating: 5,
    project: "E-commerce Platform"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen bg-[#eee] overflow-hidden" data-aos="fade-up">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-200 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-gray-500 text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-[#555] mb-6 tracking-tight">
            What Our
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"> Clients </span>
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how GhealsTech has transformed businesses across industries with cutting-edge technology solutions
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-700 transform hover:scale-[1.02]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Quote Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Quote className="w-16 h-16 text-purple-400/30 absolute -top-2 -left-2" />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20 shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-700 w-[80%] mx-auto font-light leading-relaxed mb-6">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div>
                        <cite className="text-lg font-semibold text-gray-500 not-italic">
                          {testimonials[currentIndex].name}
                        </cite>
                        <p className="text-purple-500">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                      <div className="hidden sm:block w-px h-12 bg-white/20"></div>
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                        <span className="text-sm text-white/90 font-medium">
                          {testimonials[currentIndex].project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500/10 backdrop-blur-sm hover:bg-gray-400/50 20 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500/10 backdrop-blur-sm hover:bg-gray-400/50 rounded-full p-3 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-cyan-500'
                  : 'w-3 h-3 bg-gray-500/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}