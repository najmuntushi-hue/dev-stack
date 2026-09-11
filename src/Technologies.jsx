import { useEffect, useState } from "react";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => setTechnologies(data));
  }, []);

  const categories = [
    ...new Set(technologies.map((technology) => technology.category)),
  ];

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === activeCategory
        );

  return (
    <section id="technologies" className="py-20">
      <div className="container-width">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-wider text-purple-600">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 md:text-4xl">
            Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover popular technologies across frontend, backend,
            databases, and developer tools.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <StackSidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTechnologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;