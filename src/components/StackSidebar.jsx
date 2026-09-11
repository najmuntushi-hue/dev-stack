import { HiX } from "react-icons/hi";

export default function StackSidebar({ stack, onRemove, onClear }) {
  return (
    <aside className="rounded-xl border border-slate-100 bg-white p-4 shadow-[0_3px_14px_rgba(15,23,42,.025)] md:sticky md:top-20 md:h-fit">
      <h3 className="text-[14px] font-bold text-slate-800">Your Stack</h3>
      <p className="mt-1 text-[9px] text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${stack.length === 1 ? "" : "ies"} Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-3 flex min-h-[80px] items-center justify-center rounded-lg border border-dashed border-slate-200 text-center">
          <p className="text-[10px] text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="stack-scroll mt-3 max-h-[330px] space-y-2 overflow-auto pr-1">
          {stack.map((tech) => (
            <div key={tech.id} className="flex items-center gap-2 rounded-md border border-slate-200 px-2.5 py-2">
              <img src={tech.icon} alt="" className="h-7 w-7 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-slate-700">{tech.name}</p>
                <p className="text-[8px] text-slate-400">{tech.category}</p>
              </div>
              <button onClick={() => onRemove(tech.id)} className="text-lg text-slate-300 hover:text-rose-500" aria-label={`Remove ${tech.name}`}>
                <HiX />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onClear}
        disabled={stack.length === 0}
        className="mt-5 w-full rounded-md border border-rose-200 py-2 text-[10px] font-semibold text-rose-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
}