
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    //the param in the class if it is a single constructor can be as param
    public class ActivitiesController(AppDbContext context, IMediator mediator) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await mediator.Send(new GetActivityList.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivityDetail(string id)
        {
            var activity = await context.Activities.FindAsync(id);

            if (activity == null) return NotFound();

            return activity;
        }
    } 
}
