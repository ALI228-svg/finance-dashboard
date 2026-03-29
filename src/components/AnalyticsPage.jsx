import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from "recharts";
import { revenueData } from "../data/mockData";
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const monthlyUsers = [
  { month: "Jan", users: 1200 },
  { month: "Feb", users: 1800 },
  { month: "Mar", users: 1500 },
  { month: "Apr", users: 2200 },
  { month: "May", users: 2800 },
  { month: "Jun", users: 3100 },
  { month: "Jul", users: 3842 },
];

const kpis = [
  { label: "Total Revenue", value: "$84,250", change: "+12.5%", positive: true, icon: DollarSign, from: "#6366f1", to: "#818cf8" },
  { label: "Active Users", value: "3,842", change: "+15.4%", positive: true, icon: Users, from: "#06b6d4", to: "#22d3ee" },
  { label: "Conversion", value: "3.6%", change: "+1.2%", positive: true, icon: TrendingUp, from: "#10b981", to: "#34d399" },
  { label: "Churn Rate", value: "1.4%", change: "-0.3%", positive: false, icon: Activity, from: "#f43f5e", to: "#fb7185" },
];

const topChannels = [
  { name: "Direct", value: 40, color: "#6366f1" },
  { name: "Organic", value: 30, color: "#22d3ee" },
  { name: "Referral", value: 20, color: "#f59e0b" },
  { name: "Social", value: 10, color: "#10b981" },
];

export default function AnalyticsPage({ dark }) {
  const card = `rounded-2xl p-5 border ${dark ? "bg-gray-800/80 border-gray-700" : "bg-white border-gray-200"} backdrop-blur`;
  const title = `font-bold text-base mb-4 ${dark ? "text-white" : "text-gray-900"}`;
  const tooltip = { background: dark ? "#1e293b" : "#fff", border: "none", borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.15)" };
  const tick = { fill: dark ? "#64748b" : "#94a3b8", fontSize: 11 };
  const grid = dark ? "#1e293b" : "#f1f5f9";

  return (
    <div className="flex flex-col gap-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>Analytics</h1>
          <p className={`text-sm mt-1 ${dark ? "text-gray-500" : "text-gray-400"}`}>Performance overview for July 2026</p>
        </div>
        <div className={`px-4 py-2 rounded-xl text-sm font-medium ${dark ? "bg-gray-800 text-gray-300 border border-gray-700" : "bg-white text-gray-600 border border-gray-200"}`}>
          Last 7 months
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map(({ label, value, change, positive, icon: Icon, from, to }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
            className={`rounded-2xl p-5 border relative overflow-hidden ${dark ? "bg-gray-800/80 border-gray-700" : "bg-white border-gray-200"}`}
          >
            {/* Glow background */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 blur-2xl"
              style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />

            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${from}33, ${to}33)` }}>
                <Icon size={18} style={{ color: from }} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg ${positive ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"}`}>
                {positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {change}
              </span>
            </div>
            <p className={`text-2xl font-bold mb-1 ${dark ? "text-white" : "text-gray-900"}`}>{value}</p>
            <p className={`text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}>{label}</p>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${from}, ${to})` }} />
          </motion.div>
        ))}
      </div>

      {/* Main Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={card}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className={title}>Revenue Overview</h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span className={dark ? "text-gray-400" : "text-gray-500"}>Revenue</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className={dark ? "text-gray-400" : "text-gray-500"}>Expenses</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={revenueData} barGap={6} barSize={28}>
            <defs>
              <linearGradient id="revBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.5} />
              </linearGradient>
              <linearGradient id="expBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
            <XAxis dataKey="month" tick={tick} axisLine={false} tickLine={false} />
            <YAxis tick={tick} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltip} cursor={{ fill: dark ? "#ffffff08" : "#00000005", radius: 8 }} />
            <Bar dataKey="revenue" fill="url(#revBar)" radius={[8, 8, 0, 0]} />
            <Bar dataKey="expenses" fill="url(#expBar)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* User Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`lg:col-span-2 ${card}`}
        >
          <h3 className={title}>User Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={monthlyUsers}>
              <defs>
                <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
              <XAxis dataKey="month" tick={tick} axisLine={false} tickLine={false} />
              <YAxis tick={tick} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltip} />
              <Area type="monotone" dataKey="users" stroke="#22d3ee" fill="url(#userGrad)" strokeWidth={2.5} dot={{ fill: "#22d3ee", r: 4, strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={card}
        >
          <h3 className={title}>Top Channels</h3>
          <ResponsiveContainer width="100%" height={130}>
            <PieChart>
              <Pie data={topChannels} innerRadius={40} outerRadius={60} dataKey="value" paddingAngle={4}>
                {topChannels.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltip} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2 mt-2">
            {topChannels.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className={dark ? "text-gray-400" : "text-gray-500"}>{d.name}</span>
                </div>
                <span className={`font-semibold ${dark ? "text-white" : "text-gray-800"}`}>{d.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}