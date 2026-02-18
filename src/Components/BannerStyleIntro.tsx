interface BannerStyleIntroProps {
  title: string;
  highlightText: string;
  description: string;
  mainImage: string;
  bgImage: string;
}

const BannerStyleIntro = ({
  title,
  highlightText,
  description,
  mainImage,
  bgImage,
}: BannerStyleIntroProps) => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-12 lg:mt-20 mb-16 lg:mb-24">
      <div className="relative bg-(--background-navbar-color) text-(--secondary-text-color) rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
        {/* Decorative Background */}
        {bgImage && (
          <img
            src={bgImage}
            alt="decorative background"
            className="absolute top-0 right-0 w-32 sm:w-48 lg:w-72 pointer-events-none opacity-60"
          />
        )}

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* TEXT CARD (Left on desktop, below on mobile) */}
            <div
              className={`
                w-full lg:w-[55%]
                bg-(--background-screen-color)
                border border-(--tertiary-color)
                shadow-xl
                rounded-tl-3xl rounded-br-3xl
                p-6 sm:p-8 lg:p-10
                flex flex-col gap-4 sm:gap-6
                relative z-10

                /* Overlap only on desktop */
                lg:-mr-24 xl:-mr-32
              `}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold leading-tight wrap-break-word">
                {title}
                {highlightText && (
                  <span className="text-(--primary-color)">
                    {highlightText}
                  </span>
                )}
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-(--grey-70) leading-relaxed max-w-prose wrap-break-word">
                {description}
              </p>
            </div>

            {/* IMAGE (Right on desktop, top on mobile) */}
            <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
              <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <img
                  src={mainImage}
                  alt="banner"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStyleIntro;
