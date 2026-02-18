import { useState, useEffect } from "react";
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
    { text: "Best personal banking experience I’ve had.", name: "Chris P" },
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
  const [visibleCount, setVisibleCount] = useState(3);

  const data = testimonials[category];

  /* ---------- Responsive Visible Count ---------- */
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
    <div className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Testimonials</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-6 pt-6 pb-8 md:pb-10">
        <p className="md:w-2/3 text-base sm:text-lg md:text-xl text-(--grey-70)">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and
          aspirations.
        </p>

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

      <div className="relative">
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-0 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-black p-2 sm:p-3 rounded-full z-30"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-(--primary-color)" />
        </button>
        <div
          className="
    relative
    rounded-2xl sm:rounded-3xl lg:rounded-none
    border border-(--tertiary-color) lg:border-0
    overflow-hidden
  "
        >
          <div
            className="
      relative
      overflow-hidden
      mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
      [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
    "
          >
            <div
              className={`grid gap-6 transition-all duration-500 px-4 sm:px-6 ${
                visibleCount === 1
                  ? "grid-cols-1"
                  : visibleCount === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {visibleTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="
            p-5 sm:p-6
            rounded-2xl
            text-center
            transition-all duration-300
            hover:scale-105 hover:z-20
          "
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <hr className="grow border-(--grey-30)" />
                    <img
                      src="/src/assets/Images/quotes2.png"
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      alt="quote"
                    />
                    <hr className="grow border-(--grey-30)" />
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-(--grey-70) transition-colors duration-300 hover:text-white">
                    {item.text}
                  </p>

                  <h3 className="mt-4 font-semibold text-sm sm:text-base md:text-lg text-(--green-65)">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-0 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-black p-2 sm:p-3 rounded-full z-30"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-(--primary-color)" />
        </button>

        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button onClick={prevSlide} className="bg-black p-3 rounded-full">
            <ArrowLeft className="w-5 h-5 text-(--primary-color)" />
          </button>

          <button onClick={nextSlide} className="bg-black p-3 rounded-full">
            <ArrowRight className="w-5 h-5 text-(--primary-color)" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
