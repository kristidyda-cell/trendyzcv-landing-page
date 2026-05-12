export default function PricingPage() {
  const packages = [
    {
      title: "CV Writing",
      price: "£69",
      subtitle: "Professional CV",
      features: ["1-hour consultation", "ATS-friendly CV", "Recruiter-focused layout"],
    },
    {
      title: "CV + Cover Letter",
      price: "£99",
      subtitle: "Most Popular",
      features: ["Professional CV", "Cover letter", "Recruiter-ready documents"],
    },
    {
      title: "CV + LinkedIn",
      price: "£149",
      subtitle: "Career Branding",
      features: ["Professional CV", "LinkedIn optimization", "Keyword positioning"],
    },
    {
      title: "Full Package",
      price: "£199",
      subtitle: "Complete Career Kit",
      features: ["CV", "Cover letter", "LinkedIn", "Interview guidance"],
    },
  ];

  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
          Prices & Packages
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Take The Next Step In Your Career
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
          Choose from professional CV writing, cover letter, LinkedIn and full
          career support packages.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-3xl p-8 ${
                index === 1
                  ? "bg-cyan-400 text-black"
                  : "bg-white text-black"
              }`}
            >
              <p className="text-sm font-bold opacity-70">{item.subtitle}</p>

              <h2 className="text-3xl font-black mt-3">{item.title}</h2>

              <h3 className="text-5xl font-black mt-6">{item.price}</h3>

              <p className="text-sm mt-2 opacity-70">2-day turnaround</p>

              <div className="space-y-4 mt-8">
                {item.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full bg-black text-white py-4 rounded-xl font-bold">
                Order
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black">Our Packages</h2>
          <p className="text-gray-400 mt-4">
            Compare CV Writing, CV + Cover Letter, CV + LinkedIn and full
            package options.
          </p>

          <div className="grid md:grid-cols-4 gap-5 mt-10">
            {packages.map((item) => (
              <div key={item.title} className="bg-white text-black rounded-2xl p-6">
                <h3 className="font-black text-xl">{item.title}</h3>
                <p className="text-3xl font-black mt-4">{item.price}</p>
                <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-bold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}