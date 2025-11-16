
import React, { useEffect, useState } from 'react';
import useCountdown from '../../hooks/useCountdown';
import Button from '../ui/Button';

const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-4xl md:text-6xl font-bold">{String(value).padStart(2, '0')}</span>
    <span className="text-sm uppercase tracking-widest">{label}</span>
  </div>
);

const FinalCtaSection: React.FC = () => {
    // Set countdown for 3 days from now
    const [targetDate, setTargetDate] = useState(0);

    useEffect(() => {
        setTargetDate(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
    }, []);

    const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <section className="bg-brand-dark text-white py-20 md:py-28" id="final-cta">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 max-w-4xl mx-auto">
          Đừng trì hoãn thành công của bạn thêm một ngày nào nữa.
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Cơ hội sở hữu hệ thống kinh doanh tự động với mức giá ưu đãi nhất sẽ sớm kết thúc.
        </p>

        <div className="flex justify-center gap-4 md:gap-8 mb-12 text-white">
          <CountdownUnit value={days} label="Ngày" />
          <span className="text-4xl md:text-6xl font-bold">:</span>
          <CountdownUnit value={hours} label="Giờ" />
          <span className="text-4xl md:text-6xl font-bold">:</span>
          <CountdownUnit value={minutes} label="Phút" />
          <span className="text-4xl md:text-6xl font-bold">:</span>
          <CountdownUnit value={seconds} label="Giây" />
        </div>

        <Button asLink href="#pricing">
          Đăng ký ngay để giữ ưu đãi
        </Button>
      </div>
    </section>
  );
};

export default FinalCtaSection;
