import {
  Banknote,
  BriefcaseBusiness,
  Building,
  Home,
  Landmark,
  PiggyBank,
} from "lucide-react";
import { useState } from "react";
import IconBadge from "./IconBadge";

/* ------------ DATA ------------ */
interface Productsdata {
  [key: string]: {
    title: string;
    icon: any;
    desc: string;
  }[];
}

type Category = "individuals" | "businesses";

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

  const changeCategory = (type: Category) => {
    setCategory(type);
  };

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
        <div
          className="
      flex w-full sm:w-auto
      bg-(--background-navbar-color)
      p-1 sm:p-1.5
      rounded-full
      border border-(--tertiary-color)
      text-(--secondary-text-color)
    "
        >
          <button
            onClick={() => changeCategory("individuals")}
            className={`
        flex-1 sm:flex-none
        text-xs sm:text-sm md:text-base lg:text-lg
        font-semibold
        px-4 sm:px-6 py-2
        rounded-full
        transition-all duration-300
        whitespace-nowrap
        ${
          category === "individuals"
            ? "bg-(--background-primary-color) text-(--tertiary-text-color) shadow-md"
            : "opacity-70 hover:opacity-100"
        }
      `}
          >
            For Individuals
          </button>

          <button
            onClick={() => changeCategory("businesses")}
            className={`
        flex-1 sm:flex-none
        text-xs sm:text-sm md:text-base lg:text-lg
        font-semibold
        px-4 sm:px-6 py-2
        rounded-full
        transition-all duration-300
        whitespace-nowrap
        ${
          category === "businesses"
            ? "bg-(--background-primary-color) text-(--tertiary-text-color) shadow-md"
            : "opacity-70 hover:opacity-100"
        }
      `}
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
            <IconBadge icon={product.icon} size="md" className="mx-auto mb-6" />
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
