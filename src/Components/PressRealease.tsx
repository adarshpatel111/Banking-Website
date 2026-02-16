const pressData = [
  {
    title:
      "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction",
    location: "Mumbai, India",
    date: "06/11/2024",
    desc: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.",
    image: "/src/assets/Images/press-releases1.png",
  },
  {
    title:
      "YourBank Expands Branch Network with Opening of New Location in Chennai",
    location: "Surat, India",
    date: "12/11/2024",
    desc: "YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.",
    image: "/src/assets/Images/press-releases2.png",
  },
  {
    title:
      "YourBank Partners with Local Nonprofit to Support Financial Education Initiatives",
    location: "Delhi, India",
    date: "24/12/2024",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    image: "/src/assets/Images/press-releases3.png",
  },
  {
    title:
      "YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility",
    location: "Bangalore, India",
    date: "02 Jan 2026",
    desc: "YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.",
    image: "/src/assets/Images/press-releases4.png",
  },
];

const PressRealease = () => {
  return (
    <section className="py-14 mb-10 space-y-10">
      {/* Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
          Press <span className="text-(--primary-color)">Releases</span>
        </h2>

        <p className="md:w-2/3 text-(--grey-70) text-base sm:text-lg lg:text-xl mt-3">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pressData.map((item, index) => (
          <div
            key={index}
            className="
                bg-(--background-screen-color)
                border border-(--tertiary-color)
                rounded-3xl
                overflow-hidden
                shadow-md hover:shadow-xl
                transition
                flex flex-col
              "
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 flex flex-col grow">
              <h3 className="text-xl sm:text-2xl font-semibold text-(--secondary-text-color)">
                {item.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-(--grey-70)">
                <span className="px-3 py-1 rounded-full border border-(--tertiary-color) bg-(--background-screen-color)">
                  Loaction: {item.location}
                </span>
                <span className="px-3 py-1 rounded-full border border-(--tertiary-color) bg-(--background-screen-color)">
                  Date: {item.date}
                </span>
              </div>

              <p className="text-(--grey-70) text-sm sm:text-base leading-relaxed grow">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressRealease;
