using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlantCare.Entities.Dtos.HomeTip
{
    public class HomeTipGetDto
    {
        public required string PlantName { get; set; } = "";
        public required string Text { get; set; } = "";

    }
}
