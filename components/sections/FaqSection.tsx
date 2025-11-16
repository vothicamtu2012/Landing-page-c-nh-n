
import React from 'react';
import { FaqItem } from '../../types';
import Accordion from '../ui/Accordion';

const faqs: FaqItem[] = [
  {
    question: "Tôi không rành về kỹ thuật, có học được không?",
    answer: "Chắc chắn được! Khóa học được thiết kế dành cho người không chuyên. Mọi thao tác đều là kéo-thả, click chuột và điền thông tin. Bạn không cần biết một dòng code nào cả.",
  },
  {
    question: "Học xong tôi có làm được ngay không?",
    answer: "Có. Mục tiêu của khóa học là sau 7 buổi, bạn sẽ tự tay hoàn thiện và xuất bản được ít nhất 1 landing page chuyên nghiệp cho sản phẩm/dịch vụ của mình.",
  },
  {
    question: "Thời gian học có linh hoạt không?",
    answer: "Các buổi học diễn ra trực tiếp qua Zoom vào buổi tối để bạn tiện sắp xếp công việc. Ngoài ra, tất cả các buổi học đều được ghi hình lại, bạn có thể xem lại bất cứ lúc nào.",
  },
  {
    question: "Tôi cần chuẩn bị gì trước khi tham gia khóa học?",
    answer: "Bạn chỉ cần một chiếc máy tính có kết nối internet và một tinh thần sẵn sàng học hỏi. Mọi thứ khác, từ tài nguyên đến công cụ, chúng tôi sẽ hướng dẫn chi tiết trong khóa học.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 md:py-28" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Câu hỏi thường gặp</h2>
          <p className="text-lg text-gray-600">
            Những thắc mắc phổ biến nhất mà chúng tôi nhận được.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
            {faqs.map((faq, index) => (
                <Accordion key={index} question={faq.question}>
                    <p>{faq.answer}</p>
                </Accordion>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
