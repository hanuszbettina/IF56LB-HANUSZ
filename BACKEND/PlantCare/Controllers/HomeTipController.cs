using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlantCare.Data;
using PlantCare.Entities.Dtos.HomeTip;
using PlantCare.Logic.Logic;
using PlantCare.Entities.Dtos.Plant;

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

        [HttpGet]
        public IEnumerable<HomeTipGetDto> GetAllHomeTips()
        {
            return logic.GetAllHomeTips();
        }
        [HttpPost]
        public async Task AddHomeTip(HomeTipCreateDto dto)
        {
            var user = await userManager.GetUserAsync(User);
            var userId = user?.Id ?? "dummy-user-id"; // vagy egy konstans teszt userId
            logic.AddHomeTip(dto, userId);
        }
        [HttpDelete]
        public void DeleteHomeTip(string id)
        {
            logic.DeleteHomeTip(id);
        }
        //[HttpPost]
        //public void UpdateHomeTip(string id, [FromBody] HomeTipCreateDto dto)
        //{
        //    logic.UpdateHomeTip(id, dto);
        //}

    }
}
