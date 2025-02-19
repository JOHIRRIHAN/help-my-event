import { useState } from "react";
import img from "../../src/assets/bg.jpeg";
export default function FurnitureGrid() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className=" my-5 md:my-20 ">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Features Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800  mb-12">
          Where Function Meets <br className="hidden md:block" /> Elegance: Our
          Standout Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <img
                src="../../src/assets/Component 4.png"
                alt="Quick Booking"
                className="w-14"
              />
            }
            title="Quick Booking"
            description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit."
          />
          <FeatureCard
            icon={
              <img
                src="../../src/assets/easy.png"
                alt="Easy Payment"
                className="w-14"
              />
            }
            title="Easy Payment Method"
            description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit."
          />
          <FeatureCard
            icon={
              <img
                src="../../src/assets/Component 5.png"
                alt="Secure Payment"
                className="w-14"
              />
            }
            title="Secure Payment"
            description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit."
          />
        </div>
      </div>
      <div className="mt-20 w-full bg-white h-auto md:h-[400px]  rounded-lg overflow-hidden">
        <div className="conatainer mx-auto  grid grid-cols-1 md:grid-cols-2 px-8">
        <div className="p-8 flex flex-col justify-center  md:text-left">
          <h3 className="text-2xl md:text-4xl/13 font-bold text-gray-800">
            Flexible <span className="text-blue-600">Furniture Rentals</span>{" "}
            for <br /> Every{" "}
            <span className="text-gray-700">Space & Occasion</span>
          </h3>
          <ul className="my-6 space-y-2 text-gray-600">
            <li>✔ Transform Any Space—Rent, Use, Return</li>
            <li>✔ Affordable Luxury Furniture, Just a Click Away</li>
            <li>✔ Rent Premium Furniture, Elevate Every Occasion</li>
          </ul>
          <button className="mt-4 w-36 bg-blue-600 text-white px-4 py-2 rounded-full mx-auto md:mx-0">
            Book Now
          </button>
        </div>

        <div className="relative w-full h-64 md:h-[400px] flex justify-center items-center">
          {!isPlaying ? (
            <div className="relative w-full h-full">
              {/* Thumbnail Image */}
              <img
                src={img}
                alt="Video Thumbnail"
                className="w-full h-[400px] object-cover"
              />
              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex justify-center items-center  bg-opacity-50"
              >
                <span className="text-blue-500 text-4xl bg-base-100 opacity-85 p-4 rounded-full">
                  ▶
                </span>
              </button>
            </div>
          ) : (
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/S-A0qLTxf-U?autoplay=1"
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className=" p-6  ">
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
}
