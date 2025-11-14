"use client";
import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import { useServiceStore } from "../../../store/Servicestore";
import { useRouter } from "next/navigation";

export default function Footer() {
  const { services, fetchServices, loading, setSelectedService } = useServiceStore();
  const router = useRouter();

  React.useEffect(() => {
    if (services.length === 0) fetchServices();
  }, [services, fetchServices]);

  const handleServiceClick = (service) => {
    setSelectedService(service);        // ✅ store me set
    router.push(`/services/${service.slug}`); // ✅ navigate to detail page
  };

  return (
    <footer className="bg-[#b10000] text-gray-800 pb-9 ">
      <div className="bg-white mx-4 md:mx-10 lg:mx-10 pt-12 pb-6 shadow-sm -mt-6">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          {/* Logo + Social */}
          <div className="flex flex-col items-start space-y-4">
            <img src="/footer.png" alt="Selam Evi Yardım Derneği" className="w-40 object-contain" />
            <div className="flex space-x-4 mt-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <Icon key={i} className="w-5 h-5 text-gray-700 hover:text-[#b10000]" />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About us", path: "/about" },
                { name: "Campaigns", path: "/campaigns" },
                { name: "Services", path: "/services" },
                { name: "Contact us", path: "/contact" },
                { name: "Donation", path: "/donate" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="hover:text-[#b10000] cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Our Services</h3>
            {loading ? (
              <p className="text-sm text-gray-500">Loading...</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="hover:text-[#b10000] cursor-pointer text-left w-full"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
            <ul className="text-sm space-y-2">
              <li>
                <span className="font-medium text-gray-800">Address:</span> Abc Road 123 Street
              </li>
              <li>
                <span className="font-medium text-gray-800">Phone:</span> +44 1478-8901
              </li>
              <li>
                <span className="font-medium text-gray-800">Email:</span> info@selamevi.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p className="mb-2 md:mb-0">Copyright 2025 © BAITUSSALAM USA</p>
            <p>Terms & Conditions | Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
