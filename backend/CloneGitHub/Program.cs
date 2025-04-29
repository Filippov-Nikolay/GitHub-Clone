using Microsoft.EntityFrameworkCore;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.BLL.Services;
using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.DAL.Repositories;
using AutoMapper;
using Microsoft.Extensions.FileProviders;
using CloneGitHub.BLL.Service;
using CloneGitHub.BLL.MappingProfiles;

var builder = WebApplication.CreateBuilder(args);

string? connection = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(policy => {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});
builder.Services.AddDbContext<CloneGitHubContext>(options => options.UseSqlServer(connection));
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddAutoMapper(typeof(MappingProfile));


builder.Services.AddTransient<IUnitOfWork, EFUnitOfWork>();
builder.Services.AddTransient<IRepositoryService, RepositoryService>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddScoped<IEditService, EditService>();
builder.Services.AddControllersWithViews();

var app = builder.Build();
app.UseCors();
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseRouting();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();
app.UseHttpsRedirection();
app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<CloneGitHubContext>();
    dbContext.Database.EnsureCreated();
}

app.Run();
