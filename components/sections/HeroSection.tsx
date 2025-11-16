
import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white" id="hero">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Biến Landing Page thành Cỗ máy Thu hút Khách hàng Tiềm năng 24/7
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Khóa học Zoom trực tiếp 7 buổi giúp các nhà bán hàng, môi giới BĐS, tư vấn bảo hiểm... tự tay xây dựng trang landing page chuyên nghiệp, tối ưu hóa chi phí quảng cáo và X2 hiệu quả kinh doanh.
            </p>
            <Button asLink href="#pricing">
              Giữ một suất ngay
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://picsum.photos/seed/instructor-main/500/500" 
              alt="Chân dung chuyên gia" 
              className="rounded-full border-8 border-white/20 shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
