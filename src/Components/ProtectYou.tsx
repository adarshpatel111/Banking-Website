import { ShieldCheck, Lock, Eye, Fingerprint } from "lucide-react";

const protectData = [
  {
    icon: ShieldCheck,
    title: "Secure Online Banking Platform",
    desc: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
  },
  {
    icon: Lock,
    title: "Multi-Factor Authentication",
    desc: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
  },
  {
    icon: Eye,
    title: "Fraud Monitoring",
    desc: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
  },
  {
    icon: Fingerprint,
    title: "Secure Mobile Banking",
    desc: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
  },
];

const ProtectYou = () => {
  return (
    <section className="py-14 mb-10 space-y-10">
      {/* Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
          How We <span className="text-(--primary-color)">Protect You</span>
        </h2>

        <p className="md:w-2/3 text-(--grey-70) text-base sm:text-lg lg:text-xl mt-3">
          At YourBank, we prioritize the security and confidentiality of your
          financial information.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-(--background-navbar-color) p-10 rounded-3xl">
        {protectData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                bg-(--background-screen-color)
                border border-(--tertiary-color)
                rounded-3xl
                p-6 sm:p-8
                shadow-md hover:shadow-lg
                transition
                flex flex-col gap-4
              "
            >
              {/* Icon + Title */}
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="p-2 bg-(--primary-color)/20 rounded-full">
                  <div className="p-3 bg-(--primary-color)/25 rounded-full">
                    <Icon className="text-(--primary-color)" size={26} />
                  </div>
                </div>

                <h3 className="text-center text-xl sm:text-2xl font-semibold text-(--secondary-text-color)">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-(--grey-70) text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProtectYou;
