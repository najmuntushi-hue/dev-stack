import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white" id="contact">
      <div className="container-width grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div id="about">
          <Logo />
          <p className="mt-4 max-w-[300px] text-[10px] leading-5 text-slate-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-5 text-[9px] font-medium text-slate-600">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-wide text-slate-700">PRODUCT</h4>
          <div className="mt-4 flex flex-col gap-3 text-[9px] text-slate-400">
            <a href="#home">Home</a><a href="#technologies">Technologies</a><a href="#projects">Projects</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-wide text-slate-700">COMPANY</h4>
          <div className="mt-4 flex flex-col gap-3 text-[9px] text-slate-400">
            <a href="#about">About</a><a href="#contact">Contact</a><a href="#contact">Careers</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-wide text-slate-700">LEGAL</h4>
          <div className="mt-4 flex flex-col gap-3 text-[9px] text-slate-400">
            <a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="container-width flex flex-col gap-3 border-t border-slate-100 py-6 text-[9px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-6"><a href="#contact">Privacy</a><a href="#contact">Terms</a></div>
      </div>
    </footer>
  );
}