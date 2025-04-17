using Microsoft.EntityFrameworkCore;
using CloneGitHub.BLL.Interfaces;
using CloneGitHub.BLL.Services;
using CloneGitHub.DAL.EF;
using Microsoft.Extensions.FileProviders;

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

var app = builder.Build();
app.UseStaticFiles();

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
