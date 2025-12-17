using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/device-data")]
public class DeviceDataController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IHubContext<DeviceHub> _hubContext;

    public DeviceDataController(ApplicationDbContext context, IHubContext<DeviceHub> hubContext)
    {
        _context = context;
        _hubContext = hubContext;
    }

    [HttpPost]
    public async Task<IActionResult> ReceiveData([FromBody] DeviceDataDto data)
    {
        try
        {
            var device = await _context.Devices
                .FirstOrDefaultAsync(d => d.IpAddress == data.DeviceIp);

            if(device == null)
            {
                device = new Device
                {
                    Name = data.DeviceName,
                    IpAddress = data.DeviceIp,
                    IsOnline = true,
                    LastSeen = DateTime.UtcNow
                };
                _context.Devices.Add(device);
                await _context.SaveChangesAsync();
            }
            else
            {
                device.IsOnline = true;
                device.LastSeen = DateTime.UtcNow;
            }

            var reading = new DeviceReading
            {
                DeviceId = device.Id,
                Status = data.Status,
                Timestamp = DateTime.UtcNow
            };

            _context.DeviceReadings.Add(reading);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.All.SendAsync("DeviceDataReceived", new
            {
                deviceId = device.Id,
                deviceName = device.Name
            });
            Console.WriteLine($"Received data from {data.DeviceName} ({data.DeviceIp}): {data.Status}");
            return Ok( new { message = "Data received successfully."});
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpGet("{deviceId}/history")]
    public async Task<IActionResult> GetDeviceHistory(int deviceId, [FromQuery] int hours = 24)
    {
        var since = DateTime.UtcNow.AddHours(-hours);

        var readings = await _context.DeviceReadings
            .Where(r => r.DeviceId == deviceId && r.Timestamp >= since)
            .OrderByDescending(r => r.Timestamp)
            .ToListAsync();

        return Ok(readings);
    }
}

public class DeviceDataDto
{
    public string DeviceName { get; set; } = "";
    public string DeviceIp { get; set; } = "";
    public string Status { get; set; } = "";
}