import React from "react";
import Home from "../pages/HomePage";
import ImpactSection from "./components/home/components/ImpactSection";
import ServicesGrid from "./components/home/components/ServicesGrid";
import ImpactPage from "./components/home/components/ImpactPage";
import HumanitarianEfforts from "./components/home/components/HumanitarianEfforts";
import ShapingBetterTomorrow from "./components/home/components/ShapingBetterTomorrow";
import StoriesSlider from "./components/home/components/StoriesSlider";
import LatestStories from "./components/home/components/LatestStories";
import FAQSection from "./components/home/components/FAQSection";

function App() {
  return (
    <div className="bg-white space-y-40 overflow-x-hidden">  {/* 👈 yaha spacing added */}

      <Home />
      <ImpactSection />
      <ServicesGrid />
      <ImpactPage />
      <HumanitarianEfforts initialCount={4} showLoadMore={false} />
      <ShapingBetterTomorrow />
      <StoriesSlider />
      <LatestStories showLoadMore={false} />
      <FAQSection />

    </div>
  );
}

export default App;
