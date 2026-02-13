import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Category = "individuals" | "businesses";

interface TestimonialItem {
  text: string;
  name: string;
}

const testimonials: Record<Category, TestimonialItem[]> = {
  individuals: [
    {
      text: "Enjoy easy and convenient access to your funds with our checking account options.",
      name: "Sara T",
    },
    {
      text: "Build your savings with competitive interest rates and flexible savings plans.",
      name: "Jhon D",
    },
    {
      text: "Realize your dreams with flexible loan and mortgage solutions.",
      name: "Emily G",
    },
    {
      text: "Best personal banking experience I’ve had.",
      name: "Chris P",
    },
  ],
  businesses: [
    {
      text: "Business banking tools helped us scale our company efficiently.",
      name: "Michael R",
    },
    {
      text: "Payroll and transaction management is extremely smooth.",
      name: "Olivia K",
    },
    {
      text: "Loan approval process was fast and transparent.",
      name: "David L",
    },
    {
      text: "Great support for growing startups and enterprises.",
      name: "Sophia W",
    },
  ],
};

const Testimonials = () => {
  const [category, setCategory] = useState<Category>("individuals");
  const [startIndex, setStartIndex] = useState(0);

  const data = testimonials[category];
  const visibleCount = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const changeCategory = (type: Category) => {
    setCategory(type);
    setStartIndex(0);
  };

  const visibleTestimonials = Array.from({ length: visibleCount }, (_, i) => {
    return data[(startIndex + i) % data.length];
  });

  return (
    <div className="py-14">
      <h2 className="text-6xl text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Testimonials</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-6 pt-6 pb-10">
        <p className="md:w-2/3 text-(--grey-70) text-xl">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and
          aspirations.
        </p>

        <div className="flex gap-2 bg-(--background-navbar-color) p-2 rounded-3xl text-(--secondary-text-color)">
          <button
            onClick={() => changeCategory("individuals")}
            className={`text-2xl px-4 py-2 rounded-3xl font-medium transition ${
              category === "individuals"
                ? "bg-(--background-primary-color) text-(--tertiary-text-color)"
                : "text-(--tertiary-text-size)"
            }`}
          >
            For Individuals
          </button>

          <button
            onClick={() => changeCategory("businesses")}
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

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full"
        >
          <ArrowLeft className="text-(--primary-color)" />
        </button>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className="bg-(--background-navbar-color) p-6 rounded-2xl text-center"
            >
              <div className="flex items-center gap-4 mb-4">
                <hr className="grow border-(--grey-30)" />
                <img
                  src="/src/assets/Images/quotes2.png"
                  className="w-10 h-10"
                  alt="quote"
                />
                <hr className="grow border-(--grey-30)" />
              </div>

              <p className="text-(--grey-70) text-sm">{item.text}</p>

              <h3 className="mt-4 font-semibold text-(--green-65)">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black p-3 rounded-full"
        >
          <ArrowRight className="text-(--primary-color)" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
