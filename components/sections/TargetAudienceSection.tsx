
import React from 'react';
import { Briefcase, Building2, ShieldCheck, ShoppingBag } from 'lucide-react';
import Card from '../ui/Card';

const audiences = [
    { icon: Building2, text: "Chuyên viên môi giới Bất động sản" },
    { icon: ShieldCheck, text: "Tư vấn viên Bảo hiểm & Tài chính" },
    { icon: ShoppingBag, text: "Người kinh doanh online muốn xây dựng thương hiệu cá nhân" },
    { icon: Briefcase, text: "Chủ doanh nghiệp nhỏ muốn tối ưu chi phí marketing" },
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 md:py-28" id="audience">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="text-brand-orange font-semibold tracking-wider uppercase">DÀNH RIÊNG CHO BẠN</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6">
                    Khóa học này dành cho ai?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Nếu bạn thuộc một trong những nhóm dưới đây và đang khao khát tạo ra sự đột phá trong kinh doanh, đây chính là khóa học bạn đang tìm kiếm.
                </p>
                 <img 
                    src="https://picsum.photos/seed/audience/600/350" 
                    alt="Đối tượng học viên"
                    className="rounded-xl shadow-lg w-full mt-8 hidden md:block"
                 />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {audiences.map((audience, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 transition-transform transform hover:scale-105">
                        <div className="bg-orange-100 p-3 rounded-full">
                            <audience.icon className="w-7 h-7 text-brand-orange" />
                        </div>
                        <span className="font-semibold text-brand-dark">{audience.text}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
