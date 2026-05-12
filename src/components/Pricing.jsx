export default function Pricing() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Basic CV Builder",
        "ATS Score Preview",
        "3-Day Job Portal Access",
      ],
    },
    {
      title: "Professional",
      price: "$29",
      features: [
        "Premium CV Templates",
        "AI Optimization",
        "1-Month Access",
      ],
    },
    {
      title: "Enterprise",
      price: "$99",
      features: [
        "3-Month Access",
        "Employer Tools",
        "Future API Ready",
      ],
    },
  ];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black">Pricing Plans</h2>

        <p className="text-gray-400 mt-5">
          Free trial, monthly and 3-month subscription options.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-3xl p-10 ${
              index === 1
                ? "bg-cyan-400 text-black scale-105"
                : "bg-white text-black"
            }`}
          >
            <h3 className="text-3xl font-black">{plan.title}</h3>

            <h2 className="text-6xl font-black mt-6">{plan.price}</h2>

            <div className="space-y-4 mt-10">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <span>✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 w-full bg-black text-white py-4 rounded-xl font-bold">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}