function TechCard({ technology }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl font-bold">
        &lt;/&gt;
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {technology.category}
      </p>
    </div>
  );
}

export default TechCard;