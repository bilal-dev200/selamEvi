import React from "react";

function InforSections() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
        {/* Left Text Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center md:text-left">
            Lorem Ipsum is simply
          </h1>

          <p className="text-gray-800 mb-4 text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-justify">
            My journey in real estate began with a passion for connecting people with
            <br />   their dream homes. Starting in [Year],
          </p>

          <p className="text-gray-800 mb-4  text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-justify">
            Printers in the 1500s scrambled the words from Cicero's "De Finibus
            Bonorum et Malorum" after mixing
            <br /> the words in each sentence.
            The familiar "lorem ipsum dolor sit amet" text emerged when 16th-century
            <br /> printers adapted Cicero's original work, beginning with the phrase
            "dolor sit amet consectetur."
            <br />
            They abbreviated "dolorem" (meaning "pain") to "lorem," which carries
            no meaning in Latin. "Ipsum"<br /> translates to "itself," and the text
            frequently includes phrases such as "consectetur adipiscing elit" and
            "ut  <br />labore et dolore." These Latin fragments, derived from Cicero's
            philosophical treatise, were rearranged to <br />create the standard dummy
            text that has become a fundamental tool in design and typography
            across<br /> generations.
            <br />
            The short answer is that lorem ipsum text doesn't actually "say"
            anything meaningful. It's deliberately<br /> scrambled Latin that doesn't
            form coherent sentences. While it comes from Cicero's "De Finibus
            Bonorum <br /> et Malorum," the text has been modified so extensively that
            it's nonsensical. Printers in the 1500s <br /> scrambled the words from
            Cicero's "De Finibus Bonorum et Malorum" after mixing the words in
            each <br /> sentence. The familiar "lorem ipsum dolor sit amet" text emerged
            when 16th-century printers adapted <br /> Cicero's original work, beginning
            with the phrase "dolor sit amet consectetur."
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
          <img
            src="/b-d2.png"
            alt="Solar panels"
            className="w-[435px] h-[180px] object-cover " />
          <img
            src="/news2.png"
            alt="News"
            className="w-[435px] h-[180px] object-cover " />
          <img
            src="/b-d1.png"
            alt="Building"
            className="w-[435px] object-cover " />
        </div>
      </div>
    </div>
  );
}

export default InforSections;
