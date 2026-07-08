export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
  Mohad Umer<span className="text-blue-500">.</span>
</h1>

        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}