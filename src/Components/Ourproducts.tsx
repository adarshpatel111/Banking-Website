import { useState } from "react";

/* ------------ DATA ------------ */
interface Productsdata {
  [key: string]: {
    title: string;
    img: string;
    desc: string;
  }[];
}
const productsData: Productsdata = {
  individuals: [
    {
      title: "Checking Accounts",
      img: "/src/assets/Images/our-product1.png",
      desc: "Enjoy easy and convenient access to your funds with checking account options including debit cards and mobile banking.",
    },
    {
      title: "Savings Accounts",
      img: "/src/assets/Images/our-product2.png",
      desc: "Build savings with competitive interest rates and flexible savings plans designed for long-term growth.",
    },
    {
      title: "Loans and Mortgages",
      img: "/src/assets/Images/our-product3.png",
      desc: "Flexible personal loans and mortgage options helping you achieve financial goals easily.",
    },
  ],

  businesses: [
    {
      title: "Business Accounts",
      img: "/src/assets/Images/our-product1.png",
      desc: "Manage daily business transactions with secure and flexible business banking accounts.",
    },
    {
      title: "Corporate Savings",
      img: "/src/assets/Images/our-product2.png",
      desc: "Grow company reserves with structured savings and investment account options.",
    },
    {
      title: "Business Loans",
      img: "/src/assets/Images/our-product3.png",
      desc: "Expand operations with fast approval business financing and credit solutions.",
    },
  ],
};

const Ourproducts = () => {
  const [category, setCategory] = useState("individuals");

  const data = productsData[category];

  return (
    <div className="py-14">
      {/* Heading */}
      <h2 className="text-5xl text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Products</span>
      </h2>

      {/* Description + Toggle */}
      <div className="flex flex-col md:flex-row justify-between gap-6 pt-6 pb-10">
        <p className="md:w-2/3 text-(--grey-70) text-xl">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and
          aspirations.
        </p>

        {/* Toggle Buttons */}
        <div className="flex gap-2 bg-(--background-navbar-color) p-2 rounded-3xl text-(--secondary-text-color)">
          <button
            onClick={() => setCategory("individuals")}
            className={`text-2xl px-4 py-2 rounded-3xl font-medium transition ${
              category === "individuals"
                ? "bg-(--background-primary-color) text-(--tertiary-text-color)"
                : "text-(--tertiary-text-size)"
            }`}
          >
            For Individuals
          </button>

          <button
            onClick={() => setCategory("businesses")}
            className={`text-2xl px-4 py-2 rounded-3xl font-medium transition ${
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
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
        {data.map((product: any, index: number) => (
          <div
            key={index}
            className={`flex-1 p-6 text-center ${
              index !== data.length - 1
                ? "md:border-r border-(--tertiary-color)"
                : ""
            }`}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-18 h-18 mx-auto mb-4"
            />

            <h3 className="font-semibold text-lg mb-2 text-(--secondary-text-color)">
              {product.title}
            </h3>

            <p className="text-(--grey-70) text-sm">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourproducts;
