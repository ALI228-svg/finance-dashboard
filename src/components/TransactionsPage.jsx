import { useState } from "react";
import { allTransactions } from "../data/mockData";

export default function TransactionsPage({ dark }) {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? allTransactions
    : allTransactions.filter((t) => t.type === filter);

  return (
    <div className="flex flex-col gap-6">
      <h1 className={`text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>Transactions</h1>

      <div className="flex gap-2">
        {["All", "Income", "Expense"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f
                ? "bg-indigo-500 text-white"
                : dark ? "bg-gray-800 text-gray-400 hover:bg-gray-700" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={`rounded-2xl border overflow-hidden ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <table className="w-full text-sm">
          <thead>
            <tr className={`${dark ? "bg-gray-700 text-gray-400" : "bg-gray-50 text-gray-500"}`}>
              <th className="text-left px-5 py-3">Name</th>
              <th className="text-left px-5 py-3">Category</th>
              <th className="text-left px-5 py-3">Date</th>
              <th className="text-left px-5 py-3">Type</th>
              <th className="text-right px-5 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t, i) => (
              <tr key={t.id} className={`border-t ${dark ? "border-gray-700" : "border-gray-100"} ${i % 2 === 0 ? "" : dark ? "bg-gray-750" : "bg-gray-50"}`}>
                <td className={`px-5 py-3 font-medium ${dark ? "text-white" : "text-gray-900"}`}>{t.name}</td>
                <td className={`px-5 py-3 ${dark ? "text-gray-400" : "text-gray-500"}`}>{t.category}</td>
                <td className={`px-5 py-3 ${dark ? "text-gray-400" : "text-gray-500"}`}>{t.date}</td>
                <td className="px-5 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${t.type === "Income" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}>
                    {t.type}
                  </span>
                </td>
                <td className={`px-5 py-3 text-right font-semibold ${t.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}