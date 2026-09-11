function Hero() {
  return (
    <section id="home" className="bg-gray-50 py-20">
      <div className="container-width grid items-center gap-12 md:grid-cols-2">
        
        <div>
          <p className="mb-3 font-semibold uppercase tracking-wider text-purple-600">
            Modern Developer Stack
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Build Better.
            <br />
            <span className="brand-gradient">Code Smarter.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Explore modern technologies and discover the tools you need
            to build powerful, scalable, and beautiful applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#technologies"
              className="gradient-bg rounded-lg px-6 py-3 font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="gradient-bg flex h-64 w-64 items-center justify-center rounded-3xl shadow-xl">
            <span className="text-7xl font-bold text-white">
              &lt;/&gt;
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;