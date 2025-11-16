
import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white" id="hero">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter mb-6">
              Biến Landing Page thành Cỗ máy Thu hút Khách hàng Tiềm năng 24/7
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
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
              className="rounded-full border-[12px] border-white shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;