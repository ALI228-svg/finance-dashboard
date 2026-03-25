import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueData } from "../data/mockData";

export default function RevenueChart({ dark }) {
  return (
    <div className={`rounded-2xl p-5 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
      <h3 className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>Revenue vs Expenses</h3>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="exp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={dark ? "#374151" : "#f3f4f6"} />
          <XAxis dataKey="month" tick={{ fill: dark ? "#9ca3af" : "#6b7280", fontSize: 12 }} />
          <YAxis tick={{ fill: dark ? "#9ca3af" : "#6b7280", fontSize: 12 }} />
          <Tooltip contentStyle={{ background: dark ? "#1f2937" : "#fff", border: "none", borderRadius: 8 }} />
          <Area type="monotone" dataKey="revenue" stroke="#6366f1" fill="url(#rev)" strokeWidth={2} />
          <Area type="monotone" dataKey="expenses" stroke="#f43f5e" fill="url(#exp)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}