export function Games() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">All Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-zinc-900 rounded-xl p-3">
            <div className="h-32 bg-zinc-700 rounded mb-2"></div>
            <div className="text-sm">Game #{i + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
