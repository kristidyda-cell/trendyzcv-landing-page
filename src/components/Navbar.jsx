export default function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Free CV Review", href: "#free-cv" },
    { label: "Pricing", href: "#pricing" },
    { label: "Job Portal", href: "#job-portal" },
    { label: "LinkedIn", href: "#linkedin" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-black text-cyan-400">
          TRENDYZCV.COM
        </a>

        <div className="hidden lg:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            Login
          </button>

          <a
            href="#job-portal"
            className="bg-cyan-400 text-black px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-300 transition-all duration-300"
          >
            Post Job Free
          </a>
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