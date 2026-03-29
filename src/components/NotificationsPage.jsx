import { useState } from "react";
import { notifications } from "../data/mockData";
import { Bell, Check } from "lucide-react";

export default function NotificationsPage({ dark }) {
  const [items, setItems] = useState(notifications);

  const markAll = () => setItems(items.map((n) => ({ ...n, read: true })));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>Notifications</h1>
        <button
          onClick={markAll}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 transition-all"
        >
          <Check size={16} /> Mark all as read
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
              dark
                ? n.read ? "bg-gray-800 border-gray-700 opacity-60" : "bg-gray-800 border-indigo-500"
                : n.read ? "bg-white border-gray-200 opacity-60" : "bg-white border-indigo-400"
            }`}
          >
            <div className={`p-2 rounded-full ${n.read ? "bg-gray-500/20" : "bg-indigo-500/20"}`}>
              <Bell size={16} className={n.read ? "text-gray-400" : "text-indigo-500"} />
            </div>
            <div className="flex-1">
              <p className={`text-sm font-medium ${dark ? "text-white" : "text-gray-900"}`}>{n.text}</p>
              <p className={`text-xs mt-1 ${dark ? "text-gray-500" : "text-gray-400"}`}>{n.time}</p>
            </div>
            {!n.read && (
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}