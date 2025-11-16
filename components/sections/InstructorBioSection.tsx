
import React from 'react';

const InstructorBioSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white" id="instructor">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <img 
              src="https://picsum.photos/seed/instructor-bio/500/600"
              alt="Chuyên gia"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
          <div className="md:col-span-3">
            <span className="text-brand-orange font-semibold tracking-wider uppercase">VỀ CHUYÊN GIA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6">Tại sao bạn nên học từ tôi?</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Xin chào, tôi là Alex Nguyễn. Với hơn 10 năm kinh nghiệm thực chiến trong lĩnh vực Digital Marketing cho ngành Bất động sản và Bảo hiểm, tôi đã chứng kiến hàng trăm người lãng phí ngân sách quảng cáo vì không có một "ngôi nhà" đủ vững chắc để đón khách hàng.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Tôi không phải là một lập trình viên. Tôi là một người làm kinh doanh, và tôi tạo ra khóa học này để chia sẻ những phương pháp đơn giản, hiệu quả nhất mà chính tôi đã áp dụng để xây dựng thành công các hệ thống thu hút khách hàng tự động, giúp tôi và các học viên của mình thoát khỏi cuộc đua "đốt tiền" vô nghĩa.
            </p>
            <div className="mt-8 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-xl mb-3">Thành tựu nổi bật:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Quản lý ngân sách quảng cáo hơn 20 tỷ đồng.</li>
                    <li>Giúp hơn 500+ học viên tự xây dựng landing page thành công.</li>
                    <li>Diễn giả tại nhiều sự kiện marketing lớn trong ngành.</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorBioSection;
