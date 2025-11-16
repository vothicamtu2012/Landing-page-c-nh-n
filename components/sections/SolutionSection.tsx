
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28" id="solution">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
             <img 
                src="https://picsum.photos/seed/solution/600/400" 
                alt="Hệ thống tự động"
                className="rounded-xl shadow-2xl"
             />
          </div>
          <div>
            <span className="text-brand-orange font-semibold tracking-wider uppercase">GIẢI PHÁP DÀNH CHO BẠN</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6">
              Ngừng "Săn Đuổi", Bắt đầu "Thu Hút"
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Đã đến lúc ngừng việc săn đuổi khách hàng một cách thụ động. Khóa học này sẽ trao cho bạn công cụ và tư duy để xây dựng một hệ thống thu hút khách hàng tiềm năng chất lượng cao một cách tự động, giúp bạn tập trung vào việc quan trọng nhất: Chốt giao dịch và gia tăng doanh thu.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Xây dựng uy tín chuyên gia:</span> Tạo ra một trang giới thiệu chuyên nghiệp, đáng tin cậy.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Tối ưu chi phí quảng cáo:</span> Biến mỗi đồng chi cho marketing thành lợi nhuận.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Tự động hóa tìm kiếm khách hàng:</span> Để hệ thống làm việc cho bạn, ngay cả khi bạn ngủ.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
