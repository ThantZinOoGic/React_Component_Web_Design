import "./App.css";
import NavSection from "./NavSection";
import HomeSection from "./HomeSection";
import FeatureSectionOne from "./feature/FeatureSection1";
import FeatureTwo from "./feature/FeatureSection2";
import FeatureThree from "./feature/FeatureSection3";
import PriceingSectionOne from "./pricing/PriceingSection1";
import PricingSectiontwo from "./pricing/PricingSection2";
import Feedback from "./about/Feedback";
import About from "./about/About";
import NewsSection from "./about/NewsSection";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="">
      <NavSection />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <HomeSection />
        <FeatureSectionOne />
        <FeatureTwo />
        <FeatureThree />
        <PriceingSectionOne />
        <PricingSectiontwo />
        <Feedback />
        <About />
        <NewsSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
