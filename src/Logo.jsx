function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-xl text-xl font-bold text-white">
        &lt;/&gt;
      </div>

      <span className="text-xl font-extrabold text-gray-900">
        Dev<span className="brand-gradient">Stack</span>
      </span>
    </div>
  );
}

export default Logo;