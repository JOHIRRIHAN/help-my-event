import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import img1 from '../../src/assets/furniture_item1.png'
import img2 from '../../src/assets/furniture_item2.png'
import img3 from '../../src/assets/furniture_item3.png'
import img4 from '../../src/assets/furniture_item4.png'
import img5 from '../../src/assets/furniture_itrem5.png'
import img6 from '../../src/assets/furniture_item6.png'
const categories = [
  "Furniture", "Decorations", "Wedding Essentials", "Clothing", "Event Equipment", "Party Essentials", "Miscellaneous"
];

const products = [
  { name: "Leather Club Chair", distance: "10 km away", price: "$8-$30/hour", rating: "4.5 (21)", image: img1 },
  { name: "Leather Club Chair", distance: "10 km away", price: "$8-$30/hour", rating: "4.5 (21)", image: img2 },
  { name: "Leather Club Chair", distance: "10 km away", price: "$8-$30/hour", rating: "4.5 (21)", image: img3 },
  { name: "Leather Club Chair", distance: "10 km away", price: "$8-$30/hour", rating: "4.5 (21)", image: img4 },
  { name: "Leather Club Chair", distance: "10 km away", price: "$8-$30/hour", rating: "4.5 (21)", image: img5 },
  { name: "Leather Club Chair", distance: "10 km away", price: "$8-$30/hour", rating: "4.5 (21)", image: img6 },
];

const Furniture = () => {
  const [activeTab, setActiveTab] = useState("Furniture");

  return (
    <div className="container mx-auto md:mt-20 lg:mt-28 p-6">
      <div className="flex items-center justify-between my-10">
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">Explore Furniture</h1>
      {/* View All Button */}
    
        <button className="px-6 cursor-pointer py-2 border border-blue-400 rounded-full text-blue-600 hover:bg-gray-100">AI Suggestion</button>
      
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between space-x-6 border-b border-gray-300 mb-6 text-gray-500">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`pb-2 text-base font-medium transition-all duration-300 ${activeTab === category ? "border-b-2 border-blue-500 text-blue-600" : "hover:text-gray-800"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className=" rounded-lg pb-6 shadow-sm bg-white p-5">
            <p className="text-base text-white absolute ml-72">⭐ {product.rating}</p>
            <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105" />
            <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
            <p className="text-sm my-2 text-gray-500 flex items-center gap-2"><FaLocationArrow />{product.distance}</p>
            <p className="text-sm font-semibold text-gray-700">{product.price}</p>
            
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 border border-blue-400 rounded-full text-blue-600 hover:bg-gray-100 flex items-center gap-5">View All <FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Furniture;
