public class DeviceReading
{
    public int Id { get; set; }
    public int DeviceId { get; set; }
    public DateTime Timestamp { get; set; }
    public string Status { get; set; } = "";
    public Device Device { get; set; } = null!;
}