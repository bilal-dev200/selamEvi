export default function HealthcareCampSection() {
  return (
    <section className="bg-white flex items-center justify-center px-4 lg:px-12 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center relative">
        
        {/* Left Background Image Section */}
        <div className="relative text-white p-16 lg:p-10 -ml-12 ">
          {/* Background Image */}
          <img
            src="/slider1.png" 
            alt=""
            className="absolute inset-0 w-full h-full  object-cover"
          />

          {/* Red Overlay */}
          <div className="absolute inset-0 "></div>

          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Child in a <br/> healthcare camp.
            </h2>

            <p className="text-[10px] leading-relaxed mb-6 opacity-90">
              Eight-year-old Amal’s life changed overnight when a sudden illness left her
              fighting for survival. Her parents, already struggling to make ends meet, had no
              resources for hospital treatment or costly medicines. Each passing day
              weakened her condition, and hope seemed to fade.
            </p>

            <p className="text-[10px] leading-relaxed mb-8 opacity-90">
              But when Safan-Evi’s mobile healthcare unit reached her village, everything
              shifted. Amal received immediate medical attention, vital medicines,
              and renewed hope.
            </p>

            <button className="border border-white text-white px-6 py-2  hover:bg-white hover:text-red-700 transition  rounded-bl-[15px]">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/o-w1.png"
            alt="Healthcare Camp"
            className="rounded-3xl shadow-lg w-full  object-cover h-[500px] 
"
          />
        </div>
      </div>
    </section>
  );
}
