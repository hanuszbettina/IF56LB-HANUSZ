using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlantCare.Entities.Dtos.Plant
{
    public class PlantStatisticsDto
    {
        public int TotalPlantCount { get; set; }
        public double AverageHomeTipCount { get; set; }
        public string MostTippedPlantName { get; set; } = "";
        public string LeastTippedPlantName { get; set; } = "";
    }
}
