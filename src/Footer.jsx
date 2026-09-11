function Footer() {
  return (
    <footer id="about" className="border-t border-gray-200 bg-gray-50 py-10">
      <div className="container-width text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">
          Dev<span className="brand-gradient">Stack</span>
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-gray-600">
          A modern collection of technologies and tools for developers.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500">
          <a href="#home" className="hover:text-purple-600">
            Home
          </a>

          <a href="#technologies" className="hover:text-purple-600">
            Technologies
          </a>

          <a href="#about" className="hover:text-purple-600">
            About
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} DevStack. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;