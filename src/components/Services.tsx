export default function Services() {
  const services = [
    "SolidWorks 3D CAD Modeling",
    "Mechanical Product Design",
    "Engineering Drawings",
    "CFD Simulation (COMSOL)",
    "Finite Element Analysis (FEA)",
    "MATLAB Programming",
    "Heat Exchanger Design",
    "AI Engineering Solutions",
  ];

  return (
    <section
      id="services"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Services</span>
          </h2>

          <p className="text-slate-400 mt-5 text-lg max-w-2xl mx-auto">
            Professional engineering and CAD services tailored for students,
            researchers, startups, and manufacturing companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="bg-slate-900 border border-slate-800 hover:border-blue-500 transition rounded-2xl p-8 text-center"
            >
              <h3 className="font-semibold text-lg">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}