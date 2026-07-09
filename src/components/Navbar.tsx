"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform"
        >
          Mohad Umer<span className="text-blue-500">.</span>
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-blue-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}