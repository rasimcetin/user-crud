using Microsoft.EntityFrameworkCore;
using user_crud_backend_model;

namespace user_crud_backend_data;

public class UserContext:DbContext
{
    public UserContext(DbContextOptions<UserContext> options)
    :base(options)
    {

    }
    public DbSet<User> Users {get; set;}
}
