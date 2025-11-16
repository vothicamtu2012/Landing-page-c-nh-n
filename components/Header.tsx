
import React from 'react';
import { Rocket } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-brand-orange" />
          <span className="text-2xl font-bold text-brand-blue tracking-tight">LP Mastery</span>
        </div>
        <a 
          href="#pricing"
          className="hidden md:inline-block bg-brand-orange text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
        >
          Đăng Ký Ngay
        </a>
      </div>
    </header>
  );
};

export default Header;
