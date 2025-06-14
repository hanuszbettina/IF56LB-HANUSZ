﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PlantCare.Entities.Dtos.Plant;
using PlantCare.Logic.Logic;

namespace PlantCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantController : ControllerBase
    {
        PlantLogic logic;

        public PlantController(PlantLogic logic)
        {
            this.logic = logic;
        }

        [HttpPost]
       // [Authorize(Roles = "Admin")]
        public void AddPlant(PlantCreateUpdateDto dto)
        {
            logic.AddPlant(dto);
        }


        [HttpGet]
        public IEnumerable<PlantShortViewDto> GetAllPlants()
        {
            return logic.GetAllPlants();
        }

        [HttpDelete("{id}")]
       // [Authorize(Roles = "Admin")]
        public void DeletePlant(string id)
        {
            logic.DeletePlant(id);
        }

        [HttpPut("{id}")]
      //  [Authorize(Roles = "Admin")]
        public void UpdatePlant(string id, [FromBody] PlantCreateUpdateDto dto)
        {
            logic.UpdatePlant(id, dto);
        }

        [HttpGet("{id}")]
        public PlantViewDto GetPlant(string id)
        {
            return logic.GetPlant(id);
        }

        [HttpGet("stats")]
        public IEnumerable<PlantStatsViewDto> GetAllPlantsStats()
        {
            return logic.GetAllPlantsForStats();
        }

        [HttpGet("statistics")]
        public PlantStatisticsDto GetStatistics()
        {
            return logic.GetStatistics();
        }
    }
}
