"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, ClipboardCheck } from "lucide-react";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit with API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const res = await fetch("https://salam-evi.plantinart.com/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Map (only bottom 30%) */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] z-0 mt-20">
        <img
          src="/map.png"
          alt="map background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Light overlay on map area */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-white/40 z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-left pt-16 pb-10 px-6 lg:px-10 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-900">
           Get in Touch With Us Today
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl">
            We are here to answer your questions and provide the support you need. Reach out to us anytime, and let’s build something great together.
          </p>
        </div>

        {/* Main Section */}
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-6 lg:px-10 pb-16">
          {/* Red Form */}
          <div className="bg-[#D21C17] text-white rounded-2xl p-8 shadow-lg w-full lg:w-[55%]">
            <h3 className="text-2xl font-semibold mb-6">
              Connect With Us Today <br /> and Be Part of the Change
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 text-sm bg-transparent border border-white rounded-md placeholder-white text-white outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 text-sm bg-transparent border border-white rounded-md placeholder-white text-white outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="p-3 text-sm bg-transparent border border-white rounded-md placeholder-white text-white outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="p-3 text-sm bg-transparent border border-white rounded-md placeholder-white text-white outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-6 w-24 py-2 rounded-sm text-sm font-semibold transition ${
                  loading
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-white text-black tracking-wide font-nunito text-sm  hover:bg-gray-100"
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-green-100 text-sm">
                ✅ Your message has been sent successfully!
              </p>
            )}

            {error && (
              <p className="mt-4 text-yellow-200 text-sm">
                ⚠️ {error}
              </p>
            )}
          </div>

          {/* Contact Info Boxes */}
          <div className="w-full lg:w-[40%] flex flex-col space-y-4">
            {[
              {
                icon: MapPin,
                title: "Address",
                text: "Selam Evi, [Insert Office Address]",
              },
              {
                icon: Phone,
                title: "Phone Number",
                text: "+92 300 1234567",
              },
              {
                icon: Mail,
                title: "Email Address",
                text: "info@salam-evi.org",
              },
              {
                icon: ClipboardCheck,
                title: "Accountability",
                text: "We ensure transparency in all communications.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white shadow-md p-5 rounded-xl"
              >
                <div className="bg-[#22305B] text-white p-3 rounded-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
