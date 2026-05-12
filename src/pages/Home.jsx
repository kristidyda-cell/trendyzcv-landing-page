import Hero from "../components/Hero";
import FreeCVGenerator from "../components/FreeCVGenerator";
import ATSChecker from "../components/ATSChecker";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FreeCVGenerator />
      <ATSChecker />
      <FinalCTA />
    </main>
  );
}