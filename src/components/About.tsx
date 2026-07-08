export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <p className="text-slate-300 leading-8 text-lg">
              I am a Mechanical Engineering student passionate about
              transforming innovative ideas into practical engineering
              solutions. My expertise includes CAD modeling,
              Finite Element Analysis (FEA), engineering drawings,
              product design, and AI-assisted engineering workflows.
            </p>

            <p className="mt-6 text-slate-300 leading-8 text-lg">
              I enjoy solving complex engineering problems through
              analytical thinking, simulation, and modern design
              techniques while creating products that are efficient,
              manufacturable, and reliable.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

  <div className="bg-slate-800 rounded-2xl p-6">
    <h3 className="text-xl font-bold text-blue-500">CAD Design</h3>
    <p className="text-slate-400 mt-2">
      Precision 3D modeling and engineering drawings.
    </p>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <h3 className="text-xl font-bold text-blue-500">FEA</h3>
    <p className="text-slate-400 mt-2">
      Simulation and structural performance analysis.
    </p>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <h3 className="text-xl font-bold text-blue-500">Product Design</h3>
    <p className="text-slate-400 mt-2">
      Turning concepts into manufacturable designs.
    </p>
  </div>

  <div className="bg-slate-800 rounded-2xl p-6">
    <h3 className="text-xl font-bold text-blue-500">AI Engineering</h3>
    <p className="text-slate-400 mt-2">
      AI-assisted workflows for faster engineering solutions.
    </p>
  </div>

</div>

        </div>

      </div>
    </section>
  );
}