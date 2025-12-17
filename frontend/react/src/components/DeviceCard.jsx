import { Lightbulb, WifiOff } from "lucide-react"
import { FaMobileAlt, FaLightBulb } from "react-icons/fa"

export default function DeviceCard({ icon: Icon, title, devices}) {
  return (
    <section className="mb-8 bg-gray-800 rounded-xl p-4 shadow">
      <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-2">
        <Icon className="text-2xl text-blue-400" />
        <h2 className="text-xl font-semibold text-white bg-">{title}</h2>
      </div>

      <table className="w-full text-left text-gray-200">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="py-2">Name</th>
            <th>Status</th>
            <th>Signal</th>
            <th>Aktionen</th>
          </tr>
        </thead>
      </table>

      <tbody>
        {devices.map((device) => (
          <tr key={device.id} className="border-b border-gray-700/50">
            <td className="py-2">{device.name}</td>
            <td>{device.status}</td>
            <td>{device.signal}</td>
            <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm">
              Details
            </button>
          </tr>
        ))}
      </tbody>
    </section>
  )
}
