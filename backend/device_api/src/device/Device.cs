public class Device
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string IpAddress {get; set; } = "";
    public bool IsOnline { get; set; }
    public DateTime LastSeen { get; set; }
    public List<DeviceReading> Readings { get; set; } = new List<DeviceReading>();

}