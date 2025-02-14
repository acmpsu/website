import CountUp from 'react-countup';

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  title: string;
  subtitle: string;
}

export default function AnimatedStat({ end, suffix = '', title, subtitle }: AnimatedStatProps) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="text-4xl font-bold text-[#2f7ce7] mb-3">
        <CountUp end={end} duration={2.5} suffix={suffix} />
      </div>
      <div className="text-xl text-gray-600">{title}</div>
      <div className="mt-2 text-sm text-gray-500">{subtitle}</div>
    </div>
  );
}