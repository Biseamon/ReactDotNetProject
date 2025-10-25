using System;
using Application.Activities.DTOs;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MapperProfiles : Profile
{
    public MapperProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<CreateActivityDto, Activity>();
    }
}
