"use client";

import React, { useState } from "react";
import DonationFormModal from "../../components/Form";

export default function Section5() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const projects = [
        {
            img: "/efforts1.png",
            title: "Ijteema-e-Qurbani 2025",
            description:
                "Your sacrifice brings nourishment and joy to families in need.",
            raised: 4500,
            goal: 10000,
        },
        {
            img: "/efforts2.png",
            title: "Earthquake Relief",
            description:
                "Together we can rebuild. Bring shelter, education, and life back.",
            raised: 4500,
            goal: 10000,
        },
        {
            img: "/efforts3.png",
            title: "Mobile Hospital Project",
            description:
                "Delivering essential medical care to underserved communities.",
            raised: 4600,
            goal: 10000,
        },
        {
            img: "/efforts4.png",
            title: "Winter Relief Drive",
            description:
                "Provide warmth and relief to families in crisis with winter aid.",
            raised: 4500,
            goal: 10000,
        },
        {
            img: "/efforts1.png",
            title: "Ijteema-e-Qurbani 2025",
            description:
                "Your sacrifice brings nourishment and joy to families in need.",
            raised: 4500,
            goal: 10000,
        },
        {
            img: "/efforts2.png",
            title: "Earthquake Relief",
            description:
                "Together we can rebuild. Bring shelter, education, and life back.",
            raised: 4500,
            goal: 10000,
        },
        {
            img: "/efforts3.png",
            title: "Mobile Hospital Project",
            description:
                "Delivering essential medical care to underserved communities.",
            raised: 4600,
            goal: 10000,
        },
        {
            img: "/efforts4.png",
            title: "Winter Relief Drive",
            description:
                "Provide warmth and relief to families in crisis with winter aid.",
            raised: 4500,
            goal: 10000,
        },
    ];

    return (
        <div className="bg-white py-20 px-6">
            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-900">
                    Our Ongoing <span className="text-red-600">Humanitarian</span> Efforts
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    These initiatives bring immediate relief and long-term change to those
                    who need it most.
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
                {projects.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.title}
                            className="h-48 w-full object-cover"
                        />

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-[12px] mb-4">{item.description}</p>

                            {/* Progress Info */}
                            <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                                <span>
                                    Raised: <span className="text-gray-900">${item.raised}</span>
                                </span>
                                <span>
                                    Goal: <span className="text-gray-900">${item.goal}</span>
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                                <div
                                    className="bg-red-600 h-2 rounded-full"
                                    style={{
                                        width: `${(item.raised / item.goal) * 100}%`,
                                    }}
                                ></div>
                            </div>

                            {/* Donate Button */}
                            <button
                                onClick={() => setIsModalVisible(true)}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-bl-[70px]  cursor-pointer"
                            >
                                Donate Now
                            </button>

                        </div>

                    </div>
                ))}
            </div>

            {/* ✅ Single Modal (used for all cards) */}
            <DonationFormModal
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
            />

        </div>
    );
}