export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold mb-8">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            I am a Mechanical Engineer with practical experience
            in CAD design, CFD analysis, FEA, and product development. My
            passion lies in transforming engineering concepts into
            efficient, manufacturable, and innovative solutions.
          </p>

          <p className="text-slate-300 text-lg leading-8 mb-10">
            I have worked on shell-and-tube heat exchanger analysis,
            SolidWorks assemblies, finite element simulations, MATLAB
            programming, and engineering optimization projects. I also
            provide professional CAD and engineering services on Fiverr.
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Let's Work Together
          </a>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-4xl font-bold text-blue-500">15+</h3>
            <p className="text-slate-400 mt-2">
              Engineering Projects
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-4xl font-bold text-blue-500">6+</h3>
            <p className="text-slate-400 mt-2">
              Engineering Software
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-4xl font-bold text-blue-500">3</h3>
            <p className="text-slate-400 mt-2">
              Professional Internships
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
            <h3 className="text-4xl font-bold text-blue-500">100%</h3>
            <p className="text-slate-400 mt-2">
              Client Commitment
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}