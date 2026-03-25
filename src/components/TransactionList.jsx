import { transactions } from "../data/mockData";

export default function TransactionList({ dark }) {
  return (
    <div className={`rounded-2xl p-5 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
      <h3 className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>Recent Transactions</h3>
      <div className="flex flex-col gap-3">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${t.color} opacity-20`} />
              <div>
                <p className={`text-sm font-medium ${dark ? "text-white" : "text-gray-900"}`}>{t.name}</p>
                <p className={`text-xs ${dark ? "text-gray-500" : "text-gray-400"}`}>{t.date}</p>
              </div>
            </div>
            <span className={`text-sm font-semibold ${t.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}