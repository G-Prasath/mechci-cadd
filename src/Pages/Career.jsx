import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Careercard from "../Components/Career/Careercard";
import Cta from "../Components/About/Cta";

// Define validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid Email!")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Enter a 10 digit valid phone number")
    .required("Phone number is required"),
  subject: yup.string().required("Domain is required"),
  pdf: yup
    .mixed()
    .required("CV is required")
    .test("fileType", "PDF Only", (value) => {
      return value && value.type === "application/pdf"; // Directly checks the file type
    })
    .test("fileSize", "Limit For 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024; // 2MB size limit
    }),
  message: yup.string().required("Message is required"),
});

const Career = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
  setLoading(true);

  // Convert the form data to FormData format to handle file upload
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("subject", data.subject);
  formData.append("pdf", data.pdf); // Attach the file object directly
  formData.append("message", data.message);  

  try {
    // Remove the Content-Type header to allow FormData to handle it correctly
    await fetch("https://mechci-email.onrender.com/api/career-mail", {
      method: "POST",
      body: formData, // FormData object
    });

    reset();
  } catch (error) {
    console.error("Error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <div className="bg-image2">
        <div className="bg-gradient-to-r py-12 px-6 md:px-12 element-scroll">
          <div className="max-w-7xl mx-auto grid gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-4xl font-bold mb-4 text-white">
                The best place for your{" "}
                <span className=" text-white px-2 py-1 rounded">future</span>
              </h1>
              <p className="text-lg mb-6 text-white">
                We help you to find the best job to build your future and build
                a better future of digital era.
              </p>
              <Careercard />
            </div>
            <div className="flex justify-center items-center">
              <div className="card dark:bg-zinc-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        id="name"
                        autoComplete="off"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                      {errors.name && (
                        <p className="text-[#ff0000]">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        id="email"
                        autoComplete="off"
                        placeholder="E-Mail"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                      {errors.email && (
                        <p className="text-[#ff0000]">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("phone")}
                        type="text"
                        id="phone"
                        autoComplete="off"
                        placeholder="Contact I.D"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      />
                      {errors.phone && (
                        <p className="text-[#ff0000]">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <select
                        {...register("subject")}
                        id="subject"
                        className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                      >
                        <option value="">Domain</option>
                        <option value="others">CAESAR - II</option>
                        <option value="others">
                          ASPEN HYSYS (ESSENTIAL) & AUTO CAD
                        </option>
                        <option value="others">
                          STAAD Pro, TEKLA, Steel & Concrete Structure
                        </option>
                      </select>
                      {errors.subject && (
                        <p className="text-[#ff0000]">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-full">
                    <input
                      {...register("pdf")}
                      type="file"
                      id="pdf"
                      accept="application/pdf"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files[0]; // Extract the first file from the FileList
                        if (file) {
                          setValue("pdf", file, { shouldValidate: true }); // Set the file object directly
                          document.getElementById("file-name").textContent =
                            file.name; // Display the file name
                          clearErrors("pdf"); // Clear previous errors if the file is valid
                        }
                      }}
                    />
                    <label
                      htmlFor="pdf"
                      className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none cursor-pointer"
                    >
                      Choose CV
                      <span
                        id="file-name"
                        className="ml-2 text-sm text-gray-500"
                      ></span>
                    </label>
                    {errors.pdf && (
                      <p className="text-[#ff0000] w-full flex justify-end pr-5">
                        {errors.pdf.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      {...register("message")}
                      id="message"
                      autoComplete="off"
                      rows="4"
                      placeholder="How can we help you?"
                      className="mt-1 pl-2 pt-2 block w-full rounded-3xl border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                    ></textarea>
                    {errors.message && (
                      <p className="text-[#ff0000]">{errors.message.message}</p>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="button relative overflow-hidden h-12 px-8 rounded-md bg-[#3d3a4e] text-white border-none cursor-pointer"
                    >
                      <span className="button-content relative z-10">
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="w-5 h-5 mr-2 animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
                              ></path>
                            </svg>
                            Loading...
                          </span>
                        ) : (
                          "Request Now"
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 card bg-blue-200 rounded-lg py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-blue-400">
              <div>
                <h2 className="text-3xl text-white font-bold">1.9K+</h2>
                <p className="mt-2 text-white">Placements</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">1.02K+</h2>
                <p className="mt-2 text-white">Job Seekers Active</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">3K+</h2>
                <p className="mt-2 text-white">Incorporated Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
};

export default Career;
