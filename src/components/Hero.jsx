import { HiArrowRight } from "react-icons/hi";
import bannerImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="container-width grid min-h-[470px] items-center gap-8 py-12 md:grid-cols-[1.2fr_.8fr] md:py-16">
      <div>
        <h1 className="max-w-[620px] text-[42px] font-extrabold leading-[1.08] tracking-[-1.8px] text-slate-900 sm:text-[48px] md:text-[54px]">
          Build Your Ideal<br />
          <span className="brand-gradient">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-[590px] text-[15px] leading-6 text-slate-500">
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#technologies" className="gradient-bg inline-flex items-center gap-2 rounded-md px-4 py-3 text-[12px] font-bold text-white shadow-sm hover:opacity-90">
            Explore Technologies <HiArrowRight />
          </a>
          <a href="#about" className="rounded-md border border-slate-200 px-6 py-3 text-[12px] font-medium text-slate-600 hover:bg-slate-50">
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={bannerImg} alt="Development stack illustration" className="hero-art mx-auto h-auto w-[270px] sm:w-[320px]" />
      </div>
    </section>
  );
}