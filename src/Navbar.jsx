import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container-width flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="font-medium text-gray-700 hover:text-purple-600">
            Home
          </a>
          <a href="#technologies" className="font-medium text-gray-700 hover:text-purple-600">
            Technologies
          </a>
          <a href="#about" className="font-medium text-gray-700 hover:text-purple-600">
            About
          </a>
        </div>

        <button className="gradient-bg rounded-lg px-5 py-2.5 font-semibold text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;