import Link from 'next/link';

export default function Footer(){
    return (
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                GhealsTech
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transforming businesses through innovative digital solutions. We're your partner in creating extraordinary digital experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href='/services'>Web Development</Link></li>
                <li><Link href='/services'>Mobile Apps</Link></li>
                <li><Link href='/services'>Digital Marketing</Link></li>
                <li><Link href='/services'>Brand Strategy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href='mailto:ghealstech@gmail.com'>hello@ghealstech.com</Link></li>
                <li><Link href='tel:+2349138256708'>+234 (0) 913 825 6708</Link></li>
                <li>Calabar, CrossRiver, Nigeria</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GhealsTech. All rights reserved</p>
          </div>
        </div>
      </footer>  
    );
};