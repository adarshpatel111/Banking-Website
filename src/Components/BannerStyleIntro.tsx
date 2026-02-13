interface BannerStyleIntroProps {
  title: string;
  highlightText: string;
  description: string;
  mainImage: string;
  bgImage: string;
  reverse?: boolean;
}
const BannerStyleIntro = ({
  title,
  highlightText,
  description,
  mainImage,
  bgImage,
  reverse = false, // controls layout direction
}: BannerStyleIntroProps) => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20 mb-16 lg:mb-24 bg-(--background-navbar-color) text-(--secondary-text-color) p-6 sm:p-8 lg:p-10 rounded-3xl ">
      {/* Decorative Background */}
      {bgImage && (
        <img
          src={bgImage}
          alt="decorative background"
          className="absolute top-0 right-0 w-40 sm:w-56 lg:w-72 pointer-events-none"
        />
      )}
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
              <img
                src={mainImage}
                alt="banner"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          {/* Content Card */}
          <div
            className={`
    w-full lg:w-[55%] h-[45%]
    bg-(--background-screen-color)
    border border-(--tertiary-color)
    shadow-xl
    rounded-tl-3xl rounded-br-3xl

    p-6 sm:p-8 lg:p-10
    flex flex-col gap-4 sm:gap-5 relative z-10  -mt-12 sm:-mt-16 lg:mt-0 /* Desktop Overlap */ lg:-mr-24 xl:-mr-32 
          ${
            reverse
              ? "order-2 lg:order-1 lg:-ml-24 xl:-ml-32"
              : "order-2 lg:order-1 lg:-mr-24 xl:-mr-32"
          }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
              {title}
              {highlightText && (
                <span className="text-(--primary-color)">{highlightText}</span>
              )}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-(--grey-70) leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStyleIntro;
