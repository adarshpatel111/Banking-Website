import {
  Banknote,
  BriefcaseBusiness,
  Building,
  HandCoins,
  Home,
  Landmark,
  PiggyBank,
} from "lucide-react";
import { useState } from "react";

/* ------------ DATA ------------ */
interface Productsdata {
  [key: string]: {
    title: string;
    icon: any;
    desc: string;
  }[];
}

const productsData: Productsdata = {
  individuals: [
    {
      title: "Checking Accounts",
      icon: BriefcaseBusiness,
      desc: "Enjoy easy and convenient access to your funds with checking account options including debit cards and mobile banking.",
    },
    {
      title: "Savings Accounts",
      icon: PiggyBank,
      desc: "Build savings with competitive interest rates and flexible savings plans designed for long-term growth.",
    },
    {
      title: "Loans and Mortgages",
      icon: Home,
      desc: "Flexible personal loans and mortgage options helping you achieve financial goals easily.",
    },
  ],

  businesses: [
    {
      title: "Business Accounts",
      icon: Building,
      desc: "Manage daily business transactions with secure and flexible business banking accounts.",
    },
    {
      title: "Corporate Savings",
      icon: Landmark,
      desc: "Grow company reserves with structured savings and investment account options.",
    },
    {
      title: "Business Loans",
      icon: Banknote,
      desc: "Expand operations with fast approval business financing and credit solutions.",
    },
  ],
};

const Ourproducts = () => {
  const [category, setCategory] = useState("individuals");
  const data = productsData[category];

  return (
    <div className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Products</span>
      </h2>

      {/* Description + Toggle */}
      <div className="flex flex-col md:flex-row justify-between gap-6 pt-6 pb-8 md:pb-10">
        <p className="md:w-2/3 text-base sm:text-lg lg:text-xl mt-3 text-(--grey-70)">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and
          aspirations.
        </p>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-2 bg-(--background-navbar-color) p-2 rounded-full text-(--secondary-text-color) border border-(--tertiary-color)">
          <button
            onClick={() => setCategory("individuals")}
            className={`text-xl sm:text-2xl lg:text-3xl font-semibold px-4 py-2 rounded-full transition whitespace-nowrap ${
              category === "individuals"
                ? "bg-(--background-primary-color) text-(--tertiary-text-color)"
                : "text-(--tertiary-text-size)"
            }`}
          >
            For Individuals
          </button>

          <button
            onClick={() => setCategory("businesses")}
            className={`text-xl sm:text-2xl lg:text-3xl font-semibold px-4 py-2 rounded-full transition whitespace-nowrap ${
              category === "businesses"
                ? "bg-(--background-primary-color) text-(--tertiary-text-color)"
                : "text-(--tertiary-text-size)"
            }`}
          >
            For Businesses
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-(--tertiary-color)">
        {data.map((product: any, index: number) => (
          <div
            key={index}
            className={`flex-1 p-6 sm:p-8 text-center ${
              index !== data.length - 1
                ? "md:border-r md:border-b-0 border-b border-(--tertiary-color)"
                : ""
            }`}
          >
            <product.icon className="w-12 h-12 sm:w-16 sm:h-16 md:w-12 md:h-12 mx-auto mb-4 strock-1 stroke-(--primary-text-color)" />

            <h3 className="font-semibold text-base sm:text-lg mb-2 text-(--secondary-text-color)">
              {product.title}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg mt-2 text-(--grey-70)">
              {product.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourproducts;
