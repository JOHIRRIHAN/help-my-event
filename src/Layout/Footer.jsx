import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaLocationArrow } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 container mx-auto">
      <div className="  md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Subscription Section */}
          <div className="md:col-span-3 md:text-center my-20">
            <h2 className="text-2xl md:text-4xl font-bold">
              Subscribe and get exclusive <span className="text-blue-500">deals & offer</span>
            </h2>
            <p className="text-gray-500 mb-10 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.</p>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="border border-gray-300 p-6 rounded-l-md w-full md:w-96 lg:w-[500px] focus:outline-none"
              />
              <button className="bg-blue-500 px-8 rounded-full my-3 text-white -ml-34">Subscribe</button>
            </div>
          </div>
          
          {/* Company Info */}
          <div>
            <img src={logo} alt="logo" />
            <p className="text-gray-500 text-sm mt-2">
              Help My Event Registered in Netherlands. Lorem ipsum dolor sit amet, consectetur.
            </p>
            <p className="my-2">Let's Connect</p>
            <div className="flex space-x-4 mt-10">
              <a href="#" className="text-gray-500 hover:text-blue-500 bg-blue-100 p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 bg-blue-100 p-2 rounded-full"><FaTwitter /></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 bg-blue-100 p-2 rounded-full"><FaLinkedinIn /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500">Helpline</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500">Customer Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-500">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2 text-gray-500 space-y-2">
              <li className="flex gap-x-2 items-center"><FaPhone /> +2 2121 2122 2</li>
              <li>✉ info@helpMyevent.co</li>
              <li className="flex gap-x-2 items-center"><FaLocationArrow /> Dokter van Wiechenweg 14, Zwolle, Overijssel</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <div>
            <a href="#" className="hover:text-blue-500">Terms & Conditions</a> | 
            <a href="#" className="hover:text-blue-500"> Privacy & Policy</a>
          </div>
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
