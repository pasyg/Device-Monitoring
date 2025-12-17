import DeviceCard from './DeviceCard.jsx'

export default function DeviceList({ devices }) {
  return devices.map(d => (
    <DeviceCard key={d.id} device={d} />
  ))
}
