'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "ghealstech@gmail.com",
      subDetails: "We'll respond within 24 hours",
      color: "purple",
      type:'email'
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+2349138256708",
      subDetails: "Mon-Fri from 8am to 6pm",
      color: "green",
      type:'tel'
    }
  ]

  return (
    <main className="">
      {/* Hero Section */}
      <section className="min-h-[12cm] bg-violet-500 flex flex-col justify-center text-white px-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center py-5 text-purple-100">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>


      <section className='p-6 py-16'>
                 <div className="flex flex-wrap justify-center gap-8">
              {contactInfo.map((service, index) =>{ 
                const IconComponent = service.icon
                return (
               <div key={index} className="min-h-[3cm] group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 w-full max-w-[12cm] text-center" data-aos="fade-up"
                  data-aos-delay={index * 100}>
                 <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">
                    {service.title}
                  </h3>
                  <div className="text-gray-200 font-medium text-center mb-1">
                     {
                         service.type=='address'?
                             <address>{service.details}</address>
                         : <a href={`${service.type=='tel'?'tel':'mailto'}:${service.details}`}>{service.details}</a>

                     }

                 </div>
                  <p className="text-sm text-gray-100">
                    {service.subDetails}
                  </p>
                 
               </div>
             )})}
           </div>
             </section>


     
      {/* Main Contact Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-right">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">New Project</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" data-aos="fade-left">
              {/* Office Hours */}
              <div className="bg-violet-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We're here to help bring your ideas to life. Whether you have a specific project in mind 
                  or just want to explore possibilities, we'd love to discuss how we can work together.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Custom solutions for your needs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">Transparent pricing and timelines</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How quickly do you respond?</h4>
                    <p className="text-gray-600 text-sm">We typically respond to all inquiries within 24 hours during business days.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you offer free consultations?</h4>
                    <p className="text-gray-600 text-sm">Yes! We provide free initial consultations to discuss your project and requirements.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h4>
                    <p className="text-gray-600 text-sm">Project timelines vary based on complexity, but we'll provide a detailed timeline during consultation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


