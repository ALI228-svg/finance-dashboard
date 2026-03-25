import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { donutData } from "../data/mockData";

export default function DonutChart({ dark }) {
  return (
    <div className={`rounded-2xl p-5 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
      <h3 className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>Revenue Breakdown</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie data={donutData} innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={3}>
            {donutData.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: dark ? "#1f2937" : "#fff",
              border: "none",
              borderRadius: 8,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 mt-2">
        {donutData.map((d) => (
          <div key={d.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
              <span className={dark ? "text-gray-400" : "text-gray-500"}>{d.name}</span>
            </div>
            <span className={`font-medium ${dark ? "text-white" : "text-gray-800"}`}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}