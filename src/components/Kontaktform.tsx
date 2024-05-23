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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); // Log form data before sending

        try {
            const response = await submitContactForm(formData);
            console.log('Response:', response); // Log response

        }
        catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="max-w-md mx-auto justify-center justify-items-center px-4 sm:px-0">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-8 flex flex-wrap -mx-3">
                    <div className="w-full sm:w-1/3 px-3 mb-6 sm:mb-0">
                        <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="firstName">
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
                        <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="lastName">
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
                        <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="company">
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
                        <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="email">
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
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="phone">
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
                    </div>
                </div>
                <div className="mb-4 px-3">
                    <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="subject">
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
                <div className="mb-6 px-3">
                    <label className="block text-fleks-blue-dark text-sm font-semibold mb-2" htmlFor="message">
                        Besked
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Besked"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
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
    );
}
