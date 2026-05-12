export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]"></div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
              Free CV Builder
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Create A Professional CV With{" "}
              <span className="text-cyan-400">AI In Minutes</span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 leading-8">
              Build a professional, fully formatted, ATS-friendly CV from scratch
              or upload your old CV for instant improvement. Easy to use, fast,
              and ready for job applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#free-cv"
                className="bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-cyan-300 text-center"
              >
                Create My CV With AI
              </a>

              <a
                href="#upload-cv"
                className="border border-white/20 px-8 py-4 rounded-xl hover:border-cyan-400 text-center"
              >
                Upload Old CV
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-3xl font-black text-cyan-400">98%</h3>
                <p className="text-gray-400 text-sm mt-1">ATS Ready</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-3xl font-black text-cyan-400">4</h3>
                <p className="text-gray-400 text-sm mt-1">Easy Steps</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <h3 className="text-3xl font-black text-cyan-400">PDF</h3>
                <p className="text-gray-400 text-sm mt-1">Export Ready</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[32px] p-6 md:p-8 text-black shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black">Free CV Review</h2>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                Top 2%
              </span>
            </div>

            <div className="bg-slate-100 rounded-2xl p-5 mb-5">
              <div className="h-6 w-40 bg-slate-800 rounded mb-4"></div>
              <div className="h-3 w-full bg-slate-300 rounded mb-2"></div>
              <div className="h-3 w-10/12 bg-slate-300 rounded mb-5"></div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
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
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <button className="bg-cyan-400 text-black py-4 rounded-xl font-black">
                Create CV
              </button>

              <button className="bg-slate-900 text-white py-4 rounded-xl font-black">
                Upload CV
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="free-cv" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 scroll-mt-28">
        <div className="text-center mb-14">
          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
            Free AI CV Generator
          </div>

          <h2 className="text-4xl sm:text-5xl font-black">
            Build Your CV In 4 Easy Steps
          </h2>

          <p className="text-gray-400 mt-5 text-lg max-w-3xl mx-auto">
            Enter your details, add experience, choose qualifications, and add
            extra information. The frontend is prepared for future AI generation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 mb-16">
          {[
            ["1", "Your Details", "Add name, contact and target job."],
            ["2", "Work Experience", "Add company, role and achievements."],
            ["3", "Qualifications", "Add education and certificates."],
            ["4", "Additional Info", "Add skills, languages and summary."],
          ].map(([number, title, text]) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
            >
              <div className="w-14 h-14 bg-cyan-400 text-black rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-5">
                {number}
              </div>

              <h3 className="text-xl font-black">{title}</h3>
              <p className="text-gray-400 mt-3 leading-7">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <div className="bg-white text-black rounded-3xl p-6 md:p-8 h-full flex flex-col">
            <h3 className="text-3xl font-black mb-6">Start Building Your CV</h3>

            <div className="space-y-5 flex-1 flex flex-col">
              <input
                className="w-full border border-gray-200 rounded-xl px-5 py-4"
                placeholder="Full Name"
              />

              <input
                className="w-full border border-gray-200 rounded-xl px-5 py-4"
                placeholder="Target Job Title"
              />

              <select className="w-full border border-gray-200 rounded-xl px-5 py-4">
                <option>Select Industry</option>
                <option>Information Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Marketing</option>
                <option>Human Resources</option>
              </select>

              <textarea
                id="upload-cv"
                className="w-full border border-gray-200 rounded-xl px-5 py-4 flex-1 min-h-32"
                placeholder="Enter your skills, experience and achievements"
              ></textarea>

              <div className="grid sm:grid-cols-2 gap-4">
                <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-black hover:bg-cyan-300">
                  Generate AI CV Free
                </button>

                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black">
                  Upload Existing CV
                </button>
              </div>
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
                  <h5 className="font-black text-cyan-600">
                    Professional Summary
                  </h5>
                  <p className="text-gray-600 mt-2 text-sm leading-6">
                    Results-driven frontend developer with experience building
                    modern, responsive and user-focused web applications.
                  </p>
                </div>

                <div>
                  <h5 className="font-black text-cyan-600">Core Skills</h5>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["React", "JavaScript", "UI/UX", "API", "Tailwind"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
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

            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <button className="bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300">
                Export PDF
              </button>

              <button className="bg-white text-black py-4 rounded-xl font-bold">
                Export DOCX
              </button>

              <button className="border border-white/20 py-4 rounded-xl font-bold hover:border-cyan-400">
                Save To Drive
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
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
              ].map(([label, value, width, color]) => (
                <div key={label}>
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
              Free CV Review
            </div>

            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              Be In The Top 2% Of Applications
            </h2>

            <p className="text-gray-400 text-lg mt-6 leading-8">
              Only a small percentage of resumes make it past the first stage.
              This concept prepares the user flow for ATS compatibility,
              keyword improvement, upload review and optimized CV export.
            </p>

            <div className="space-y-4 mt-10">
              {[
                "Upload existing CV for review",
                "Check ATS compatibility score",
                "Improve missing keywords",
                "Export optimized CV as PDF or DOCX",
                "Upload final CV to job portal",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
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
    </main>
  );
}