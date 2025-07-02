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
using CloneGitHub.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// string? connection = builder.Configuration.GetConnectionString("DefaultConnection");
string? connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<CloneGitHubContext>(options =>
    options.UseMySql(connection, ServerVersion.AutoDetect(connection)));


builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("JwtSettings"));
builder.Services.AddScoped<JwtTokenGenerator>();
builder.Services.AddAuthentication(options => {
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
    options.TokenValidationParameters = new TokenValidationParameters {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
        ValidAudience = builder.Configuration["JwtSettings:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:SecretKey"]))
    };

    options.Events = new JwtBearerEvents {
        OnMessageReceived = context => {
            var tokenFromCookie = context.Request.Cookies["user_session"];
            if (!string.IsNullOrEmpty(tokenFromCookie)) {
                context.Token = tokenFromCookie;
            }
            return Task.CompletedTask;
        }
    };
});
builder.Services.AddAuthorization();

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(policy => {
        policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});
// builder.Services.AddDbContext<CloneGitHubContext>(options => options.UseSqlServer(connection));
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
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<CloneGitHubContext>();
    dbContext.Database.EnsureCreated();
}

app.Run();