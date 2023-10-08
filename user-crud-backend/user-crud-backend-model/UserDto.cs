namespace user_crud_backend_model;

public record LoginDto(string Email, string Password, bool RememberMe);

public record UserDto (Guid? Id, string Email, string FirstName, string LastName, Gender Gender);

public record UserCreateDto(Guid? Id, string Email, string FirstName, string LastName, Gender Gender, string Password, string ConfirmPassword) : UserDto(Id, Email, FirstName, LastName, Gender);