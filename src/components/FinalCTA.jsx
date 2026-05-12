export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-black">
          Ready To Build Your Career Success Platform?
        </h2>

        <p className="mt-5 text-lg max-w-3xl mx-auto">
          TRENDYZCV brings together AI CV generation, ATS scoring, premium CV
          writing, LinkedIn optimization, job search and employer hiring tools
          in one modern platform.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <button className="bg-black text-white px-8 py-4 rounded-xl font-bold">
            Generate Free CV
          </button>

          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold">
            Explore Pricing
          </button>
        </div>
      </div>
    </section>
  );
}