import React, { useState } from "react";
import faq from "../../images/faq.jpg";
import { FiChevronDown } from "react-icons/fi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework",
    },
    {
      question: "What is JavaScript Language?",
      answer: "Tailwind CSS is a utility-first CSS framework",
    },
    {
      question: "What questions to ask about programming?",
      answer: `
        Basic & Advanced Computer Programming
       
        `,
    },
    {
      question: "Where do programmers ask questions?",
      answer: ` StackOverflow. StackOverflow `,
    },
    {
      question: "Where does coding work?",
      answer: "Electronic devices like cell phones,",
    },
    // Add more FAQ items here
  ];
  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row justify-center items-center gap-x-5">
      <div className="px-5">
        <img src={faq} alt="" />
      </div>
      <div className="py-10 px-5">
        {faqData.map((item, index) => (
          <div
            key={index}
            className=" px-10 rounded shadow-md flex flex-col w-full"
          >
            <button
              className="font-semibold text-left flex flex-row justify-between items-center px-2 py-3 w-full text-blue-500"
              onClick={() => toggleItem(index)}
            >
              {index + 1} {item.question}{" "}
              <FiChevronDown className=" text-2xl" />
            </button>
            {openIndex === index && (
              <p className="mt-2 px-4 pb-5 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
