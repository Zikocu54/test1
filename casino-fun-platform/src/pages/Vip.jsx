export function Vip() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">VIP System</h2>
      <div className="space-y-4">
        {["Bronze", "Silver", "Gold", "Platinum"].map((level, i) => (
          <div key={level} className="bg-zinc-900 p-4 rounded-xl">
            <h3 className="font-semibold text-lg">{level} Tier</h3>
            <p className="text-zinc-400 text-sm">Benefits include: bonus credits, exclusive avatars, and access to private rooms.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
