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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Map (only bottom 30%) */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] z-0">
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
       {/* Heading */}
<div className="text-left pt-16 pb-10 px-6 lg:px-10 max-w-7xl mx-auto">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
    Get in Touch With Us Today
  </h2>
  <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl">
    We are here to answer your questions and provide the support you
    need. Reach out to us anytime, and let’s build something great
    together.
  </p>
</div> 
        {/* Main Section */}
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-6 lg:px-10 pb-16">
          {/* Red Form */}
          <div className="bg-[#E7000B] text-white rounded-2xl p-8 shadow-lg w-full lg:w-[55%]">
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
                className="mt-6 w-24 bg-white text-[#E7000B] py-2 rounded-sm text-sm font-semibold hover:bg-gray-100 transition"
              >
                Submit
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-white text-sm">
                Form submitted successfully!
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
                text: "Selam Evi, [Insert Office Address]",
              },
              {
                icon: Mail,
                title: "Email Address",
                text: "Selam Evi, [Insert Office Address]",
              },
              {
                icon: ClipboardCheck,
                title: "Accountability",
                text: "Selam Evi, [Insert Office Address]",
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
