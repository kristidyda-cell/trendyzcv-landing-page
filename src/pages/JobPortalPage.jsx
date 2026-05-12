import JobPortal from "../components/JobPortal";

export default function JobPortalPage() {
  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
        <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-5 py-2 rounded-full mb-6">
          Job Portal
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Search Jobs Or Post Job Requirements
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
          A separate job portal concept for candidates and employers, including
          job search, CV upload, employer posting and applicant management.
        </p>
      </section>

      <JobPortal />
    </main>
  );
}