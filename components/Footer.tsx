
import React from 'react';
import { Rocket, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
                <Rocket className="w-8 h-8 text-brand-orange" />
                <span className="text-2xl font-bold tracking-tight">LP Mastery</span>
            </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LP Mastery. All rights reserved.</p>
          <p className="mt-2">Xây dựng hệ thống kinh doanh tự động của bạn ngay hôm nay.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
