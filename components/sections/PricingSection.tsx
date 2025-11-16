
import React from 'react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const bonuses = [
    "7 buổi học Zoom trực tiếp cùng chuyên gia",
    "Video record toàn bộ các buổi học để xem lại trọn đời",
    "Bộ 20+ template landing page cao cấp, đa ngành nghề",
    "Tham gia cộng đồng hỗ trợ VIP vĩnh viễn",
    "Checklist tối ưu landing page chuẩn SEO",
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Mức đầu tư cho thành công của bạn</h2>
          <p className="text-lg text-gray-600">
            Một lần đầu tư duy nhất để sở hữu một kỹ năng tạo ra tiền bạc bền vững.
          </p>
        </div>
        <Card className="max-w-3xl mx-auto bg-brand-light !p-8 md:!p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Trọn gói khóa học LP Mastery</h3>
                    <p className="text-gray-600 mb-6">Tất cả những gì bạn cần để tự động hóa kinh doanh.</p>
                    <div className="text-5xl font-extrabold text-brand-blue mb-2">
                        1.999.000đ
                    </div>
                    <p className="text-gray-500 line-through">Giá gốc: 4.000.000đ</p>
                    <div className="my-8 text-center md:text-left">
                        <Button className="w-full md:w-auto">Đăng Ký Ngay (Ưu đãi có hạn)</Button>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-brand-dark mb-4">Bạn sẽ nhận được:</h4>
                    <ul className="space-y-3">
                        {bonuses.map((bonus, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0 bg-green-100 rounded-full p-1" />
                                <span>{bonus}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 p-4 bg-yellow-100 border border-yellow-200 rounded-lg">
                <p><span className="font-bold">Ưu đãi đặc biệt:</span> Mức giá này chỉ dành cho <span className="font-bold text-red-500">20 học viên</span> đăng ký đầu tiên trong tháng này!</p>
            </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
