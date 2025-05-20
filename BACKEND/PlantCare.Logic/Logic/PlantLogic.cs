using PlantCare.Data;
using PlantCare.Entities.Dtos.HomeTip;
using PlantCare.Entities.Dtos.Plant;
using PlantCare.Entities.Entity_Models;
using PlantCare.Logic.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlantCare.Logic.Logic
{
    public class PlantLogic
    {
        Repository<Plant> repo;
        DtoProvider dtoProvider;

        public PlantLogic(Repository<Plant> repo, DtoProvider dtoProvider)
        {
            this.repo = repo;
            this.dtoProvider = dtoProvider;
        }

        public void AddPlant(PlantCreateUpdateDto dto)
        {
            Plant p = dtoProvider.Mapper.Map<Plant>(dto);

            // csak akkor mentsük el, hogyha nincs ilyen nevű
            if (repo.GetAll().FirstOrDefault(x => x.Name == p.Name) == null)
            {
                repo.Create(p);
            }
            else
            {
                throw new ArgumentException("Ilyen névvel már van növény!");
            }
        }

        public IEnumerable<PlantShortViewDto> GetAllPlants() 
        {
            return repo.GetAll().Select(x =>
                dtoProvider.Mapper.Map<PlantShortViewDto>(x)
            );
        }

        //statisztikához diagram lekérdezés
        public IEnumerable<PlantStatsViewDto> GetAllPlantsForStats()
        {
            var list = repo.GetAll()
                    .Select(x => dtoProvider.Mapper.Map<PlantStatsViewDto>(x))
                    .ToList();

                var result = list
                    .GroupBy(t => t.Name)
                    .Select(g => new PlantStatsViewDto
                    {
                        Name = g.Key,
                        HomeTips = g.SelectMany(p => p.HomeTips ?? Enumerable.Empty<HomeTipViewDto>()).ToList()
                    })
                    .OrderByDescending(x => x.HometipCount);

                return result;
        }
        //statisztikák
            public PlantStatisticsDto GetStatistics()
            {
                var plants = repo.GetAll().ToList(); // vagy Include(x => x.HomeTips), ha EF-t használsz

                var mostTipped = plants.OrderByDescending(p => p.HomeTips?.Count ?? 0).FirstOrDefault();
                var leastTipped = plants.OrderBy(p => p.HomeTips?.Count ?? 0).FirstOrDefault();

                return new PlantStatisticsDto
                {
                    TotalPlantCount = plants.Count,
                    AverageHomeTipCount = plants.Average(p => p.HomeTips?.Count ?? 0),
                    MostTippedPlantName = mostTipped?.Name ?? "Nincs ilyen",
                    LeastTippedPlantName = leastTipped?.Name ?? "Nincs ilyen"
                };
            }


        public void DeletePlant(string id)
        {
            repo.DeleteById(id);
        }

        public void UpdatePlant(string id, PlantCreateUpdateDto dto)
        {
            var old = repo.FindById(id);
            dtoProvider.Mapper.Map(dto, old);
            repo.Update(old);
        }

        public PlantViewDto GetPlant(string id)
        {
            var model = repo.FindById(id);

            var dto = new PlantViewDto
            {
                Id = model.Id,
                Name = model.Name,
                HomeTips = model.HomeTips?
                    .Select(ht => new HomeTipViewDto
                    {
                        Text = ht.Text,
                    }).ToList()
            };

            return dto;
        }
    }
    
}
