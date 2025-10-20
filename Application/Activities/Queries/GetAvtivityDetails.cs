using System;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities.Queries;

public class GetAvtivityDetails
{
    public class Query : IRequest<Activity>
    {
        public string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Activity>
    {
        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Id], cancellationToken);

            if (activity == null)
            {
                throw new Exception("Actiivty not found");
            }

            return activity;
        }
    }
}
