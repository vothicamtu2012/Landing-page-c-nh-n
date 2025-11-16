
import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Testimonial } from '../../types';
import Card from '../ui/Card';

const testimonials: Testimonial[] = [
  {
    quote: "Khóa học cực kỳ thực tế. Trước đây tôi rất sợ kỹ thuật nhưng giờ đã tự tin tạo landing page cho riêng mình. Cảm ơn thầy Alex rất nhiều!",
    name: "Chị Lan Anh",
    title: "Môi giới BĐS, Vinhomes",
    avatarUrl: "https://picsum.photos/seed/person1/100/100",
  },
  {
    quote: "Kiến thức được hệ thống rất bài bản, dễ hiểu. Điều tôi tâm đắc nhất là tư duy về xây dựng phễu khách hàng chứ không chỉ là công cụ. Highly recommend!",
    name: "Anh Minh Đức",
    title: "Tư vấn viên Bảo hiểm, Manulife",
    avatarUrl: "https://picsum.photos/seed/person2/100/100",
  },
  {
    quote: "Từ ngày có landing page chuyên nghiệp, tỷ lệ khách hàng hẹn gặp của tôi tăng gấp 3 lần. Một khoản đầu tư quá xứng đáng.",
    name: "Anh Hoàng Nam",
    title: "Kinh doanh online",
    avatarUrl: "https://picsum.photos/seed/person3/100/100",
  },
];

const Rating: React.FC = () => (
    <div className="flex text-yellow-400 mb-4">
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
        <Star fill="currentColor" />
    </div>
);

const SocialProofSection: React.FC = () => {
  return (
    <section className="bg-brand-blue py-20 md:py-28" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Học viên nói gì về khóa học?</h2>
          <p className="text-lg text-gray-300">
            Đừng chỉ nghe chúng tôi nói. Hãy xem những người đi trước đã đạt được kết quả gì.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex-grow">
                <Rating />
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-bold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
