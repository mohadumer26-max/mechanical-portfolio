"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold mb-4">
            Mechanical Engineer • CAD Designer • CFD • FEA
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Muhammad Mohad
            <br />
            <span className="text-blue-500">
              Umer Chaudhry
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-slate-200">
            Mechanical Engineer & CAD Design Specialist
          </h2>

          <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
            I specialize in Mechanical Design, CAD Modeling, CFD, FEA,
            and engineering simulations using SolidWorks, COMSOL
            Multiphysics, MATLAB, and AutoCAD. I create innovative,
            manufacturing-ready engineering solutions for academic,
            industrial, and freelance projects.
          </p>

          {/* Main Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/resume/Mohad_Umer_CV.pdf"
              download
              className="border border-slate-600 hover:border-blue-500 hover:text-blue-400 transition px-8 py-4 rounded-xl font-semibold"
            >
              Download CV
            </a>

          </div>

          {/* Social Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">

            <a
              href="https://github.com/mohadumer26-max"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-mohad-umer-chaudhry-2a82a9270/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://www.fiverr.com/mohad6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition"
            >
              Fiverr
            </a>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 text-center">
              <h2 className="text-4xl font-bold text-blue-500">15+</h2>
              <p className="text-slate-400 mt-2">
                Projects
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 text-center">
              <h2 className="text-4xl font-bold text-blue-500">4+</h2>
              <p className="text-slate-400 mt-2">
                Engineering Software
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 text-center">
              <h2 className="text-4xl font-bold text-blue-500">2</h2>
              <p className="text-slate-400 mt-2">
                Internships
              </p>
            </div>

          </div>

        </div>

        {/* Right Content */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>

            <img
              src="/profile.jpg"
              alt="Muhammad Mohad Umer Chaudhry"
              className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}