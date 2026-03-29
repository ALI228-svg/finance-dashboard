import { LayoutDashboard, TrendingUp, CreditCard, Settings, Bell, LogOut } from "lucide-react";

const nav = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: TrendingUp, label: "Analytics" },
  { icon: CreditCard, label: "Transactions" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar({ dark, page, setPage, onLogout }) {
  return (
    <aside className={`hidden md:flex flex-col w-64 min-h-screen px-4 py-6 gap-2 border-r ${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">F</div>
        <span className={`font-semibold text-lg ${dark ? "text-white" : "text-gray-900"}`}>FinanceAI</span>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {nav.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setPage(label)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              page === label
                ? "bg-indigo-500 text-white"
                : dark
                ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
      <button
        onClick={onLogout}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
          dark ? "text-gray-400 hover:bg-gray-800 hover:text-white" : "text-gray-500 hover:bg-gray-100"
        }`}
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
}