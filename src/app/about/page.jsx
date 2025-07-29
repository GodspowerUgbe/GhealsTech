import Image from 'next/image';

import { Code, Smartphone, Globe, Zap, Shield,
   Heart, Target, Users, Lightbulb, Award, Handshake
 } from 'lucide-react'

import Link from 'next/link';

function OurValues() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about technology and driven by the desire to create meaningful solutions that make a difference.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration, both within our team and with our clients.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative approaches to solve complex problems and stay ahead of the curve.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Quality is at the core of our work. We ensure every project meets the highest standards of performance and reliability.",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and respect, building trust with every interaction.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide every decision we make and shape the way we work with our clients and each other
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent relative overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${value.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${value.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 text-center">
                      <span className={`group-hover:bg-gradient-to-r ${value.color} group-hover:bg-clip-text`}>
                        {value.title}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Statement */}
        <div 
          className="text-center bg-purple-200 rounded-3xl p-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Values in Action
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These values aren't just words on a page – they're the foundation of how we operate. 
              Every project we undertake, every client relationship we build, and every solution we deliver 
              is guided by these principles that define who we are as a company.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="900">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="1000">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="1100">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeDo() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, scalable web applications using modern technologies like React, Next.js, and Node.js.",
      features: ["Custom Web Apps", "E-commerce Solutions", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating intuitive mobile experiences for iOS and Android platforms with cutting-edge frameworks.",
      features: ["Native Apps", "Cross-Platform", "UI/UX Design"]
    },
    {
      icon: Globe,
      title: "Digital Solutions",
      description: "Comprehensive digital transformation services to modernize your business operations and reach.",
      features: ["Cloud Migration", "System Integration", "Digital Strategy"]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert technology consulting to help you make informed decisions and optimize your tech stack.",
      features: ["Tech Audits", "Architecture Design", "Best Practices"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhancing application speed, reliability, and user experience through advanced optimization techniques.",
      features: ["Speed Optimization", "Database Tuning", "Monitoring"]
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      description: "Ensuring your applications are secure, up-to-date, and running smoothly with ongoing support.",
      features: ["Security Audits", "Regular Updates", "24/7 Support"]
    }
  ]

  return (
    <section className="py-20 bg-gray-200 rounded">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering cutting-edge technology solutions that drive business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300 ">
                    <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[whitesmoke] p-8">
      <div className="space-y-12">
        <h1 className="text-5xl font-bold text-gray-900" data-aos="fade-up">About GhealsTech</h1>

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              GhealsTech is a modern technology company focused on transforming ideas into powerful digital
              solutions. From startups to enterprises, we partner with organizations of all sizes to build
              products that create impact. With a core team of experienced developers, designers, and product
              strategists, we craft solutions that solve real business challenges using the latest technology.
            </p>
          </div>
          <Image
            src="/img/about-us.jpg"
            alt="GhealsTech team working together"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
            data-aos="fade-up"
            data-aos-delay={ 200}
          />
        </section>

        {/* Our Mission */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/img/creativity1.jpg"
            alt="Innovation and technology concept"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto order-2 md:order-1"
            data-aos="fade-up"
          />
          <div className="order-1 md:order-2" data-aos-delay={200} data-aos='fade-up'>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to enable innovation through intelligent software. We aim to empower businesses
              and individuals with tools that simplify workflows, enhance user experiences, and foster
              digital transformation. Whether it’s building scalable web platforms or integrating AI-powered
              tools, we help our clients thrive in a rapidly changing world.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <WhatWeDo />

        {/* Our Values */}
        <OurValues />

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div data-aos='fade-up'>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              GhealsTech started as a passion project conceived by a developer who believed that technology could
              not only solve problems but create opportunities. Over the years, we’ve grown into a globally
              distributed team delivering top-tier software solutions across industries such as fintech,
              healthtech, logistics, and education.
            </p>
          </div>
          <Image
            src="/img/collab.jpg"
            alt="Founders brainstorming in a startup office"
            width={600}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
            data-aos='fade-up'
            data-aos-delay={200}
          />
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let's discuss how we can help transform your ideas into powerful digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='/contact'>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start a Project
              </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
    </main>
  );
}

