const OurValues = () => {
  const OurValuesData = [
    {
      title: "Integrity",
      desc: "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
    },
    {
      title: "Customer Centricity",
      desc: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
    },
    {
      title: "Collaboration",
      desc: "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
    },
    {
      title: "Innovation",
      desc: "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
    },
  ];
  return (
    <div className="py-14 mb-10 space-y-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
        Our <span className="text-(--primary-color)">Values</span>
      </h2>
      <p className="md:w-2/3 text-(--grey-70) text-base sm:text-lg lg:text-xl mt-3">
        At YourBank, our values form the foundation of our organization and
        guide our actions. We believe in upholding the highest standards of
        integrity, delivering exceptional service, and embracing innovation.
        These values define our culture and shape the way we work together to
        achieve our goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {OurValuesData.map((item) => (
          <div
            key={item.title}
            className="border-l-2 border-(--primary-color) p-5 flex flex-col gap-4"
          >
            <span className="text-3xl md:text-4xl text-(--grey-30)">
              {item.title}
            </span>

            <p className="text-(--grey-70) text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
