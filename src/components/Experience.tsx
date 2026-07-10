export default function Experience() {
  const experiences = [
    {
      title: "Mechanical Engineering Intern",
      company: "Government of Punjab Agricultural Engineering Department",
      period: "2024",
      description:
        "Worked on agricultural engineering projects involving irrigation systems, mechanization, and sustainable farming solutions.",
    },
    {
      title: "Human Resources Intern",
      company: "Aga Khan Foundation",
      period: "2024",
      description:
        "Supported HR operations, documentation, recruitment activities, and organizational processes.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className="text-blue-400">{exp.period}</span>
              </div>

              <h4 className="text-lg text-slate-300 mt-2">
                {exp.company}
              </h4>

              <p className="text-slate-400 mt-4 leading-7">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}