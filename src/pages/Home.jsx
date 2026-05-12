import Hero from "../components/Hero";
import FreeCVGenerator from "../components/FreeCVGenerator";
import ATSChecker from "../components/ATSChecker";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <div id="free-cv" className="scroll-mt-28">
        <FreeCVGenerator />
      </div>

      <ATSChecker />
      <FinalCTA />
    </main>
  );
}