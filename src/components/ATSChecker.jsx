export default function ATSChecker() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h3 className="text-3xl font-black">Instant ATS Score Checker</h3>
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm w-fit">
              Excellent Match
            </span>
          </div>

          <div className="flex justify-center my-10">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-[16px] border-cyan-400 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-black">92%</h2>
                <p className="text-gray-400 mt-2">ATS Score</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              ["Keyword Match", "95%", "w-[95%]", "bg-cyan-400"],
              ["ATS Formatting", "89%", "w-[89%]", "bg-green-400"],
              ["Skills Relevance", "90%", "w-[90%]", "bg-purple-400"],
            ].map(([label, value, width, color], index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>

                <div className="h-3 bg-white/10 rounded-full">
                  <div className={`h-3 ${width} ${color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
            ATS Compatibility Analysis
          </div>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Upload Your CV and Get Instant Improvement Suggestions
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            Users can upload their CV, check ATS compatibility, identify missing
            keywords, improve formatting, and download an optimized resume ready
            for job applications.
          </p>

          <div className="space-y-4 mt-10">
            {[
              "Instant ATS compatibility score",
              "Keyword targeting suggestions",
              "Formatting and readability analysis",
              "PDF download and job portal upload ready",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-7 h-7 bg-cyan-400 text-black rounded-full flex items-center justify-center font-bold shrink-0">
                  ✓
                </span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}