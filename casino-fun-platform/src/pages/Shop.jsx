export function Shop() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reward Market</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["Avatar Pack", "XP Boost", "Custom Theme"].map((item, i) => (
          <div key={i} className="bg-zinc-900 p-4 rounded-xl text-center">
            <div className="h-24 bg-zinc-800 mb-3 rounded"></div>
            <h4 className="text-sm font-semibold">{item}</h4>
            <button className="mt-2 text-xs px-3 py-1 bg-purple-700 rounded">Buy</button>
          </div>
        ))}
      </div>
    </section>
  );
}
