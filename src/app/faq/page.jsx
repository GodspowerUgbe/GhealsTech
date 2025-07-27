'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Make sure lucide-react is installed

const faqs = [
  {
    question: "What is GhealsTech?",
    answer:
      "GhealsTech is a technology company focused on building smart, scalable digital solutions for businesses using cutting-edge tools like AI, automation, and cloud platforms.",
  },
  {
    question: "What services does GhealsTech offer?",
    answer:
      "We offer custom software development, web and mobile app design, AI integration, UI/UX design, and DevOps solutions.",
  },
  {
    question: "Is GhealsTech suitable for startups?",
    answer:
      "Yes. We love working with startups and provide cost-effective MVPs, scalable infrastructure, and product consultation to bring your idea to life.",
  },
  {
    question: "Do you build mobile applications?",
    answer:
      "Yes. We build responsive and high-performance mobile apps using technologies like React Native and Expo.",
  },
  {
    question: "How does GhealsTech handle data security?",
    answer:
      "We follow industry best practices including encryption, role-based access control, and secure code reviews to protect your data and infrastructure.",
  },
  {
    question: "How can I get support or request a quote?",
    answer:
      "You can reach out to us via our Contact page or email us at support@ghealstech.com. We typically respond within 1 business day.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[whitesmoke] px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <div className="mb-2 text-gray-500 uppercase tracking-wide text-sm hidden md:block">FAQs</div>
          <h1 className="text-4xl text-center md:text-start font-bold md:text-6xl text-purple-900 leading-snug">Frequently Asked<br />Questions</h1>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">{faq.question}</h2>
                <span className="text-purple-900">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </div>
               <p className={`text-gray-700 overflow-hidden mt-2 transition-all ${openIndex !== index ? 'max-h-0' : 'max-h-60'} duration-400 ease-in`}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
