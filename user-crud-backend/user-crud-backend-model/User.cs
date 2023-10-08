namespace user_crud_backend_model;

public class User
{
    public required Guid Id {get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set; }    
    public required Gender Gender {get; set;}
    public required string Email { get; set; }
    public required string Password { get; set; }
    public required DateTimeOffset CreatedDate { get; set; }

}
