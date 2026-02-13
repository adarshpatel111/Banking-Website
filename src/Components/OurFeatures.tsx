import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type FeatureCategory = "onlineBanking" | "financialTools" | "customerSupport";

interface FeatureItem {
  title: string;
  desc: string;
}

const featuresData: Record<FeatureCategory, FeatureItem[]> = {
  onlineBanking: [
    {
      title: "24/7 Account Access",
      desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease..",
    },
    {
      title: "Mobile Banking App",
      desc: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    },
    {
      title: "Secure Transactions",
      desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    },
    {
      title: "Bill Pay and Transfers",
      desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    },
  ],

  financialTools: [
    {
      title: "Budget Planner",
      desc: "Track expenses and manage your monthly spending efficiently.",
    },
    {
      title: "Savings Calculator",
      desc: "Plan and calculate your savings goals with smart insights.",
    },
    {
      title: "Investment Insights",
      desc: "Get detailed investment recommendations and portfolio analysis.",
    },
    {
      title: "Expense Reports",
      desc: "Generate expense reports and financial summaries instantly.",
    },
  ],

  customerSupport: [
    {
      title: "24/7 Support",
      desc: "Our team is available anytime to help with your banking needs.",
    },
    {
      title: "Live Chat Assistance",
      desc: "Connect instantly with our customer service representatives.",
    },
    {
      title: "Branch Locator",
      desc: "Find the nearest branch or ATM quickly.",
    },
    {
      title: "Dedicated Advisors",
      desc: "Receive personalized financial assistance from experts.",
    },
  ],
};

const OurFeatures = () => {
  const [category, setCategory] = useState<FeatureCategory>("onlineBanking");

  const data = featuresData[category];

  return (
    <div className="space-y-10 text-(--secondary-text-color) my-10">
      {/* Heading */}
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl">
          <span>Our</span>
          <span className="text-(--primary-color)"> Features</span>
        </h2>

        <p className="text-(--grey-70) text-xl max-w-2xl">
          Experience powerful features including seamless online banking, secure
          transactions, and personalized financial insights.
        </p>
      </div>

      <div className="grid grid-cols-[2fr_8fr] gap-6">
        <div className="w-[80%] h-[90%] bg-(--secondary-color) p-10 rounded-2xl flex flex-col gap-3 text-2xl">
          {[
            { key: "onlineBanking", label: "Online Banking" },
            { key: "financialTools", label: "Financial Tools" },
            { key: "customerSupport", label: "Customer Support" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setCategory(item.key as FeatureCategory)}
              className={`p-3 rounded-2xl text-left transition-all duration-300 border-2 border-(--grey-15)
                ${
                  category === item.key
                    ? "bg-(--background-screen-color) text-(--primary-color)"
                    : "bg-(--tertiary-color) hover:bg-(--background-screen-color)/60"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-3
              bg-(--background-navbar-color)
              p-8 rounded-2xl
              border border-(--tertiary-color)"
            >
              <ArrowUpRight className="absolute top-5 right-5 text-(--primary-color)" />

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="text-(--grey-70)">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
