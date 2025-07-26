import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import { Vip } from "./pages/Vip";
import { Tasks } from "./pages/Tasks";
import { Shop } from "./pages/Shop";
import { Profile } from "./pages/Profile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 text-white font-sans">
        <Header />
        <main className="p-4 pt-20 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/vip" element={<Vip />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
