import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

/**
 * مكون بطاقة تتبع الصحة
 * يعرض مستويات التتبع الصحي المختلفة مع أيقوناتها
 * ويتضمن عرضاً متجاوباً للأجهزة المختلفة
 */
const HealthTrackingCard = () => {
  // بيانات المستويات الصحية مع الأيقونات والموضع
  const trackingLevels = [
    {
      id: 1,
      name: "مرتفع",
      icon: <div className="w-8 h-8 bg-red-600 mask-triangle"></div>,
      position: "top-[-25%]",
    },
    {
      id: 2,
      name: "متوسط",
      icon: (
        <div className="w-8 h-8 flex justify-center items-center">
          <div className="w-7 h-7 rounded-sm bg-yellow-400 rotate-45"></div>
        </div>
      ),
      position: "left-[-10%] top-[185%] z-10",
    },
    {
      id: 3,
      name: "منخفض",
      icon: (
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rotate-180 bg-teal-600 mask-triangle"></div>
          <div className="w-8 h-8 rotate-180 bg-teal-600 mask-triangle"></div>
        </div>
      ),
      position: "top-[395%] ",
    },
  ];

  return (
    <div className="bg-main-color-300 md:h-[400px] relative rounded-3xl overflow-hidden shadow-md">
      {/* قسم المستويات - مخفي على الشاشات الصغيرة */}
      <div className="p-6 md:relative h-auto top-[17%] md:translate-y-[-17%] max-md:hidden md:-translate-x-[25%] right-[25%]">
        {trackingLevels.map((level) => (
          <div
            key={level.id}
            className={`mb-4 bg-white rounded-3xl px-6 py-9 flex md:absolute w-full items-center shadow-sm shadow-black/30 
              justify-start gap-3 ${level.position}`}
          >
            <span className="text-2xl font-bold">{level.name}</span>
            {level.icon}
          </div>
        ))}
      </div>

      {/* قسم المحتوى النصي - مرئي على جميع الأجهزة */}
      <div className="py-6 px-4 sm:p-6  md:w-[58%] lg:w-[54%] max-md:text-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-4">
          تتبع عاداتك الصحية بذكاء
        </h2>
        <p className="mb-3 text-sm sm:leading-[22px] lg:leading-[33px]">
          نحن نساعدك في تتبع عاداتك اليومية المتعلقة بالصحة الجسمانية بذكاء
          وفعالية، من خلال تحليل عاداتك الصحية لمساعدتك على تحديد أولوياتك
        </p>
        <p className="mb-3 text-sm sm:leading-[22px] lg:leading-[33px]">
          بناءً على الآثار والفوائد. الأكثر من ذلك، الانتباه والالتزام لأهم
          أولوياتك هو المفتاح لتحقيق تحسينات ملموسة في صحتك الجسدية والعافية
          العامة
        </p>

        {/* بطاقات المستويات للعرض على الأجهزة المحمولة فقط */}
        <div className="md:hidden flex flex-col space-y-3 mt-6">
          {trackingLevels.map((level) => (
            <div
              key={level.id}
              className="bg-white rounded-2xl px-4 py-4 flex items-center
               shadow-sm max-md:mx-auto max-md:max-w-[500px] 
               max-md:w-full shadow-black/20 justify-start gap-3"
            >
              <span className="text-lg font-bold">{level.name}</span>
              {level.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * مكون قسم الميزات الرئيسي
 * يعرض أربع بطاقات تصف ميزات المنصة المتعلقة بتتبع الصحة
 * تم تصميمه بشكل متجاوب لجميع أحجام الشاشات
 */
export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 flex flex-col gap-y-6 py-12 rtl">
      {/* الصف الأول من البطاقات */}
      <div className="grid grid-cols-1 items-center md:grid-cols-[2fr,1fr] gap-6">
        {/* البطاقة الأولى - مستويات التتبع الصحي */}
        <HealthTrackingCard />

        {/* البطاقة الثانية - العادات المنظمة */}
        <div className="bg-main-color-700 gap-2 rounded-3xl text-center relative p-6 flex flex-col shadow-md">
          <div className="flex flex-wrap justify-center h-full items-center">
            <img
              src="/icons.svg"
              className="w-[80%] max-w-[270px]"
              alt="أيقونات العادات الصحية"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl mb-4 text-white">
              ابقَ منظما مع قوائم العادات الصحية
            </h2>

            <p className="text-white text-sm mb-6 leading-relaxed">
              يمكنك الآن وضع قوائمك الخاصة من العادات الصحية بشكل منظم، مما يجعل
              متابعة تقدمك اليومية بسيطة وسهلة. وأنت قادر من خلال منصتنا على
              تحسين عاداتك الصحية
            </p>
          </div>
        </div>
      </div>

      {/* الصف الثاني من البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6">
        {/* البطاقة الثالثة - الروتين الصحي */}
        <div className="bg-main-color-700 text-center overflow-hidden rounded-3xl p-6 pt-10 shadow-md flex flex-col">
          <h2 className="text-2xl max-sm:text-xl font-bold mb-4 text-white">
            ابنِ روتينك الصحي بشكل أفضل
          </h2>

          <p className="text-white max-sm:text-xs text-sm leading-relaxed">
            قم ببناء عاداتك اليومية في القائمة الصحية، ثم اتبعها عند كل صباح
            يوميًا. والتزم بتنظيم لتحسين صحتك الجسدية والعقلية
          </p>

          <div className="flex justify-center items-center lg:mt-4">
            <div className="relative max-sm:h-36 w-[300px] h-48">
              <img
                src="/cards.svg"
                alt="بطاقات العادات الصحية"
                className="max-md:w-[450px] max-sm:w-[370px] max-lg:w-[520px] w-[500px] max-w-none absolute left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
        </div>

        {/* البطاقة الرابعة - تتبع الذكاء الاصطناعي */}
        <div className="bg-main-color-400 overflow-hidden relative rounded-3xl p-6 shadow-md">
          {/* خلفية ديكورية للبطاقة */}
          <div className="relative -top-[12%] max-sm:hidden max-lg:-top-[8%] max-lg:-right-[8%] -right-[14%]">
            <img src="/rectangle.svg" alt="خلفية زخرفية" />
            <img
              src="/habits.svg"
              alt="أيقونات العادات"
              className="absolute left-[42%] max-lg:max-w-[300px] -translate-x-[42%] top-[63%] -translate-y-[63%] max-w-[360px]"
            />
          </div>
          <div className="absolute top-[-55%] z-0 left-[45%] w-[600px] h-[600px] rounded-full bg-black/5" />

          {/* محتوى البطاقة */}
          <h2 className="text-2xl relative font-bold mb-6 text-right z-50 text-white">
            تتبع عاداتك بسهولة عبر موقعنا باستخدام الذكاء الاصطناعي
          </h2>

          <p className="text-right relative text-white z-50 text-lg leading-relaxed">
            نظام متطور يساعدك في تتبع أوقاتك وعاداتك اليومية بشكل تلقائي.
            <br />
            يتم تعزيز من الذكاء الاصطناعي التحليل ومعالجة خطوات الصحي
          </p>

          {/* عرض توضيحي للعادات */}
          <div className="px-12 py-2 mt-7 sm:hidden rounded-xl h-[140px] bg-white flex justify-center items-center">
            <img src="/habits.svg" alt="أيقونات العادات" className="h-full" />
          </div>
        </div>
      </div>
      {/* CTA button with arrow icon */}
      <Link href="/your-target-url" className=" mx-auto">
        <Button className="max-w-[200px] bg-main-color-600 hover:bg-main-color-700 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-xl shadow-lg transition-all duration-300">
          <ArrowLeft className="ml-2 h-5 w-5" />
          تتبع عاداتك الآن
        </Button>
      </Link>
    </section>
  );
}
