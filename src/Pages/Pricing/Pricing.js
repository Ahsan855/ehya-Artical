// Pricing.js
import React from "react";

const Pricing = () => {
  const pricingData = [
    {
      title: "Basic Plan",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro Plan",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Premium Plan",
      price: "$30/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-5">
      <h1 className=" text-2xl md:text-4xl text-primary font-extrabold text-center">
        Choose You Best Pricing
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-10">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className="p-4 flex flex-col justify-between h-96 border rounded shadow m-4"
          >
            <div>
              <h2 className="text-2xl text-secondary font-bold">
                {plan.title}
              </h2>
              <div className="text-4xl text-primary font-bold mt-2">
                {plan.price}
              </div>
              <ul className="mt-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mt-2 flex text-gray-500 items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className=" px-6 py-2 mt-5 bg-white border hover:text-white
            hover:bg-[#1565D8] border-[#1565D8] text-[16px] rounded-lg
            font-bold text-[#1565D8]"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
