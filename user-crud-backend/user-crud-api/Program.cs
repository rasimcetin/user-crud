using Microsoft.EntityFrameworkCore;
using user_crud_api;
using user_crud_backend_data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var host = Environment.GetEnvironmentVariable("HOST");
var port = Environment.GetEnvironmentVariable("PORT");
var database = Environment.GetEnvironmentVariable("DATABASE");
var userId = Environment.GetEnvironmentVariable("USER_ID");
var password = Environment.GetEnvironmentVariable("PASSWORD");
var connectionString = $"Host={host};Port={port};Database={database};User Id={userId};Password={password};";
builder.Services.AddDbContext<UserContext>(options => options.UseNpgsql(connectionString, 
                                                            x => x.MigrationsAssembly("user-crud-backend-data")));

builder.Services.AddCors(options => {
    options.AddPolicy(name:"user-crud-cors", builder => {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});                       

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    DataSeeder.Initialize(services);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("user-crud-cors");

app.UseAuthorization();

app.MapControllers();

app.Run();
