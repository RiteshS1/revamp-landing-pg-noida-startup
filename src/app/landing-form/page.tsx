"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import WhyUsCarousel from "@/components/WhyUsCarousel";
import Footer from "@/components/Footer";
import { appendSheetData } from "@/actions/googleSheet";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
};

const LandingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = { firstName: "", lastName: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        await appendSheetData(formData);
        setSubmitted(true);
      } catch (error) {
        console.error("Error appending data to Google Sheets:", error);
        alert("Failed to submit the form. Please try again later.");
      } finally {
        setLoading(false);
      }
      // Optionally send formData to your backend or append to Google Sheets here
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b to-[#96b7c8e5] from-white min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center py-8 px-4 sm:px-6 md:px-8 lg:px-14">
          <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wider text-center max-w-5xl leading-relaxed">
            Zenstreet is the only growth partner that enables therapists to
            boost income by up to <span className="font-bold"> ₹6,00,000</span> with
            no upfront fees or subscription costs ever!
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start  px-4 sm:px-6 md:px-8 lg:px-12 gap-0 ">
          <div className="w-full lg:w-[40%] max-w-xl mx-auto">
            <WhyUsCarousel showButtons={false} bg={"none"} />
          </div>

          <div className="w-full lg:w-[50%] max-w-2xl mx-auto md:mt-12">
            <div className="mx-auto px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 bg-white rounded-3xl shadow-lg">
              {!submitted ? (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-base sm:text-lg font-normal">
                      Join 57 & more fellow therapists today!
                    </h2>
                    <span className="bg-[#05A7ED78] text-[#007BA7] text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 font-poppins rounded-sm">
                      Beta
                    </span>
                  </div>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                      <div className="w-full sm:w-1/2">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full border border-[#A5A5A5] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div className="w-full sm:w-1/2">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full border border-[#A5A5A5] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-[#A5A5A5] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-[#A5A5A5] rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="pt-2">
                      <label className="block text-[#747474] text-sm sm:text-base mb-4">
                        How many years have you been practicing (optional)
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {["1 - 3", "4 - 10", "11 - 18", "18+"].map(
                          (label, idx) => (
                            <label
                              key={idx}
                              className="flex items-center space-x-2 text-sm sm:text-base cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="experience"
                                value={label}
                                checked={formData.experience === label}
                                onChange={handleChange}
                                className="accent-blue-600 w-4 h-4"
                              />
                              <span>{label}</span>
                            </label>
                          )
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        className="w-full sm:w-72 mt-2 bg-black text-white rounded-full py-3.5 sm:py-4 text-base sm:text-lg font-medium hover:opacity-90 transition-all cursor-pointer"
                      >
                        {loading ? (
                          <div className="flex items-center justify-center ">
                            <svg
                              className="animate-spin h-5 w-5 text-white"
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
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                              ></path>
                            </svg>
                          </div>
                        ) : (
                          "Sign up now!"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="max-w-2xl mx-auto px-6 sm:px-8 bg-white rounded-3xl flex flex-col justify-evenly gap-8 sm:gap-10">
                  <h2 className="text-lg sm:text-xl font-extrabold">
                    Congratulations on Taking the First Step!
                  </h2>
                  <div className="flex flex-col gap-6 sm:gap-8">
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      We have received your request,
                    </p>                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      You&apos;re now on your way to regaining control <br className="hidden sm:block" />
                      and supercharging your revenue.
                    </p>
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      Our{" "}
                      <span className="font-bold">
                        onboarding team will contact you
                      </span>{" "}
                      <br className="hidden sm:block" />
                      within the{" "}
                      <span className="font-bold">next 24 hours</span> with the
                      next steps.
                    </p>
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      If you have any questions or concerns <br className="hidden sm:block" /> in the
                      meantime,
                    </p>
                    <p className="text-sm sm:text-base text-black leading-relaxed">
                      please reach out to us at{" "}
                      <span className="font-bold text-black">
                        help@zenstreet.ai
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20">
        <Footer />
      </div>
    </>
  );
};

export default LandingForm;
