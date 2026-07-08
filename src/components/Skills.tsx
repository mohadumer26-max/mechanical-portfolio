export default function Skills() {
  const skills = [
    "SolidWorks",
    "AutoCAD",
    "Finite Element Analysis",
    "Engineering Drawings",
    "Product Design",
    "Mechanical Design",
    "Heat Transfer",
    "CAD Modeling",
    "AI for Mechanical Engineering",
    "Technical Documentation",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Technical <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}