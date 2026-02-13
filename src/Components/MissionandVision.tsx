const MissionandVision = () => {
  return (
    <div className="py-14 mb-10 space-y-10">
      <h2 className="text-5xl text-(--secondary-text-color)">
        Mission & <span className="text-(--primary-color)">Vision</span>
      </h2>

      <p className="md:w-2/3 text-(--grey-70) text-xl">
        We envision being a leading force in the industry, driven by innovation,
        integrity, and inclusivity, creating a brighter financial future for
        individuals and businesses while maintaining a strong commitment to
        customer satisfaction and community development
      </p>

      <section className="space-y-20">
        {sectionData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE SIDE */}
            <div
              className="
                  w-full lg:w-1/2 relative 
                  bg-(--background-navbar-color) 
                  rounded-3xl
                  p-10
                  overflow-hidden
                "
            >
              {/* Background Decorative Image */}
              <img
                src={item.bgImage}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
              />

              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div
              className={`
                  w-full lg:w-1/2 space-y-6
                  lg:px-10
  
                  ${
                    item.reverse
                      ? "lg:border-r-2 lg:border-(--primary-color)"
                      : "lg:border-l-2 lg:border-(--primary-color)"
                  }
                `}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--secondary-text-color)">
                {item.title}
              </h2>

              <p className="text-(--grey-70) text-base sm:text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MissionandVision;

const sectionData = [
  {
    title: "Mission",
    desc: "At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.",
    image: "/src/assets/Images/mission-img.png",
    bgImage: "/src/assets/Images/bg-about.png",
    reverse: false,
  },
  {
    title: "Vision",
    desc: "Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.",
    image: "/src/assets/Images/vision-img.png",
    bgImage: "/src/assets/Images/bg-about.png",
    reverse: true,
  },
];
