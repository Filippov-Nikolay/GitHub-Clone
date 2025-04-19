using Microsoft.EntityFrameworkCore;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.BLL.Services;
using CloneGitHub.DAL.EF;
using CloneGitHub.DAL.Interfaces;
using CloneGitHub.DAL.Repositories;
using AutoMapper;

var builder = WebApplication.CreateBuilder(args);

// Получаем строку подключения из файла конфигурации
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

builder.Services.AddTransient<IUnitOfWork, EFUnitOfWork>();
builder.Services.AddTransient<IRepositoryService, RepositoryService>();
builder.Services.AddTransient<IUserService, UserService>();
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
app.MapControllers();

app.Run();