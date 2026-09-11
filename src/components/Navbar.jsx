import { useState } from "react";
import Logo from "./Logo";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Technologies", "#technologies"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur nav-shadow">
      <div className="container-width flex h-[64px] items-center justify-between">
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <Logo />

        <nav className="hidden md:flex items-center gap-7 text-[12px] font-medium text-slate-500">
          {links.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              className={`transition hover:text-pink-600 ${index === 0 ? "text-pink-600" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-[12px] font-medium">
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Sign In</a>
          <a href="#contact" className="rounded-full gradient-bg px-5 py-2.5 font-semibold text-white shadow-sm hover:opacity-90">
            Sign Up
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <a href="#contact" className="text-[11px] font-medium text-slate-600">Sign In</a>
          <a href="#contact" className="rounded-full gradient-bg px-3 py-2 text-[11px] font-semibold text-white">
            Sign Up
          </a>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <nav className="container-width flex flex-col py-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-50 py-3 text-sm text-slate-600 last:border-0"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}