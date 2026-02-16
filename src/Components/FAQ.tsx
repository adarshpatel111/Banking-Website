import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQType {
  que: string;
  ans: string;
}

const FAQItem = ({ que, ans }: FAQType) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-(--tertiary-color) rounded-xl p-4 sm:p-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-sm sm:text-base lg:text-lg text-(--secondary-text-color)"
      >
        <span className="pr-4">{que}</span>
        <ChevronDown
          className={`min-w-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-(--grey-70)">
          {ans}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const FAQData: FAQType[] = [
    {
      que: "How do I open an account with YourBank?",
      ans: `Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process.`,
    },
    {
      que: "What documents do I need to provide to apply for a loan?",
      ans: `Generally, you will need identification documents, proof of income, and collateral information depending on loan type.`,
    },
    {
      que: "How can I access my accounts online?",
      ans: `Visit our website and click Login. Enter your credentials or enroll if you are a new user.`,
    },
    {
      que: "Are my transactions and personal information secure?",
      ans: `We use encryption and multi-factor authentication to keep your data secure.`,
    },
  ];

  return (
    <div className="space-y-8 md:space-y-10 mt-14 sm:mt-16 md:mt-20 mb-14 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-(--primary-color)">Frequently</span>{" "}
          <span className="text-(--secondary-text-color)">Asked Questions</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl mt-3 text-(--grey-70)">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4">
        {FAQData.map((data, index) => (
          <FAQItem key={index} {...data} />
        ))}
      </div>

      <button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-(--background-navbar-color) rounded-full text-(--secondary-text-color) mx-auto text-base sm:text-lg md:text-2xl transition hover:opacity-80">
        Load All FAQs
        <ChevronDown className="text-lg sm:text-xl md:text-2xl" />
      </button>
    </div>
  );
};

export default FAQ;
