import Pricing from "../components/Pricing";

export default function PricingPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
          Pricing
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Choose The Right Plan
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
          Free trial, monthly access and extended subscription options for
          candidates and employers.
        </p>
      </section>

      <Pricing />
    </main>
  );
}