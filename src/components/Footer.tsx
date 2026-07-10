export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-white">
          Mohad Umer<span className="text-blue-500">.</span>
        </h2>

        <p className="text-slate-400 mt-3">
          Mechanical Engineer | CAD Designer | CFD | FEA
        </p>

        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://github.com/mohadumer26-max"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-mohad-umer-chaudhry-2a82a9270/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="https://www.fiverr.com/mohad6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Fiverr
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-8">
          © 2026 Mohad Umer. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}