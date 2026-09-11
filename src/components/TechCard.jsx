import { HiStar, HiCheck } from "react-icons/hi";

const badgeStyles = {
  Popular: "bg-sky-50 text-sky-500",
  Versatile: "bg-emerald-50 text-emerald-500",
  Fast: "bg-orange-50 text-orange-500",
  Modern: "bg-sky-50 text-sky-500",
  Standard: "bg-emerald-50 text-emerald-500",
  "Top SQL": "bg-blue-50 text-blue-500",
  Cache: "bg-rose-50 text-rose-500",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-500",
  Robust: "bg-sky-50 text-sky-500",
  Containers: "bg-sky-50 text-sky-500"
};

export default function TechCard({ tech, selected, onAdd }) {
  return (
    <article className="tech-card card-border flex min-h-[265px] flex-col rounded-xl bg-white p-5 shadow-[0_3px_14px_rgba(15,23,42,.025)]">
      <div className="flex items-start justify-between gap-3">
        <img src={tech.icon} alt={tech.name} className="h-8 w-8 object-contain" />
        <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${badgeStyles[tech.badge] || "bg-slate-50 text-slate-500"}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-[15px] font-bold text-slate-800">{tech.name}</h3>
      <p className="mt-2 min-h-[58px] text-[10.5px] leading-[1.55] text-slate-400">{tech.description}</p>

      <div className="mt-auto">
        <div className="my-3 h-px bg-slate-100" />
        <div className="flex items-center justify-between text-[9px] text-slate-400">
          <span className="rounded bg-slate-50 px-2 py-1">{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-medium text-slate-600">
            <HiStar className="text-amber-400" /> {tech.rating}
          </span>
        </div>
        <button
          onClick={() => onAdd(tech)}
          disabled={selected}
          className={`mt-3 flex w-full items-center justify-center gap-1.5 rounded-md py-2.5 text-[10px] font-semibold transition ${
            selected ? "cursor-not-allowed bg-slate-200 text-slate-500" : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {selected && <HiCheck />}
          {selected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}