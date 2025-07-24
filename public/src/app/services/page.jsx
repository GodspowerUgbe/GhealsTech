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
            img: '/img/hero.avif',
            title: 'Research',
            description:'becjdchdhdfc  jchchfd jhcd fvh fdjhjhjhjdfhfd'
        },
        {
            img: '/img/hero.avif',
            title: 'Planning',
            description:'becjdchdhdfc  jchchfd jhcd fvh fdjhjhjhjdfhfd'
        },
        {
            img: '/img/hero.avif',
            title: 'Design & Development',
            description:'becjdchdhdfc  jchchfd jhcd fvh fdjhjhjhjdfhfd'
        },
        {
            img: '/img/hero.avif',
            title: 'Execution & Optimize ',
            description:'becjdchdhdfc  jchchfd jhcd fvh fdjhjhjhjdfhfd'
        }
    ]

    return (
        <main>
            <section className='text-center md:text-left w-[80%] px-2 py-12  min-h-24 md:min-h-28 md:flex items-center justify-between max-w-[20cm] mx-auto'>
                <h1 className='text-violet-900 text-[2cm] py-8  md:py-0 md:w-[40%] font-bold leading-[1]'>Our Services</h1>
                <div className='md:w-[40%]'>
                    <h2 className='text-xl '>Reliable Services that Yield  Digital Solutions</h2>
                    <p className='w-[70%] mx-auto md:mx-0 text-sm py-2 md:pt-1 '>loremkjhgfcdxrtyfhgvbn nnhvgtfcgbv nhygtfyggutfrdgfcb nhjgtfgcbv hgfgc bnvghfgdfxvbnvgcfv bnvgcf</p>
                </div>
            </section>

            <section className='min-h-54 bg-violet-500 pb-12 md:pb-0 md:mb-12'>
                <h2 className='text-center pt-6 py-4 text-xl text-white'>Explore our services</h2>
                <p></p>
                <div className='min-h-54 w-[80%] mx-auto md:relative top-20 '>
                    <Service services={services} bgCol='bg-[whitesmoke]' col='text' shadow='md:shadow' subCol={'text-gray-600'}/>
                </div>
            </section>

            <section className='pt-24 '>
                <h2 className='text-center text-xl py-1'>How We Work</h2>
                <p className='text-center text-gray-600 pb-8'>jbscdbc ddbs j jds hsd jhd djh jhdmsjhdmjhdsjhd jdhdj</p>
                <section className='flex flex-wrap p-12 items-center justify-center gap-8'>
                    {
                        works.map((work, index) =>
                            <div key={index} className='flex items-center'>
                                <section className='w-full lg:w-40 max-w-[12cm] mx-auto md:mx-0'>
                                    <Image alt='our work pattern' width='500' height='500' className='w-full rounded-lg' src={work.img} />
                                    <span className='w-8 h-8 grid lg:hidden bg-purple-900 rounded-full mx-auto my-2 text-white place-content-center text-sm'>{index+1}</span>
                                    <h3 className='text-center py-1 font-medium text-lg lg:h-20 grid place-content-center' >{work.title}</h3>
                                    <p className='text-center pb-8 lg:pb-0'>{work.description}</p>
                                </section>

                                {
                                    (index+1 < works.length) && <ArrowRight className="hidden w-6 h-6 mx-8 text-purple-900 group-hover:translate-x-1 transition-transform lg:block" />
                                }
                            </div>
                        )
                    }
                </section>

                <section className='md:flex gap-10 bg-[#eee] items-center justify-center p-12 md:py-16 md:px:12'>
                    <Image alt='our work pattern' width='500' height='500' className='w-full md:w-[40%] rounded-lg mb-8 md:mb-0' src={'/img/women.jpg'} />
                    <section>
                         <h2 className='text-center mdtext-start text-xl py-2 font-medium '>Let's Build Something Unique</h2>  
                         <p className='text-sm text-center md:text-start pb-8 w-80 mx-auto md:mx-0 md:w-60'>jhfbjhvbfhvbfhjf dvhfbhfbvfdhdbjhfdj fdhbfdjffdhbfjf fdhjffhffdfd.</p>
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