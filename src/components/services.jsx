import {
   ChevronDown, Code, Smartphone,
   Globe, Users, ArrowRight, Star,
   Menu, X 
  } from 'lucide-react';

export default function Services({bgCol,col,subCol,services,shadow}){

   return (
      
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {services && services.map((service, index) => (
              <div key={index} className={`group ${shadow || ''} ${bgCol || 'bg-gradient-to-br border'} from-slate-800 to-slate-900 p-8 rounded-2xl  border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10`}>
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 w-min mx-auto">
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold ${col ||'text-white'} mb-4 text-center`}>{service.title}</h3>
                 <p className={`text-center ${subCol || 'text-gray-300'} leading-relaxed`}>{service.description}</p>
              </div>
            ))}
          </div>
      
   );
}