import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; // Close icon for toggle

const Hero = () => {
  const [showSearch, setShowSearch] = useState(false); // State for toggle

  return (
    <div className="container md:mt-10 md:h-[700px] mx-auto rounded-4xl flex flex-col items-center p-6 bg-white">
      {/* Header */}
      <h1 className="text-2xl lg:text-5xl my-8 text-gray-700 font-semibold text-center">
        <span className="text-blue-600 font-bold">Rent</span> Elegant Furniture for <br />
        Every Occasion, <span className="text-blue-600 font-bold">Hassle-Free!</span>
      </h1>

      {/* Image Slider */}
      <div className="w-full mt-6">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {["../../src/assets/img_slider1.jpeg", "../../src/assets/img_slider2.jpeg", "../../src/assets/img_slider3.jpeg", "../../src/assets/img_slider4.jpeg", "../../src/assets/img_slider1.jpeg", "../../src/assets/img_slider4.jpeg"].map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Furniture ${index + 1}`} className="w-full h-[450px] object-cover rounded-2xl shadow-md" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Search Bar Toggle Button (Mobile) */}
      <div className="md:hidden mt-4">
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center"
        >
          <FaSearch className="mr-2" /> {showSearch ? "Close Search" : "Search"}
        </button>
      </div>

      {/* Search Bar */}
      <div className={`mt-4 transition-all duration-300 ${showSearch ? "block" : "hidden"}  md:flex w-full justify-center`}>
        <div className="bg-white shadow-lg md:rounded-full p-4 w-full md:w-auto md:flex flex-wrap md:flex-nowrap justify-between items-center gap-2">
          <input type="text" placeholder="Product Name" className="p-2 border-none rounded-full flex-1 mx-2 w-full md:w-auto" />
          <select className="p-2 border-none rounded-full flex-1 mx-2 w-full md:w-auto">
            <option>Distance</option>
          </select>
          <select className="p-2 border-none rounded-full flex-1 mx-2 w-full md:w-auto">
            <option>Price Range</option>
          </select>
          <input type="date" className="p-2 border-none rounded-full flex-1 mx-2 w-full md:w-auto" />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center">
            <FaSearch className="mr-2" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
