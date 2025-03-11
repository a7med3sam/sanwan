const MainSection = () => {
  return (
    <>
      <section id="whySenwan" className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-10 md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">
            <span className="text-black">لماذا </span>
            <span className="text-green-700">ثمار صنوان</span>
            <span className="text-black">؟</span>
          </h2>

          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-8 md:mb-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-button-bg)] mb-2 md:mb-4">
                توصيل سريع ومجاني
              </h3>
              <p className="text-[var(--color-text-primary)] mt-8 mb-4 ml-0 md:ml-10 lg:ml-30 text-sm/8 md:text-base/8 font-semibold">
                نوفر خدمة توصيل سريعة تصل إلى باب منزلك خلال 30 دقيقة فقط. مع
                فرصة الحصول على شحن مجاني عند وصول طلبك إلى حد معين. تسوق الآن
                واستلم طلباتك بكل سهولة في أي وقت.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-start">
              <img
                src="/delivery.svg"
                alt="توصيل سريع"
                className="w-4/5 md:w-full max-w-md rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-4 md:gap-8 mb-8 md:mb-16">
            <div className="w-full md:w-1/2 text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-button-bg)] mb-2 md:mb-4">
                تشكيلة كبيرة من المنتجات
              </h3>
              <p className="text-gray-600 mt-8 mb-4 ml-0 md:ml-10 lg:ml-30 text-sm/8 md:text-base/8 font-semibold">
                لدينا كل ما تحتاجه من الفئات الطازجة، الخضروات، المعلبات،
                المشروبات، وحتى المستلزمات المنزلية بخصومات وعروض يومية. تمتع
                بنوع من مجموعة متنوعة من المنتجات، كل شيء متوفر في مكان واحد.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/shopping-bag.svg"
                alt="تشكيلة منتجات"
                className="w-4/5 md:w-full max-w-md rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-right">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-button-bg)] mb-2 md:mb-4">
                دفع سهل وآمن
              </h3>
              <p className="text-gray-600 mt-8 mb-4 ml-0 md:ml-10 lg:ml-30 text-sm/8 md:text-base/8 font-semibold">
                استخدام طرق الدفع الإلكترونية المتعددة مثل البطاقات الائتمانية،
                المحافظ الرقمية، أو الدفع عند الاستلام. ونضمن تأمين معاملاتك.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-start">
              <img
                src="/Online-Groceries-cuate.svg"
                alt="دفع آمن"
                className="w-4/5 md:w-full max-w-md rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-white mb-7 bg-auto mx-4 overflow-hidden md:mx-20 px-4 rounded-tl-[50px] md:rounded-tl-[100px] rounded-tr-[15px] md:rounded-tr-[25px] rounded-br-[50px] md:rounded-br-[100px] rounded-bl-[15px] md:rounded-bl-[25px] h-auto min-h-[300px] md:h-[350px] lg:h-[300px]"
        style={{
          backgroundImage:
            "url('/abstract-luxury-gradient-blue.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto py-8 md:py-0">
          <div className="flex flex-col md:flex-row justify-center items-start gap-1 md:gap-8">
            <div className="relative w-full md:w-1/3 text-center md:text-right order-2 md:order-1 ">
              <img
                src="/Mobiles.svg"
                alt="تطبيق ثمار صنوان"
                className="w-4/9 mx-auto md:w-full max-w-md scale-125"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right order-1 md:order-2 mb-4 md:mb-0 md:mt-18">
              <h2 className="text-xl md:text-3xl font-normal mb-4 md:mb-6 px-2 md:px-0">
                أحصل على تجربة تسوق سلسة وسريعة عند تنزيلك تطبيق الجوال الخاص
                بنا!
              </h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mt-4 md:mt-0">
                <a href="#" className="inline-block">
                  <img
                    src="/google-play.png"
                    alt="Google Play"
                    className="h-12 md:h-13"
                    loading="lazy"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img
                    src="/AppStore-logo.png"
                    alt="App Store"
                    className="h-12 md:h-16"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
