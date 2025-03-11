import React, { useState } from "react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "هل يمكنني الدفع؟",
      answer:
        "نعم، يمكنك الدفع عند الاستلام. أيضًا نقبل الدفع المسبق عبر البطاقات الائتمانية والمحافظ الرقمية. لدى ثمار صنوان خيارات دفع متعددة ومرنة لتناسب احتياجاتك.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "تقبل ثمار صنوان الدفع عند التوصيل، بطاقات الائتمان، المحافظ الإلكترونية، والتحويل البنكي.",
    },
    {
      question: "هل يمكنني إلغاء الطلبية؟",
      answer:
        "نعم، يمكنك إلغاء الطلبية قبل تأكيد الشحن. يرجى التواصل مع خدمة العملاء لإلغاء طلبك.",
    },
    {
      question: "ما مناطق التوصيل المتاحة؟",
      answer:
        "نقوم بالتوصيل لجميع المناطق داخل المدينة وضواحيها، مع رسوم إضافية للمناطق البعيدة.",
    },
    {
      question: "كيف يمكنني تتبع طلبي؟",
      answer:
        "يمكنك تتبع طلبك من خلال التطبيق أو الموقع الإلكتروني باستخدام رقم الطلب المرسل إلى بريدك الإلكتروني ورقم هاتفك.",
    },
  ];

  return (
    <section id="faqs" className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12">
          الأسئلة الشائعة
        </h2>
        <div className="max-w-3xl mx-auto p-3 md:p-4 border border-[var(--color-q-dev)] rounded-xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-3 md:mb-4 border-b p-5 bg-white rounded-b-sm border-[var(--color-q-dev)] pb-3 md:pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-right focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-base md:text-lg font-medium text-gray-600 pr-2">
                  {faq.question}
                </span>
                <span
                  className={`transition-transform flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bg-gray-50 rounded-full"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              {openFaq === index && (
                <div className="mt-2 py-5 text-gray-500 text-sm md:text-base">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
