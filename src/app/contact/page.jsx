'use client';

import {
   Mail,MapPin,PhoneIcon
  } from 'lucide-react';

  import Image from 'next/image';

import {useState} from 'react';

  
export default function Contact(){
    const contactInfo = [
        // {
        //     icon:<MapPin />,
        //     title:'Our Office',
        //     description:'A desc',
        //     type:'address'
        // },
        {
            icon:<Mail />,
            title:'Email Us',
            description:'ghealstech@gmail.com',
            type:'email'
        },
        {
            icon:<PhoneIcon />,
            title:'Call Us',
            description:'+2349138256708',
            type:'tel'
        },
    ];

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [brand,setBrand] = useState('');
    const [details,setDetails] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <main>
            <section className='min-h-[12cm] bg-purple-500 flex flex-col justify-center text-white px-8'>
                <h1 className="text-5xl md:text-7xl font-bold text-[#555] mb-6 tracking-tight text-center py-5 text-purple-100">
                    Let's Get Your Next
                    <span className="bg-gradient-to-r from-purple-400 via-pink-200 to-cyan-500 bg-clip-text text-transparent"> Project </span>
                    Ready
          </h1>
                <p className='text-center text-lg font-medium py-4 pb-12'>
                    Our innovative ever-ready team is here for your brand. Let's build something new and nice.
                </p>
            </section>
            
            <section className='p-6 py-16'>
                <div className="flex flex-wrap justify-center gap-8">
             {contactInfo.map((service, index) => (
              <div key={index} className="min-h-[3cm] group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 w-full max-w-[12cm]">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 w-min mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{service.title}</h3>
                <div className="text-gray-300 text-center leading-relaxed">
                    {
                        service.type=='address'?
                            <address>{service.description}</address>
                        : <a href={`${service.type=='tel'?'tel':'mailto'}:${service.description}`}>{service.description}</a>

                    }

                </div>
              </div>
            ))}
          </div>
            </section>

            <section className='flex justify-between flex-wrap gap-12 min-h-24 items-center p-4 py-12 bg-[#eee] '>
                <Image src='/img/women.jpg' width='500' height="500" alt='Happy business owners' className='w-[98%] md:w-[45%]' />

                <form method='POST' action='' className='w-full md:w-[45%] text-indigo-900 text-sm' onSubmit={handleSubmit}>
                    <div className='w-[48%] p-2 mr-[2%] inline-block rounded shadow'>
                        <label htmlFor='name' className='font-bold p-2'>Your name</label>
                        <input type='text' name='name' id='name' className='w-full border-2 border-gray-300 p-2 rounded my-2' value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='w-[48%] p-2 inline-block rounded shadow'>
                        <label htmlFor='email' className='font-bold p-2'>Email Address</label>
                        <input type='email' name='email' id='email' className='w-full border-2 border-gray-300 p-2 rounded my-2' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className='rounded my-3 shadow p-2'>
                        <label htmlFor='brand' className='font-bold p-2'>Company/Brand(optional)</label>
                        <input type='text' name='brand' id='brand' className='w-full border-2 border-gray-300 p-2 rounded my-2' value={brand} onChange={(e)=>{setBrand(e.target.value)}} />
                    </div>
                    <div className='rounded my-3 shadow p-2'>
                        <label htmlFor='details' className='font-bold p-2'>Details</label>
                        <textarea name='details' id='details' className='w-full border-2 border-gray-300 p-2 rounded my-2 min-h-[3cm]' value={details} onChange={(e)=>{setDetails(e.target.value)}} ></textarea>
                    </div>

                    <button className="block text-center text-xl p-3 bg-purple-800 text-white rounded my-8 w-full cursor-pointer">
                    Send a Message
                </button>

                </form>

            </section>
        </main>
    );
}