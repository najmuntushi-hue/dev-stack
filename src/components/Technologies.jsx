import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load technologies");
        return res.json();
      })
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technology data."))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (tech) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (id) => {
    const item = stack.find((tech) => tech.id === id);
    setStack((prev) => prev.filter((tech) => tech.id !== id));
    if (item) toast.info(`${item.name} removed.`);
  };

  const removeAll = () => {
    if (!stack.length) return;
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="container-width pb-20">
      <div className="mb-7">
        <h2 className="text-[27px] font-extrabold tracking-tight text-slate-900">
          Explore the <span className="brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-[11px] text-slate-400">Pick one technology per category to build your ideal stack.</p>
      </div>

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
            <span className="loading loading-spinner loading-md" />
            Loading technologies...
          </div>
        </div>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                selected={stack.some((item) => item.id === tech.id)}
                onAdd={addToStack}
              />
            ))}
          </div>
          <StackSidebar stack={stack} onRemove={removeFromStack} onClear={removeAll} />
        </div>
      )}
    </section>
  );
}