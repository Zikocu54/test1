export function Profile() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="bg-zinc-900 p-6 rounded-xl space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-zinc-700 rounded-full"></div>
          <div>
            <h3 className="text-lg font-semibold">Username123</h3>
            <p className="text-sm text-zinc-400">VIP Level: Silver</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-zinc-300">
          <div>
            <p>Total Games Played</p>
            <p className="text-xl font-bold">134</p>
          </div>
          <div>
            <p>Referral Earnings</p>
            <p className="text-xl font-bold">2,400 credits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
