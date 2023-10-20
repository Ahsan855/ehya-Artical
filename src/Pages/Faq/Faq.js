import React, { useState } from "react";
import faq from "../../images/faq.jpg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      question: "What is JavaScript Language?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      question: "What questions to ask about programming?",
      answer: `
        Basic & Advanced Computer Programming Interview Questions.
       What is Computer programming?
       How does programming work?
        What is debugging?
        Name different types of errors which can occur during the execution of a program? 
        When a syntax error occurs?
       When a runtime error occurs?
        `,
    },
    {
      question: "Where do programmers ask questions?",
      answer: ` StackOverflow. StackOverflow has over 100 million users who are serious about improving their coding skills Quora Quora hosts informative content that its users create and share Reddit StackExchange CodeProject.`,
    },
    {
      question: "Where does coding work?",
      answer:
        "Electronic devices like cell phones, laptops, and tablets require code to function properly. Coding allows humans to communicate with these devices. Modern technology such as traffic lights, calculators, smart TVs, and cars use internal coding systems.",
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
          <div key={index} className=" px-10 rounded shadow-md flex flex-col">
            <button
              className="font-semibold text-left px-4 py-3 w-full text-blue-500"
              onClick={() => toggleItem(index)}
            >
              {index + 1} {item.question}
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
