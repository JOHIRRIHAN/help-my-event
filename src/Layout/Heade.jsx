import { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";

const languages = [
  { code: "en", name: "En", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "ar", name: "Ab", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "jp", name: "Jp", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "it", name: "It", flag: "https://flagcdn.com/w40/it.png" },
];

const Heade = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]); // Default: English
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-100 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 rounded-full bg-white shadow-lg fixed top-1  left-0 right-0 z-50">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center">
          <a href="/"><img src={logo} alt="logo" className="" /></a>
        </div>

        <div className="flex gap-x-5 items-center">
          {/* Language Dropdown */}
          <div className=" hidden sm:block relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 "
            >
              <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-5" />
              <span>{selectedLang.name}</span> <FaChevronDown className="text-sm font-light"/>
            </button>

            {/* Dropdown Options - Show Only When Open */}
            {isOpen && (
              <div className="absolute bg-base-200 mt-2 w-20">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    <img src={lang.flag} alt={lang.name} className="w-5 h-5" />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Login / Signup Button */}
          <div
            style={{ border: "1px solid #3b82f6" }}
            className="text-blue-500 rounded-full px-2 md:px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          >
            <a href="#">Login/Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heade;
