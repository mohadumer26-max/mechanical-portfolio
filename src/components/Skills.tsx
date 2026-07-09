export default function Skills() {
  const skillCategories = [
    {
      title: "CAD & Design",
      skills: ["SolidWorks", "AutoCAD", "Engineering Drawings"],
    },
    {
      title: "Simulation",
      skills: ["COMSOL Multiphysics", "ANSYS", "Finite Element Analysis (FEA)", "CFD"],
    },
    {
      title: "Programming",
      skills: ["MATLAB", "Python", "C++"],
    },
    {
      title: "Engineering",
      skills: [
        "Heat Transfer",
        "Thermodynamics",
        "Machine Design",
        "Manufacturing",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            A combination of engineering knowledge, CAD expertise,
            simulation tools, and programming that enables me to solve
            complex mechanical engineering problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-500 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 hover:bg-blue-600 transition px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}