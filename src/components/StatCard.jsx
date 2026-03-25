import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({ title, value, change, positive, dark, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl p-5 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
    >
      <p className={`text-sm mb-1 ${dark ? "text-gray-400" : "text-gray-500"}`}>{title}</p>
      <p className={`text-2xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>{value}</p>
      <div className={`flex items-center gap-1 text-sm font-medium ${positive ? "text-green-500" : "text-red-500"}`}>
        {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        {change} this month
      </div>
    </motion.div>
  );
}
