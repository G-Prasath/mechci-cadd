import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Cta from "../Components/About/Cta";
import countryCodes from "../data/CountryCode";

const schema = yup.object().shape({
  Name: yup.string().required("Name!"),
  Email: yup.string().email("Valid Email!").required("Email!"),
  Phone: yup
    .string()
    .matches(/^\d+$/, "Enter a valid phone number")
    .required("Phone number is required!"),
  Enquiry: yup.string().required("Please select an option!"),
  Message: yup.string().required("Define your need!"),
});

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);

    try {
    console.log(data);

      // Replace with your actual API call
      await fetch("https://mechci-email.onrender.com/api/home-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
       reset();
      // Handle successful response
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <div className="bg-contact">
      <div className="pt-[5%] pb-[10%] flex items-center justify-center">
        <div className="card dark:bg-zinc-800 shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <div className=" flex flex-col items-center justify-center pt-3 px-4 sm:px-6 lg:px-8  text-foreground">
            <h2 className="text-3xl font-extrabold text-center text-[#040486]">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="mt-2 text-center text-muted-foreground text-[#26355D]">
              We will contact you again after receiving your request within 24h.
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4">
              <div className="ltspc text-3xl max-sm:text-xl font-bold text-[#040486] ">
                ( +91 ) 55356 46868
              </div>
              <div className="text-center">
                <p className="text-lg text-[#26355D]">
                  E-Mail: info@mechci.com
                </p>
                <p className="text-lg text-[#26355D] mb-10">
                  Location: Orchid Center, 2nd Floor South, Aminjikarai,
                  Chennai-600 029, Tamilnadu, India.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("Name")}
                  type="text"
                  placeholder="Name"
                  id="Name"
                  autoComplete="off"
                  className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
                {errors.Name && (
                  <p className="text-red-400">{errors.Name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("Email")}
                  type="email"
                  id="Email"
                  autoComplete="off"
                  placeholder="E-Mail"
                  className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
                {errors.Email && (
                  <p className="text-red-400">{errors.Email.message}</p>
                )}
              </div>

              <div className="">
                <div className="w-full flex items-center gap-x-2">
                  <select
                    {...register("CountryCode")}
                    className="p-3 w-[100px] border border-zinc-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:text-white"
                  >
                    {countryCodes.map((item, index) => (
                      <option value={item.code} key={index}>
                        {item.code}
                      </option>
                    ))}
                  </select>

                  <input
                    {...register("Phone")}
                    type="text"
                    id="Phone"
                    autoComplete="off"
                    placeholder="Contact I.D"
                    className="mt-1 block w-full rounded-r-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                  />
                </div>
                {errors.Phone && (
                  <p className="text-red-400">{errors.Phone.message}</p>
                )}
              </div>

              <div>
                <select
                  {...register("Enquiry")}
                  id="Enquiry"
                  className="mt-1 block w-full rounded-full p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                >
                  <option value="">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
                {errors.Enquiry && (
                  <p className="text-red-400">{errors.Enquiry.message}</p>
                )}
              </div>
            </div>
            <div>
              <textarea
                {...register("Message")}
                id="Message"
                rows="4"
                placeholder="How can we help you?"
                autoComplete="off"
                className="mt-1 pl-2 pt-2 block w-full rounded-3xl border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
              ></textarea>
              {errors.Message && (
                <p className="text-red-400">{errors.Message.message}</p>
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
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577.7182536359563!2d80.22029520383322!3d13.073203060892071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e8b0d91553%3A0xe1312e2a11772ab8!2sOrchid%20Center!5e0!3m2!1sen!2sin!4v1720434846532!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <Cta />
    </div>
  );
};

export default ContactUs;
