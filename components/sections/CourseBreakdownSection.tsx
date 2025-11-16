
import React from 'react';
import { BrainCircuit, Palette, PenTool, MousePointerClick, TrendingUp, Search, Rocket } from 'lucide-react';
import { CourseModule } from '../../types';
import Card from '../ui/Card';


const modules: CourseModule[] = [
  {
    icon: BrainCircuit,
    title: 'Buổi 1: Tư duy nền tảng & Chọn giao diện',
    description: 'Hiểu đúng về tâm lý khách hàng và lựa chọn mẫu landing page có tỷ lệ chuyển đổi cao nhất.',
  },
  {
    icon: Palette,
    title: 'Buổi 2: Xây dựng nhận diện thương hiệu',
    description: 'Xác định màu sắc, font chữ và hình ảnh chuyên nghiệp để tạo dấu ấn cá nhân.',
  },
  {
    icon: PenTool,
    title: 'Buổi 3 & 4: Viết nội dung thôi miên',
    description: 'Học các công thức viết tiêu đề, lời kêu gọi hành động (CTA) và nội dung chạm đúng insight khách hàng.',
  },
  {
    icon: MousePointerClick,
    title: 'Buổi 5: Thiết kế Form đăng ký tối ưu',
    description: 'Tạo form đơn giản nhưng hiệu quả để tối đa hóa số lượng khách hàng tiềm năng đăng ký.',
  },
  {
    icon: TrendingUp,
    title: 'Buổi 6: Tích hợp công cụ đo lường',
    description: 'Cài đặt Google Analytics, Facebook Pixel để theo dõi hiệu quả và tối ưu quảng cáo.',
  },
  {
    icon: Search,
    title: 'Buổi 7: Tối ưu SEO và Xuất bản',
    description: 'Đưa landing page của bạn lên top Google và chính thức vận hành cỗ máy thu hút khách hàng.',
  },
];


const CourseBreakdownSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 md:py-28" id="course">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Lộ trình 7 buổi học thực chiến</h2>
          <p className="text-lg text-gray-600">
            Một chương trình đào tạo cầm tay chỉ việc, được thiết kế để bạn có thể áp dụng ngay lập tức.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, index) => (
            <Card key={index}>
                <div className="bg-brand-blue text-white w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <mod.icon className="w-8 h-8"/>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{mod.title}</h3>
                <p className="text-gray-600">{mod.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBreakdownSection;
