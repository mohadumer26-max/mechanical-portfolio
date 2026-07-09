export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Let's <span className="text-blue-500">Connect</span>
        </h2>

        <p className="text-slate-400 text-lg mb-12">
          Have a project in mind or need engineering assistance?
          I'm available for freelance work, collaborations, and
          engineering consultations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Email
            </h3>
            <p className="text-slate-300">
              mohadumer26@email.com
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Fiverr
            </h3>
            <p className="text-slate-300">
              Available for Projects
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Location
            </h3>
            <p className="text-slate-300">
              Pakistan
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}