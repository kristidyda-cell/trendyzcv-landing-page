export default function Templates() {
  const templates = [
    "Executive Pro",
    "Modern Classic",
    "Corporate Blue",
    "Creative Edge",
    "ATS Minimal",
    "European Style",
    "Canadian Format",
    "Graduate Clean",
    "Premium Black",
    "Leadership Plus",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black">Choose Your CV Template</h2>

        <p className="text-gray-400 mt-5 text-lg">
          Select from modern ATS-safe CV designs. Free and premium templates are available.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {templates.map((template, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-cyan-400 transition"
          >
            <div className="bg-white rounded-2xl h-56 p-4 text-black">
              <div className="h-6 w-24 bg-slate-800 rounded mb-4"></div>
              <div className="h-3 w-full bg-slate-300 rounded mb-2"></div>
              <div className="h-3 w-10/12 bg-slate-300 rounded mb-5"></div>

              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1 space-y-2">
                  <div className="h-3 bg-cyan-400 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                </div>

                <div className="col-span-2 space-y-2">
                  <div className="h-3 bg-slate-800 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                  <div className="h-3 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">{template}</h3>

                <span className="text-cyan-400 font-bold whitespace-nowrap">
                  {index < 3 ? "$0.00" : "$9.99"}
                </span>
              </div>

              <p className="text-gray-500 text-sm mt-2">
                {index < 3 ? "Free ATS-safe template" : "Premium manual CV design"}
              </p>

              <button className="mt-5 w-full bg-cyan-400 text-black py-3 rounded-xl font-bold hover:bg-cyan-300">
                {index < 3 ? "Use Free Template" : "Buy & Order"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}