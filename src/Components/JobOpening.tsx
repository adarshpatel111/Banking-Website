import { CheckCircle } from "lucide-react";

const jobData = [
  {
    title: "Relationship Manager",
    location: "India",
    department: "Retail Banking",
    about:
      "As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions.",
    requirements: [
      "Bachelor's degree in Business, Finance, or a related field",
      "Minimum of 3 years experience in banking sales or relationship management",
      "Proven track record of achieving sales targets",
      "Excellent interpersonal and negotiation skills",
      "Strong knowledge of banking products and services",
    ],
  },
  {
    title: "Customer Support Executive",
    location: "India",
    department: "Customer Service",
    about:
      "Provide customer support, resolve queries, and ensure excellent banking experience for clients.",
    requirements: [
      "Graduate in any field",
      "Strong communication skills",
      "Ability to handle customer complaints",
      "Basic banking knowledge",
    ],
  },
  {
    title: "Loan Officer",
    location: "India",
    department: "Loan Department",
    about:
      "Evaluate loan applications, guide customers, and process approvals efficiently.",
    requirements: [
      "Degree in Finance or Commerce",
      "Experience in loan processing",
      "Risk assessment knowledge",
      "Strong documentation skills",
    ],
  },
  {
    title: "Branch Operations Executive",
    location: "India",
    department: "Operations",
    about: "Manage daily branch operations and maintain service efficiency.",
    requirements: [
      "Operations experience preferred",
      "Leadership skills",
      "Good analytical ability",
      "Team management",
    ],
  },
];

const JobOpening = () => {
  return (
    <section className="py-14 mb-10 space-y-10">
      {/* Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-(--secondary-text-color)">
          Job <span className="text-(--primary-color)">Openings</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl mt-3 text-(--grey-70)">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service.
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {jobData.map((job) => (
          <div
            key={job.title}
            className="
              p-6 rounded-3xl
              border border-(--tertiary-color) 
              bg-(--background-screen-color)
              shadow-md hover:shadow-lg transition
              flex flex-col
              h-full
            "
          >
            {/* Content */}
            <div className="space-y-5 grow">
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-(--secondary-text-color)">
                {job.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-(--grey-70)">
                <p className="px-3 py-1 rounded-full border border-(--tertiary-color) bg-(--background-screen-color)">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="px-3 py-1 rounded-full border border-(--tertiary-color) bg-(--background-screen-color)">
                  <strong>Department:</strong> {job.department}
                </p>
              </div>

              {/* About */}
              <p className="text-(--grey-70) text-sm sm:text-base leading-relaxed">
                {job.about}
              </p>

              {/* Requirements */}
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex gap-3 text-(--grey-70)">
                    <CheckCircle
                      size={18}
                      className="text-(--primary-color) mt-1 shrink-0"
                    />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Button */}
            <button
              className="
                mt-6
                w-fit
                bg-(--primary-color)
                px-6 py-3
                rounded-full
                text-(--black)
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpening;
