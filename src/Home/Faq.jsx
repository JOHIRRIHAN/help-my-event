import { useState } from "react";
import { Plus, Minus, Mail } from "lucide-react";
import victor from '../../src/assets/vector 2.png'
const faqs = [
  {
    question: "How does the furniture rental process work?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  },
  {
    question: "What are the rental duration options available?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How does the payment and deposit system work?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Is delivery and pickup included in the rental service?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How do I track my order status?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  
  {
    question: "How do I track my order status?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    question: "How do I track my order status?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    question: "How do I track my order status?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto min-h-screen  p-6">
      {/* Left Section */}
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Frequently Asked <br /> <span className="text-blue-500">Question</span>
        </h2>
        <img src={victor} alt="" className="my-5 hidden md:block"/>
        <p className="text-gray-600 mt-4">Still have question?</p>
        <p className="text-gray-500">Please write to our support team</p>
        <button className="my-4 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          <Mail size={18} /> Send Mail
        </button>
      </div>

      {/* Right Section */}
      <div className="">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg mb-4 p-4 transition-all"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3
                className={`text-lg font-semibold ${
                  openIndex === index ? "text-blue-500" : "text-gray-800"
                }`}
              >
                {faq.question}
              </h3>
              {openIndex === index ? <Minus /> : <Plus />}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
