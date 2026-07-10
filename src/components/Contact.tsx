export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            I'm available for freelance engineering projects, internships,
            collaborations, and full-time opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-500">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-slate-400">Email</p>
                <a
                  href="mailto:mohadumer26@gmail.com"
                  className="hover:text-blue-400"
                >
                  mohadumer26@gmail.com
                </a>
              </div>

              <div>
                <p className="text-slate-400">Location</p>
                <p>Islamabad, Pakistan</p>
              </div>

            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-500">
              Find Me Online
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/mohadumer26-max"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                💻 GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-mohad-umer-chaudhry-2a82a9270/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://www.fiverr.com/mohad6"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                ⭐ Fiverr
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}