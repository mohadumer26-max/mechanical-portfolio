"use client";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            A selection of engineering projects demonstrating my expertise in
            CAD design, CFD analysis, simulation, and product development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 border border-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold">
                  View Case Study
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}