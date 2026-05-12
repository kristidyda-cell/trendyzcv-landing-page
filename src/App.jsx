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
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <FreeCVGenerator />
      <ATSChecker />
      <Features />
      <Services />
      <Templates />
      <JobPortal />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}