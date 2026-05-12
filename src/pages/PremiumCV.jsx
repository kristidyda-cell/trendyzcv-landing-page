export default function PremiumCV() {
  const templates = [
    ["Executive Pro", "$0.00", "Free"],
    ["Modern Classic", "$0.00", "Free"],
    ["Corporate Blue", "$0.00", "Free"],
    ["Creative Edge", "$9.99", "Premium"],
    ["ATS Minimal", "$9.99", "Premium"],
    ["European Style", "$9.99", "Premium"],
    ["Canadian Format", "$9.99", "Premium"],
    ["Graduate Clean", "$9.99", "Premium"],
    ["Premium Black", "$9.99", "Premium"],
    ["Leadership Plus", "$9.99", "Premium"],
    ["American Format", "$14.99", "Premium"],
    ["Senior Executive", "$19.99", "Premium"],
  ];

  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
            CV Designs Shop
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Choose A Professional Visual CV Template
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            Select from modern CV templates. Free templates are marked as
            $0.00/free, while premium templates include Buy & Order buttons for
            future payment gateway integration.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map(([name, price, type], index) => (
            <div
              key={name}
              className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-cyan-400 transition"
            >
              <div className="bg-white rounded-2xl h-72 p-5 text-black">
                <div className="h-7 w-32 bg-slate-800 rounded mb-5"></div>
                <div className="h-3 w-full bg-slate-300 rounded mb-2"></div>
                <div className="h-3 w-10/12 bg-slate-300 rounded mb-6"></div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <div className="h-3 bg-cyan-400 rounded"></div>
                    <div className="h-3 bg-slate-300 rounded"></div>
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
                    <div className="h-3 bg-slate-300 rounded"></div>
                  </div>
                </div>

                <div
                  className={`mt-8 h-8 w-24 rounded-full ${
                    index % 3 === 0
                      ? "bg-cyan-400"
                      : index % 3 === 1
                      ? "bg-blue-400"
                      : "bg-emerald-400"
                  }`}
                ></div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold">{name}</h3>
                  <span className="text-cyan-400 font-bold whitespace-nowrap">
                    {price}
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  {type === "Free"
                    ? "Free ATS-safe CV template"
                    : "Premium manual CV design"}
                </p>

                <button className="mt-5 w-full bg-cyan-400 text-black py-3 rounded-xl font-bold hover:bg-cyan-300">
                  {type === "Free" ? "Use Free Template" : "Buy & Order"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="bg-white text-black rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-black mb-4">
            Checkout / Payment Gateway Preview
          </h2>

          <p className="text-gray-600 leading-7 mb-8">
            This shop page is prepared for future payment gateway integration.
            Premium CV templates can connect to a checkout link, while free
            templates remain available for $0.00/free.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-black text-xl">Selected Template</h3>
              <p className="text-gray-600 mt-2">Premium Visual CV</p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-black text-xl">Payment</h3>
              <p className="text-gray-600 mt-2">Stripe / Checkout ready</p>
            </div>

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-black">
              Proceed To Payment
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}