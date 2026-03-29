import { Moon, Sun, Search } from "lucide-react";

export default function Header({ dark, toggleDark, search, setSearch }) {
  return (
    <header className={`flex items-center justify-between px-6 py-4 border-b ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${dark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-500"}`}>
        <Search size={16} />
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none w-40"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={toggleDark}
          className={`p-2 rounded-lg transition-all ${dark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">A</div>
      </div>
    </header>
  );
}