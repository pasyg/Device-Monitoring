using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class DeviceController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMessage()
    {
        return Ok(new { message = "Hello from DeviceApi Controller!" });
    }
}