import { useState } from "react";

export default function SettingsPage({ dark }) {
  const [name, setName] = useState("Ali");
  const [email, setEmail] = useState("ali@gmail.com");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const input = `w-full px-4 py-2.5 rounded-lg text-sm outline-none border transition-all ${
    dark
      ? "bg-gray-700 border-gray-600 text-white focus:border-indigo-500"
      : "bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-400"
  }`;

  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <h1 className={`text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>Settings</h1>

      <div className={`rounded-2xl p-6 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <h3 className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>Profile</h3>

        <div className="flex flex-col gap-4">
          <div>
            <label className={`text-xs font-medium mb-1 block ${dark ? "text-gray-400" : "text-gray-500"}`}>Full Name</label>
            <input className={input} value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className={`text-xs font-medium mb-1 block ${dark ? "text-gray-400" : "text-gray-500"}`}>Email</label>
            <input className={input} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className={`text-xs font-medium mb-1 block ${dark ? "text-gray-400" : "text-gray-500"}`}>Password</label>
            <input className={input} type="password" placeholder="••••••••" />
          </div>
        </div>

        <button
          onClick={handleSave}
          className={`mt-6 w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
            saved ? "bg-green-500 text-white" : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          {saved ? "✓ Saved!" : "Save Changes"}
        </button>
      </div>

      <div className={`rounded-2xl p-6 border ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <h3 className={`font-semibold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>Preferences</h3>
        <div className="flex items-center justify-between">
          <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>Email Notifications</span>
          <div className="w-10 h-6 bg-indigo-500 rounded-full relative cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1" />
          </div>
        </div>
      </div>
    </div>
  );
}