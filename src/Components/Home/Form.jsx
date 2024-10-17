import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"; // Import Axios
import countryCodes from "../../data/CountryCode";

// Validation schema using Yup
const schema = yup.object().shape({
  Name: yup.string().required("Name!"),
  Email: yup.string().email("Enter a valid Email!").required("Email!"),
  Phone: yup
    .string()
    .matches(/^\d+$/, "Enter a valid phone number")
    .required("Number is required"),
  Enquiry: yup
    .string()
    .oneOf(
      ["service1", "service2", "service3"],
      "Kindly select one as enquiry choice"
    )
    .required("Select an Option"),
  Message: yup.string().required("Define your need"),
});

function Form() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Replace with your actual API call
      await fetch("https://mechci-email.onrender.com/api/home-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // Handle successful response
      reset();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen working flex items-center justify-center p-6">
      <div className="max-w-5xl card w-full flex flex-col md:flex-row ">
        {/* Contact Details Section */}
        <div className="md:w-1/2 p-10 text-white rounded-lg md:rounded-r-none">
          <h2 className="text-xl text-[#040486] font-bold mb-4">
            Hotline 24/7
          </h2>
          <Link
            to="tel:+919340012200"
            className="text-3xl font-bold mb-5 text-[#fff]"
          >
            (+91) 44444 55555
          </Link>
          <p className="mb-4 text-black mt-5">
            <strong className="text-[#040486]">Address:</strong> <br />
            Orchid Center, 2nd Floor South, <br />
            71st Kannappan Street, <br />
            Nelson Manickam Road, <br />
            Aminjikarai, <br />
            Chennai-600 029,
          </p>
          <p className="mb-4 text-black">
            <strong className="text-[#040486]">Email:</strong> <br />
            info@mechci.com
          </p>
          <p className="mb-4 text-black">
            <strong className="text-[#040486]">Work Hour:</strong> <br />
            Mon - Sat: 9:00 - 18:00
          </p>
          <Link
            to="https://maps.app.goo.gl/1ZQZBFrWazJdBhQZ8"
            target="_blank"
            className="text-[#fff] font-semibold underline"
          >
            GET DIRECTION
          </Link>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-6 text-[#040486]">
            Request Free Consultancy
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <input
              {...register("Name")}
              type="text"
              autoComplete="off"
              placeholder="Name *"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:mb-3"
            />
            {errors?.Name && (
              <p className="text-red-400">{errors.Name?.message}</p>
            )}

            {/* Email Input */}
            <input
              {...register("Email")}
              type="email"
              autoComplete="off"
              placeholder="Email *"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors?.Email && (
              <p className="text-red-400">{errors.Email?.message}</p>
            )}

            {/* Country Code and Phone Number Input */}
            <div className="flex items-center gap-x-2">
              <select
                {...register("CountryCode")}
                className="p-3 w-[100px] border border-zinc-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={`${country.code}`}>
                    {country.code}
                  </option>
                ))}
              </select>

              <input
                {...register("Phone")}
                type="text"
                autoComplete="off"
                placeholder="Contact Number *"
                className="w-full p-3 border border-zinc-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors?.Phone && (
              <p className="text-red-400">{errors.Phone?.message}</p>
            )}

            {/* Enquiry Dropdown */}
            <select
              {...register("Enquiry")}
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Enquiry about</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            {errors?.Enquiry && (
              <p className="text-red-400">{errors.Enquiry?.message}</p>
            )}

            {/* Message Textarea */}
            <textarea
              {...register("Message")}
              placeholder="Write your inquiry here"
              autoComplete="off"
              className="w-full p-3 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
            {errors?.Message && (
              <p className="text-red-400">{errors.Message?.message}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-zinc-800"
            >
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
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
