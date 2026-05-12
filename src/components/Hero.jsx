export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
          AI-Powered Career Platform
        </div>

        <h2 className="text-5xl lg:text-6xl font-black leading-tight">
          Build ATS-Optimized CVs &{" "}
          <span className="text-cyan-400">Get Hired Faster</span>
        </h2>

        <p className="text-gray-400 text-lg mt-6 leading-8">
          AI CV Builder, ATS Score Checker, Smart Job Matching, Premium Resume
          Templates, Job Portal and LinkedIn Optimization — all in one modern
          employment platform.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button className="bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-300">
            Generate Free CV
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl hover:border-cyan-400">
            Upload Existing CV
          </button>
        </div>

        <div className="flex gap-10 mt-12">
          <div>
            <h3 className="text-4xl font-black text-cyan-400">98%</h3>
            <p className="text-gray-400">ATS Ready</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-cyan-400">10K+</h3>
            <p className="text-gray-400">HR Outreach</p>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">ATS Score Preview</h3>
          <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
            Excellent
          </span>
        </div>

        <div className="flex justify-center my-8">
          <div className="w-44 h-44 rounded-full border-[14px] border-cyan-400 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-black">92%</h2>
              <p className="text-gray-400 mt-2">ATS Match</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {[
            ["Keyword Optimization", "95%", "w-[95%]", "bg-cyan-400"],
            ["Formatting", "89%", "w-[89%]", "bg-green-400"],
            ["Skills Match", "90%", "w-[90%]", "bg-purple-400"],
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
    </section>
  );
}