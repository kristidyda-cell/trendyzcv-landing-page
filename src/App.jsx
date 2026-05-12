import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FreeCVGenerator from "./components/FreeCVGenerator";
import ATSChecker from "./components/ATSChecker";
import Features from "./components/Features";
import Services from "./components/Services";
import Templates from "./components/Templates";
import JobPortal from "./components/JobPortal";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden pt-20">
      <Navbar />

      <main>
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>

        <div id="free-cv" className="scroll-mt-24">
          <FreeCVGenerator />
        </div>

        <ATSChecker />
        <Features />

        <div id="linkedin" className="scroll-mt-24">
          <Services />
        </div>

        <Templates />

        <div id="job-portal" className="scroll-mt-24">
          <JobPortal />
        </div>

        <div id="pricing" className="scroll-mt-24">
          <Pricing />
        </div>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}