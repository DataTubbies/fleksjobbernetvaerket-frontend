import { useState } from "react";
import { submitContactForm } from "@/api/wp-rest";

export default function Kontaktform() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(\+45)?\s?\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Indtast en gyldig emailadresse",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    }

    if (name === "phone") {
      if (!validatePhone(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Indtast et gyldigt dansk telefonnummer",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "",
        }));
      }
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (errors.email || errors.phone) {
      alert("Ret venligst fejlene i formularen før du sender.");
      return;
    }

    console.log("Form Data:", formData); // Log form data before sending

    try {
      const response = await submitContactForm(formData);
      console.log("Response:", response); // Log response
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-0 justify-content ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-xl"
        >
          <div className="mb-8 flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-2 mb-6 sm:mb-0">
              <label
                className="block text-fleks-blue-dark font-semibold mb-2"
                htmlFor="firstName"
              >
                Fornavn
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-fleks-blue-dark leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Fornavn"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
              <label
                className="block text-fleks-blue-dark font-semibold mb-2"
                htmlFor="lastName"
              >
                Efternavn
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Efternavn"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full sm:w-1/3 px-3">
              <label
                className="block text-fleks-blue-dark font-semibold mb-2"
                htmlFor="company"
              >
                Virksomhed
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company"
                type="text"
                placeholder="Virksomhed"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap -mx-3">
            <div className="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
              <label
                className="block text-fleks-blue-dark font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div className="w-full sm:w-1/2 px-3">
              <label
                className="block text-fleks-blue-dark font-semibold mb-2"
                htmlFor="phone"
              >
                Telefon
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-fleks-blue-dark leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Telefon"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs italic">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-fleks-blue-dark font-semibold mb-2"
              htmlFor="subject"
            >
              Emne
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Emne"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-10">
            <label
              className="block text-fleks-blue-dark font-semibold mb-2"
              htmlFor="message"
            >
              Besked
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ height: "10rem" }} // Juster højden efter behov
            />
          </div>

          <div className="flex items-center align-middle justify-center px-3">
            <button
              className="bg-fleks-blue-dark hover:bg-fleks-blue text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="text-center py-20">
        <h1 className="text-xl">
          HjælpeLinks – kom i kontakt med netværket som både privat og
          ikke-private
        </h1>
        <p className="text-fleks-blue-dark">
          <a href=" https://www.linkedin.com/company/fleksjob">
            Fleksjobber Netværket (side) på LinkedIn
          </a>
        </p>
        <p className="text-fleks-blue-dark">
          <a href=" https://www.linkedin.com/groups/3973090/">
            Fleksjobber Netværket (gruppe) på LinkedIn
          </a>
        </p>
      </div>
    </>
  );
}
