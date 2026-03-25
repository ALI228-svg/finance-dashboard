import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import TransactionList from "./components/TransactionList";
import DonutChart from "./components/DonutChart";
import { stats } from "./data/mockData";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={`flex min-h-screen ${dark ? "bg-gray-950" : "bg-gray-50"}`}>
      <Sidebar dark={dark} />
      <div className="flex-1 flex flex-col">
        <Header dark={dark} toggleDark={() => setDark(!dark)} />
        <main className="flex-1 p-6 overflow-auto">
          <h1 className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}>
            Dashboard
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {stats.map((s, i) => (
              <StatCard key={s.title} {...s} dark={dark} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <RevenueChart dark={dark} />
            </div>
            <DonutChart dark={dark} />
          </div>
          <div className="mt-4">
            <TransactionList dark={dark} />
          </div>
        </main>
      </div>
    </div>
  );
}