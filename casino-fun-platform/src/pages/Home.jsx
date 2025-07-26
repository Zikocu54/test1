export function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Welcome to CasinoFun</h2>
      <p className="mb-4 text-zinc-300">Enjoy fully-featured entertainment games with VIP perks, missions and rewards.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-zinc-900 p-4 rounded-xl shadow hover:shadow-purple-500/30">
            <div className="h-40 bg-zinc-800 rounded mb-3"></div>
            <h3 className="font-semibold">Featured Game #{id}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
