export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">CasinoFun</h1>
        <nav className="flex gap-4 text-sm">
          <a href="/" className="hover:text-purple-400">Home</a>
          <a href="/games" className="hover:text-purple-400">Games</a>
          <a href="/vip" className="hover:text-purple-400">VIP</a>
          <a href="/tasks" className="hover:text-purple-400">Tasks</a>
          <a href="/shop" className="hover:text-purple-400">Shop</a>
          <a href="/profile" className="hover:text-purple-400">Profile</a>
        </nav>
      </div>
    </header>
  );
}
