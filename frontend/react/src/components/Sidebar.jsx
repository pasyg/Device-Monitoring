export default function Sidebar() {
  return (
    <div className="fixed  h-screen w-64 bg-black text-white">
      <aside className="w-60 h-screen bg-neutral-900 text-white flex flex-col">
        <a href="/" className="bg-neutral-900 p-2 rounded cursor-pointer">
        <h2 className="mb-2 p-7 border-b-2 text-center text-2xl font-bold text-gray-400">Device Monitoring</h2>
        </a>
        <nav className="p-2">
          <ul className="flex flex-col space-y-2">
            <a href="/dashboard" className="hover:bg-gray-500 p-2 rounded cursor-pointer">
            Dashboard</a>

            <a href="/settings" className="hover:bg-gray-500 p-2 rounded cursor-pointer">
            Settings</a>
            
            <div className="p-2 inline-flex items-center group">
            LLM</div>

            <a href="/sqlquery" className="hover:bg-gray-500 p-2 rounded cursor-pointer text-xs indent-4">
            SQL Query</a>

            <a href="/dataquestion" className="hover:bg-gray-500 p-2 rounded cursor-pointer text-xs indent-4">
            Data Question</a>

            <a href="/anomalydetection" className="hover:bg-gray-500 p-2 rounded cursor-pointer text-xs indent-4">
            Anomaly Detection</a>

            <a href="/reports" className="hover:bg-gray-500 p-2 rounded cursor-pointer">
          Reports</a>
        </ul>
      </nav>

      <div className="mt-auto p-6 border-t border-t-gray-400 border-gray-700">© 2025 AI Assisted Device Monitoring</div>
    </aside>
    </div>
  );
}
