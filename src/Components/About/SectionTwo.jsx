import React from "react";

const SectionTwo = () => {
  return (
    <div className="bg-image1 p-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h2 className="my-8 text-2xl font-bold text-[#040486] md:text-4xl">
            How we work?
          </h2>
          <p className="text-[#040486]">
            We follow our process to get you started as quickly as possible
          </p>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:bg-gray-700">
            <div className="relative space-y-8 py-12 p-8 text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="white"
                style={{ color: "white" }}
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                  class="rotate-path"
                ></path>
                <path d="M10 10l2 -2v8"></path>
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition">
                  Project Scoping
                </h5>
                <p className="text-gray-300 text-justify">
                  We work closely with clients to define project requirements,
                  identify key objectives, and establish a clear scope of work.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:bg-gray-700">
            <div className="relative space-y-8 py-12 p-8 text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="white"
                style={{ color: "white" }}
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                  class="rotate-path"
                ></path>
                <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Basic Engineering
                </h5>
                <p className="text-gray-300 text-justify">
                  We Conduct preliminary studies to assess technical and
                  economic feasibility. Develop design concepts and
                  specifications, identifying risks and mitigation strategies.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:bg-gray-700">
            <div className="relative space-y-8 py-12 p-8 text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="white"
                style={{ color: "white" }}
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                  class="rotate-path"
                ></path>
                <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1"></path>
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Conceptual Design
                </h5>
                <p className="text-gray-300 text-justify">
                  Generates and evaluates multiple design concepts, considering
                  factors like feasibility, cost-effectiveness, and
                  environmental impact.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:bg-gray-700">
            <div className="relative space-y-8 py-12 p-8 text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                color="white"
                style={{ color: "white" }}
                height="50"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                  class="rotate-path"
                ></path>
                <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
                <path d="M14 8v8"></path>
              </svg>
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                  Detailed Engineering
                </h5>
                <p className="text-gray-300 text-justify">
                  Develop engineering plans with detailed drawings and
                  specifications. Ensure compliance with regulations and
                  environmental standards throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
