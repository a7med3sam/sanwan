import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover pt-16 md:pt-24 pb-8 md:pb-56 min-h-[60vh] md:min-h-[80vh] flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-white opacity-35 md:opacity-20"></div>
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center text-[var(--color-text-primary)] text-center relative z-10">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-4 md:mb-6">
          أحصل على جميع احتياجاتك الآن بنقرة واحدة!
        </h1>
        <p className="text-base mt-8 md:text-lg font-medium mb-6 md:mb-8 max-w-3xl px-2">
          ثمار صنوان يوفر لك أفضل المنتجات مع توصيل سريع وعروض حصرية في كل
          يوم. قم بتحميل التطبيق وتسوق الآن من راحة منزلك.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {/* <button className="bg-[var(--color-button-bg)] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base hover:bg-green-800 transition">
            تسجيل دخول
          </button> */}
          <button className="bg-[var(--color-button-bg)] text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base hover:bg-green-800 transition">
            <a href="#get-app">أحصل على التطبيق
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
