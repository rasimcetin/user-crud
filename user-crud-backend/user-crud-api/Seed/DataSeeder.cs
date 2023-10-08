using Microsoft.EntityFrameworkCore;
using user_crud_backend_data;
using user_crud_backend_model;

namespace user_crud_api;

public class DataSeeder
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var context = new UserContext(serviceProvider.GetRequiredService<DbContextOptions<UserContext>>());
        if (context.Users.Any())
        {
            return;
        }

        context.Users.AddRange(
            new User{
                CreatedDate = DateTimeOffset.UtcNow,
                Email = "david@gmail.com",
                FirstName="David",
                Id = Guid.NewGuid(),
                Gender = Gender.Male,
                LastName = "Smith",
                Password = "david@"
            },
            new User{
                CreatedDate = DateTimeOffset.UtcNow,
                Email = "susan@gmail.com",
                FirstName="Susan",
                Id = Guid.NewGuid(),
                Gender = Gender.Female,
                LastName = "Susan",
                Password = "susan@"
            }
        );

        context.SaveChanges();
    }
}
