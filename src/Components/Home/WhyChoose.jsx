import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-white  bg-gradient-to-br from-purple-700 to-pink-800">
      <div className="bg-image-left">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-white my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              Our Principles
            </span>
            <h2 className="block w-full bg-white bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Design Engineering Solutions Developed for Your Needs
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-white">
              Our engineering design tools empower you to create innovative
              solutions with ease. With intuitive interfaces and flexible
              customization options, you can bring your engineering concepts to
              life without the need for advanced technical skills.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md p-8 text-center shadow-sm hover:shadow-lg card">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-target"
                  width="24"
                  height="24"
                  color="white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="mt-6 text-white font-bold">Mission</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white text-justify">
                To provide innovative and high-quality engineering design
                solutions that meet the evolving needs of our clients in the oil
                and gas, chemical, petrochemical, and other industries. We aim
                to deliver exceptional value through our expertise, technology,
                and commitment to excellence.
              </p>
            </div>

            <div className="rounded-md shadow-sm hover:shadow-lg p-8 text-center card">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eye"
                  width="24"
                  height="24"
                  color="white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5c-7 0 -11 7 -11 7s4 7 11 7 11 -7 11 -7 -4 -7 -11 -7z"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="mt-6 text-white font-bold">Vision</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white text-justify">
                To be a globally recognized leader in engineering design and
                consultancy services, known for our dedication to quality,
                customer satisfaction, and continuous improvement. We strive to
                set new benchmarks in the industry through our innovative
                solutions and professional integrity.
              </p>
            </div>

            <div className="rounded-md shadow-sm hover:shadow-lg p-8 text-center card">
              <div
                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-star"
                  width="24"
                  height="24"
                  color="white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.6 3.45l1.25-7.25l-5.3-5.1l7.35-1.05l3.3-6.7l3.3 6.7l7.35 1.05l-5.3 5.1l1.25 7.25z"></path>
                </svg>
              </div>
              <h3 className="mt-6 text-white font-bold">Standard</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-white text-justify">
                We adhere to ISO standards and rigorous quality control,
                exceeding client expectations through personalized service,
                while continuously investing in innovative technologies. We
                uphold ethical standards, ensure safety and environmental
                compliance, and foster continuous employee development
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChoose;
