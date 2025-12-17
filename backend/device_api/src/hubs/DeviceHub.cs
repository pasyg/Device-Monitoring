using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

public class DeviceHub : Hub
{
    private readonly ApplicationDbContext _context;

    public DeviceHub(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task GetDeviceStatus(int deviceId)
    {
        var device = await _context.Devices
            .Include(d => d.Readings.OrderByDescending(r => r.Timestamp).Take(1))
            .FirstOrDefaultAsync(d => d.Id == deviceId);

            await Clients.Caller.SendAsync("DeviceStatus", device);
    }

    public async Task GetAllDevices()
    {
        var devices = await _context.Devices.ToListAsync();
        await Clients.Caller.SendAsync("AllDevices", devices);
    }
}