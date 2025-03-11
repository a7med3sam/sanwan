import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--color-footer-bg)] text-[var(--color-footer-text)] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4">
          <div className="mb-6 mr-10 md:mb-0 text-center md:text-right">
            <h2 className="font-normal mb-3 text-3xl tracking-wide">ثمار صنوان</h2>
            <ul className="list-inside font-light text-base md:list-disc">
              <li className="mb-1">سياسة الخصوصية</li>
              {/* <li>سياسة الاستبدال و الاسترجاع</li> */}
            </ul>
          </div>
          <div className="w-full md:w-80 flex flex-col items-center md:text-right">
            <h3 className="mb-4 text-base">يمكنك ايضا الحصول على تطبيقنا للجوال</h3>
            <div className="flex flex-row md:flex-col gap-4 justify-center items-center md:items-end">
              <a href="#" className="inline-block">
                <img
                  src="/google-play.png"
                  alt="Google Play"
                  className="h-10 md:h-13"
                  loading="lazy"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="/AppStore-logo.png"
                  alt="App Store"
                  className="h-14 md:h-14"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-80 flex justify-center md:justify-start">
            <img
              src="/footer-logo.svg"
              alt=""
              className="w-1/2 md:w-60"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center text-gray-400">
          <div>
            <h3 className="text-white md:text-lg text-base mb-4">تواصل معنا</h3>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-9 justify-center items-center">
              <li className="flex items-center">
                <img
                  src="/phone-iocn.svg"
                  alt="phone icon"
                  className="icon ml-2"
                  loading="lazy"
                />
                +966 12 345 6789
              </li>
              <li className="flex items-center">
                <img
                  src="/whatsapp-icon.svg"
                  alt="whatsapp icon"
                  className="icon ml-2"
                  loading="lazy"
                />
                +966 12 345 6789
              </li>
              <li className="flex items-center">
                <img
                  src="/email-icon.svg"
                  alt="email icon"
                  className="icon ml-2"
                  loading="lazy"
                />
                example@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
