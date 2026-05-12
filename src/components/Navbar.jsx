import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Free CV", href: "/#free-cv" },
    { label: "CV Designs", href: "/premium-cv" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
    { label: "Job Portal", href: "/job-portal" },
    { label: "LinkedIn", href: "/linkedin-optimization" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-xl md:text-2xl font-black text-cyan-400 tracking-wide"
        >
          TRENDYZCV.COM
        </Link>

        <div className="hidden xl:flex gap-7 text-sm text-gray-300">
          {links.map((link) =>
            link.href.includes("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            Login
          </button>

          <Link
            to="/job-portal"
            className="bg-cyan-400 text-black px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-300 transition-all duration-300"
          >
            Post Job Free
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden bg-cyan-400 text-black px-4 py-2 rounded-xl text-sm font-bold"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="xl:hidden border-t border-white/10 bg-slate-950 px-5 py-5">
          <div className="flex flex-col gap-4 text-gray-300">
            {links.map((link) =>
              link.href.includes("#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              to="/job-portal"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-400 text-black px-5 py-3 rounded-xl font-bold text-center"
            >
              Post Job Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}