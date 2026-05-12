import Templates from "../components/Templates";

export default function PremiumCV() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
            Premium Visual CV Shop
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Choose A Professional Visual CV Template
          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            Select from modern premium CV templates and place an order for manual
            professional CV preparation by the TRENDYZCV team.
          </p>
        </div>
      </section>

      <Templates />

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="bg-white text-black rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-black mb-4">
            Checkout / Payment Link Preview
          </h2>

          <p className="text-gray-600 leading-7 mb-8">
            This page is prepared as a shop-style layout. In the functional stage,
            each premium CV template can connect to a payment gateway or checkout
            link.
          </p>

          <button className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-black">
            Proceed To Payment
          </button>
        </div>
      </section>
    </main>
  );
}