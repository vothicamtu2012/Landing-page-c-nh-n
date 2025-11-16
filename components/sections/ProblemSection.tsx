
import React from 'react';
import { DollarSign, BarChart, AlertTriangle } from 'lucide-react';
import Card from '../ui/Card';

const painPoints = [
  {
    icon: DollarSign,
    text: "Đốt tiền quảng cáo nhưng không thu về khách hàng tiềm năng chất lượng?",
  },
  {
    icon: BarChart,
    text: "Bị chìm nghỉm giữa hàng trăm đối thủ cạnh tranh khốc liệt?",
  },
  {
    icon: AlertTriangle,
    text: "Profile online thiếu chuyên nghiệp, không tạo dựng được niềm tin với khách hàng?",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 md:py-28" id="problem">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Có phải bạn đang mệt mỏi vì...</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Nếu bạn gật đầu với bất kỳ điều nào dưới đây, bạn đã đến đúng nơi.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-left">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                    <point.icon className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-lg font-semibold text-brand-dark">{point.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
