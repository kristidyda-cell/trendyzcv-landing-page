export default function Features() {
  const features = [
    {
      title: "AI CV Builder",
      desc: "Generate ATS-ready resumes in minutes with a clean guided process.",
    },
    {
      title: "ATS Score Checker",
      desc: "Instant resume compatibility score with improvement suggestions.",
    },
    {
      title: "Job Portal",
      desc: "Candidates can search jobs and employers can post requirements.",
    },
    {
      title: "LinkedIn Optimization",
      desc: "Separate service page to improve visibility and personal branding.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black">
          Everything You Need To Get Hired
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          A professional AI-powered career acceleration platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center text-2xl mb-6">
              {index + 1}
            </div>

            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

            <p className="text-gray-400 leading-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}