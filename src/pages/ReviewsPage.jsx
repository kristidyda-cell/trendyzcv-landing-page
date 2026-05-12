export default function ReviewsPage() {
  const reviews = [
    {
      name: "Tony Munroe",
      time: "since about a month",
      title: "Great CV builder",
      text: "Easy to use site with nice features. Customer service was helpful and professional.",
    },
    {
      name: "Shaun Mende",
      time: "since about a month",
      title: "Best service ever",
      text: "Resume made easy and perfect. Very ATS friendly and simple to understand.",
    },
    {
      name: "Ameer Hamza",
      time: "since 26 days",
      title: "Extremely helpful",
      text: "The service helped improve my CV presentation and made it more recruiter-friendly.",
    },
    {
      name: "Trishana Hill",
      time: "since 11 days",
      title: "Professional result",
      text: "The CV writing service was clear, modern, and focused on career growth.",
    },
  ];

  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
          Reviews
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Check Out Our Latest Reviews
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
          A Trustpilot-style review section to build confidence and show customer
          satisfaction.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="bg-white text-black rounded-3xl p-8 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-black">Excellent Customer Feedback</h2>

              <div className="flex items-center gap-3 mt-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="bg-emerald-500 text-white w-9 h-9 rounded flex items-center justify-center font-black"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-600">
                  Based on <span className="font-bold">1,546 reviews</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl px-8 py-5">
              <p className="text-4xl font-black text-cyan-400">273+</p>
              <p className="text-gray-300">people creating CVs right now</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-slate-50 border border-gray-200 rounded-3xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="bg-emerald-500 text-white w-6 h-6 rounded flex items-center justify-center text-sm"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <h3 className="font-black">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.time}</p>

                <h4 className="font-black mt-5">{review.title}</h4>
                <p className="text-gray-600 mt-3 leading-7">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}