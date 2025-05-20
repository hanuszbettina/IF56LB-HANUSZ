using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlantCare.Data;
using PlantCare.Entities.Dtos.HomeTip;
using PlantCare.Logic.Logic;

namespace PlantCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   // [Authorize]
    public class HomeTipController : ControllerBase
    {
        HomeTipLogic logic;
        UserManager<AppUser> userManager;

        public HomeTipController(HomeTipLogic logic, UserManager<AppUser> userManager)
        {
            this.logic = logic;
            this.userManager = userManager;
        }

        [HttpPost]
        public async Task AddHomeTip(HomeTipCreateDto dto)
        {
            var user = await userManager.GetUserAsync(User);
            var userId = user?.Id ?? "dummy-user-id"; // vagy egy konstans teszt userId
            logic.AddHomeTip(dto, userId);
        }
    }
}
