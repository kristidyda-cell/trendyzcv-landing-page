export default function FreeCVGenerator() {
  return (
    <section id="free-cv" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
          Free AI CV Generator
        </div>

        <h2 className="text-4xl sm:text-5xl font-black">
          Create Your Professional CV In Minutes
        </h2>

        <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
          Users can enter their career details, target role and skills, then instantly
          generate an ATS-ready CV with score preview, PDF download option and job
          portal upload readiness.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        <div className="bg-white text-black rounded-3xl p-6 md:p-8 h-full flex flex-col">
          <h3 className="text-3xl font-black mb-6">
            Start Building Your CV
          </h3>

          <div className="space-y-5 flex-1 flex flex-col">
            <input className="w-full border border-gray-200 rounded-xl px-5 py-4" placeholder="Full Name" />

            <input className="w-full border border-gray-200 rounded-xl px-5 py-4" placeholder="Target Job Title" />

            <select className="w-full border border-gray-200 rounded-xl px-5 py-4">
              <option>Select Industry</option>
              <option>Information Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Marketing</option>
              <option>Human Resources</option>
            </select>

            <textarea
              className="w-full border border-gray-200 rounded-xl px-5 py-4 flex-1 min-h-32"
              placeholder="Enter your skills, experience and achievements"
            ></textarea>

            <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-black hover:bg-cyan-300">
              Generate AI CV Free
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-3xl font-black">Generated CV Preview</h3>
            <span className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold w-fit">
              ATS Ready
            </span>
          </div>

          <div className="bg-white text-black rounded-2xl p-6">
            <div className="border-b border-gray-200 pb-5 mb-5">
              <h4 className="text-2xl font-black">Sarah Johnson</h4>
              <p className="text-gray-500">Frontend Developer</p>
            </div>

            <div className="space-y-5">
              <div>
                <h5 className="font-black text-cyan-600">Professional Summary</h5>
                <p className="text-gray-600 mt-2 text-sm leading-6">
                  Results-driven frontend developer with experience building modern,
                  responsive and user-focused web applications.
                </p>
              </div>

              <div>
                <h5 className="font-black text-cyan-600">Core Skills</h5>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["React", "JavaScript", "UI/UX", "API Integration", "Tailwind"].map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-black text-cyan-600">Experience</h5>
                <div className="h-3 bg-gray-200 rounded mt-3"></div>
                <div className="h-3 bg-gray-200 rounded mt-2 w-10/12"></div>
                <div className="h-3 bg-gray-200 rounded mt-2 w-8/12"></div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <button className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300">
              Download PDF
            </button>

            <button className="border border-white/20 py-4 rounded-xl font-bold hover:border-cyan-400">
              Upload To Job Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}