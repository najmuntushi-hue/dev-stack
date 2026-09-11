function StackSidebar({ categories, activeCategory, setActiveCategory }) {
  return (
    <aside className="w-full md:w-56">
      <h2 className="mb-4 text-lg font-bold text-gray-900">
        Categories
      </h2>

      <div className="flex flex-wrap gap-2 md:flex-col">
        <button
          onClick={() => setActiveCategory("All")}
          className={`rounded-lg px-4 py-2 text-left font-medium ${
            activeCategory === "All"
              ? "gradient-bg text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-4 py-2 text-left font-medium ${
              activeCategory === category
                ? "gradient-bg text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default StackSidebar;