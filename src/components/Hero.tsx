import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-blue-400 font-semibold mb-3">
            Mechanical Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Mohad
            <br />
            Chaudhary
          </h1>

          <p className="mt-6 text-xl text-slate-300 leading-8">
            Designing innovative mechanical solutions through
            CAD, FEA, Product Design, and AI-assisted Engineering.
          </p>

          <div className="mt-10 flex gap-5">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <Image
              src="/profile.jpg"
              alt="Mohad Chaudhary"
              width={450}
              height={550}
              className="relative rounded-3xl border border-slate-700 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}