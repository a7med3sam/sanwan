import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll control for header visibility
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-[var(--color-nav)] fixed w-full z-50 transition-transform duration-300 ${
        isVisible ? "transform-none" : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4 space-x-reverse">
          <img
            src="/logo.svg"
            alt="ثمار صنوان"
            className="h-8 md:h-10"
            loading="lazy"
          />
          <h1 className="font-bold text-[var(--color-text-primary)] text-sm md:text-base">
            ثمار صنوان
          </h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 space-x-reverse text-[var(--color-text-primary)] justify-between w-80">
          <a href="#" className="font-medium">
            الرئيسية
          </a>
          <a href="#whySenwan" className="hover:text-green-700 mr-0">
            عن التطبيق
          </a>
          <a href="#faqs" className="hover:text-green-700">
            الأسئلة الشائعة
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-[var(--color-text-primary)] p-2 focus:outline-none"
            aria-label="القائمة"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <button className="bg-[var(--color-button-bg)] text-white px-3 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-base hover:bg-green-800 transition">
          ابدأ التسوق
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`md:hidden bg-white shadow-md ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-3 text-green-700 text-right">
            <a href="#" className="p-4 border-b border-gray-200 font-medium">
              الرئيسية
            </a>
            <a href="#whySenwan" className="p-4 border-b border-gray-200 hover:text-green-700">
              عن التطبيق
            </a>
            <a href="#faqs" className="p-4 hover:text-green-700">
              الأسئلة الشائعة
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;