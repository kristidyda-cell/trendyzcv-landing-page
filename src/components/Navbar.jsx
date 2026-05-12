export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-black text-cyan-400">
          TRENDYZCV.COM
        </a>

        <div className="hidden lg:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#free-cv" className="hover:text-cyan-400 transition">Free CV Review</a>
          <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#job-portal" className="hover:text-cyan-400 transition">Job Portal</a>
          <a href="#linkedin" className="hover:text-cyan-400 transition">LinkedIn</a>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-gray-300 hover:text-cyan-400 transition">
            Login
          </button>

          <button className="bg-cyan-400 text-black px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-300 transition">
            Post Job Free
          </button>
        </div>

        <a
          href="#free-cv"
          className="lg:hidden bg-cyan-400 text-black px-4 py-2 rounded-xl text-sm font-bold"
        >
          Start
        </a>
      </div>
    </nav>
  );
}