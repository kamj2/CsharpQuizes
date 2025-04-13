import { Code, Hammer, Sparkles, Text } from 'lucide-react';

export const Quizes: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-600">!مرحبا</h1>
        <p className="text-xl sm:text-2xl text-gray-600">من فضلك اختر الفعالية الملائمة لك 👇</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card Template */}
        {[
          {
            title: 'خمن نتيجة الكود',
            icon: <Text size={36} className="text-indigo-600" />,
            desc: 'سيتم عرض كود، وعليك تخمين نتيجته.',
          },
          {
            title: 'أصلح الكود',
            icon: <Hammer size={36} className="text-indigo-600" />,
            desc: 'اكشف الأخطاء في كود وقم بإصلاحه.',
          },
          {
            title: 'اكتب برنامج',
            icon: <Code size={36} className="text-indigo-600" />,
            desc: 'تحدي لكتابة برنامج من الصفر بناء على متطلبات.',
          },
          {
            title: 'برمج بسطر واحد',
            icon: <Sparkles size={36} className="text-indigo-600" />,
            desc: 'اكتب كود يحل المشكلة بسطر واحد فقط!',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 flex flex-col items-start gap-3"
          >
            {card.icon}
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">{card.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{card.desc}</p>
            <button className="mt-2 bg-indigo-600 text-white text-sm sm:text-base px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
              جرب الآن
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
