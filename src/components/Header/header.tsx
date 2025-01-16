export const Headers = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black">
      <div className="text-orange-500 text-2xl font-bold">A</div>
      <nav className="space-x-6 text-orange-500">
        <a href="#about" className="hover:text-orange-400">
          About Me
        </a>
        <a href="#skills" className="hover:text-orange-400">
          Skills
        </a>
        <a href="#Projects" className="hover:text-orange-400">
          Projects
        </a>
        <a href="#Experience" className="hover:text-orange-400">
          Experience
        </a>
        <a href="#contact" className="hover:text-orange-400">
          Contact
        </a>
      </nav>
    </header>
  );
};
