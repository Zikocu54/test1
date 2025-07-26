export function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Daily Missions</h2>
      <ul className="space-y-4">
        {["Play 3 games", "Login 2 days in a row", "Complete 1 referral"].map((task, i) => (
          <li key={i} className="bg-zinc-900 p-4 rounded-xl flex justify-between">
            <span>{task}</span>
            <button className="bg-purple-600 px-3 py-1 rounded text-sm">Claim</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
