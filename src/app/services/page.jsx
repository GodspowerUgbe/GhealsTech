import Service from "@/components/services";
import {
   ChevronDown, Code, Smartphone,
   Globe, Users, ArrowRight, Star,
   Menu, X 
  } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function Services() {

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

    const works = [
        {
            img: '/img/research.jpg',
            title: 'Research',
            description:'We begin by immersing ourselves in thorough research about your business, understanding your goals, challenges, and target audience.'
        },
        {
            img: '/img/planning.jpg',
            title: 'Planning',
            description:"We develop a tailored strategy that outlines the scope, timeline, and resources required for success. It ensures we're aligned with your objectives."
        },
        {
            img: '/img/dev.jpg',
            title: 'Design & Development',
            description:'Our creative team brings your vision to life through innovative design and development.We craft user-centric solutions that are both visually appealing and functionally robust.'
        },
        {
            img: '/img/optim.jpg',
            title: 'Execution & Optimize ',
            description:'The execution and optimize phase involves rigorous testing and iterative refinement,continuous monitoring and optimization of the product to ensure it meets your expectations.'
        }
    ]

    return (
        <main>
            <section className='text-center lg:text-left w-[80%] px-2 py-12  min-h-24 lg:min-h-28 lg:flex items-center justify-between max-w-[24cm] mx-auto' data-aos="fade-up"
                  >
                <h1 className='hidden bg-gradient-to-r from-purple-900 to-pink-400 bg-clip-text text-transparent text-[2cm] py-8  lg:block lg:py-0 lg:w-[40%] font-bold leading-[1]'>Our Services</h1>
                <div className='lg:w-[50%]'>
                    <h2 className='leading-[1.3] text-5xl bg-gradient-to-r from-purple-900 to-pink-400 bg-clip-text text-transparent lg:text-purple-900 pt-8 lg:text-3xl lg:pt-0 '>Reliable Services that Yield  Digital Solutions</h2>
                    <p className='text-start mx-auto lg:mx-0 text-xl py-8 leading-[2] lg:text-lg'>At GhealsTech, we empower businesses to thrive in the digital age. Our expert team delivers tailored tech solutions that drive growth,efficiency, and innovation. From AI-powered automation to custom software development,we help you stay ahead of the curve.</p>
                </div>
            </section>

            <section className='min-h-54 bg-violet-500 pb-12 md:pb-0 md:mb-12'>
                <h2 className='text-center pt-6 py-4 text-white text-2xl'>Explore our services</h2>
                <p></p>
                <div className='min-h-54 w-[80%] mx-auto md:relative top-20 '>
                    <Service services={services} bgCol='bg-[whitesmoke]' col='text' shadow='md:shadow' subCol={'text-gray-600'}/>
                </div>
            </section>

            <section className='pt-24 '>
                <h2 className='text-center text-2xl py-1'>How We Work</h2>
                <p className='text-center text-gray-600 pb-8 text-lg'>Our proven problem-solving approach that yields productivity.</p>
                <section className='flex flex-wrap py-12 items-start justify-center gap-8'>
                    {
                        works.map((work, index) =>
                            <div key={index} className='flex items-center' data-aos="fade-up"
                  data-aos-delay={index * 100}>
                                <section className='w-full  max-w-[12cm] lg:max-w-[8cm] mx-auto md:mx-0'>
                                    <Image alt='our work pattern' width='500' height='500' className='w-full rounded-lg' src={work.img} />
                                    <span className='w-8 h-8 grid lg:hidden bg-purple-900 rounded-full mx-auto my-2 text-white place-content-center text-sm'>{index+1}</span>
                                    <h3 className='text-center py-1 font-medium text-xl lg:h-20 grid place-content-center' >{work.title}</h3>
                                    <p className='pb-8 lg:pb-0 text-lg'>{work.description}</p>
                                </section>

                                {
                                    (index+1 < works.length) && <ArrowRight className="hidden w-6 h-6 mx-8 text-purple-900 group-hover:translate-x-1 transition-transform lg:block" />
                                }
                            </div>
                        )
                    }
                </section>

                <section className='md:flex gap-10 bg-[#eee] items-center justify-center p-12 md:py-16 md:px:12' data-aos="fade-up">
                    <Image alt='our work pattern' width='500' height='500' className='w-full md:w-[40%] rounded-lg mb-8 md:mb-0' src={'/img/women.jpg'} />
                    <section>
                         <h2 className='text-center md:text-start text-2xl py-4 font-medium '>Let's Build Something Unique</h2>  
                         <p className='text-lg text-center md:text-start pb-8 w-80 mx-auto md:mx-0 md:w-90'>Collaborate with our experts to create tailored solutions that meets your needs.Together, we will craft a customized approach that exceeds your expectations.</p>
                         <Link href='/contact' className=''>
                            <button className="group bg-purple-900  px-10 py-4 rounded font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-purple-100 mx-auto md:mx-0">
                                        Let's Collaborate
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                      </button>
                        </Link>
                    </section>
                </section>
            </section>
        </main>
    );
}