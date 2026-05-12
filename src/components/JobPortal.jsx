export default function JobPortal() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "TechVision Ltd",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Digital Marketing Executive",
      company: "CareerBoost",
      location: "Dubai",
      type: "Hybrid",
    },
    {
      title: "HR Manager",
      company: "TalentBridge",
      location: "London",
      type: "Full Time",
    },
  ];

  return (
    <section id="job-portal" className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
            Job Portal
          </div>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight break-words">
            Search Jobs, Apply Faster & Let Employers Find You
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            A professional job portal where candidates can search and apply for jobs,
            while employers can post requirements, collect CVs and manage applicants
            from a simple dashboard.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-bold text-cyan-400">For Candidates</h3>
              <p className="text-gray-400 mt-2">
                Search jobs, upload CV and apply directly.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-bold text-cyan-400">For Employers</h3>
              <p className="text-gray-400 mt-2">
                Post jobs, review applicants and filter CVs.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white text-black rounded-3xl p-6">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3"
              placeholder="Search job title"
            />

            <button className="bg-black text-white px-6 py-3 rounded-xl font-bold">
              Search
            </button>
          </div>

          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 mb-4 hover:border-cyan-400 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.company}</p>

                  <div className="flex flex-wrap gap-3 mt-4 text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {job.location}
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}