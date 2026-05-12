export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black">
          Professional CV Writing & LinkedIn Optimization
        </h2>

        <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
          In addition to AI CV generation, TRENDYZCV also provides manual
          expert-led CV writing and LinkedIn profile optimization services
          for professionals who want a stronger personal brand.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-cyan-400 transition">
          <div className="inline-block bg-cyan-400/10 text-cyan-300 px-5 py-2 rounded-full mb-6">
            Manual Service
          </div>

          <h3 className="text-3xl font-black mb-5">
            In-House Professional CV Writing
          </h3>

          <p className="text-gray-400 leading-8 mb-8">
            Users can choose from in-house CV formats and templates, place an
            order through checkout, and receive a professionally prepared CV
            tailored to their experience, target role and industry.
          </p>

          <div className="space-y-4">
            {[
              "ATS-compliant and recruiter-friendly CV writing",
              "Industry-specific structure and keyword optimization",
              "Two rounds of revisions based on client feedback",
              "Manual preparation by the TRENDYZCV team",
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="w-7 h-7 bg-cyan-400 text-black rounded-full flex items-center justify-center font-bold shrink-0">
                  ✓
                </span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-300">
            View CV Writing Packages
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-cyan-400 transition">
          <div className="inline-block bg-blue-500/10 text-blue-300 px-5 py-2 rounded-full mb-6">
            LinkedIn Profile
          </div>

          <h3 className="text-3xl font-black mb-5">
            LinkedIn Profile Optimization
          </h3>

          <p className="text-gray-400 leading-8 mb-8">
            A dedicated service page for improving LinkedIn visibility,
            recruiter reach, personal branding and decision-maker engagement
            in the user’s targeted market.
          </p>

          <div className="space-y-4">
            {[
              "Professional headline and About section enhancement",
              "Keyword optimization for recruiter search visibility",
              "Personal brand positioning and profile storytelling",
              "Networking and outreach strategy guidance",
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="w-7 h-7 bg-blue-400 text-black rounded-full flex items-center justify-center font-bold shrink-0">
                  ✓
                </span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200">
            Optimize My LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}