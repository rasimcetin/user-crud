namespace user_crud_backend_model;

public static class UserExtension
{
    public static UserDto CreateUserDto(this User user)
    {
        return new UserDto(Id:user.Id, Email:user.Email, FirstName:user.FirstName, LastName:user.LastName, Gender:user.Gender);
    }

    public static void ConvertDtoToEntity(this UserDto dto, User entity)
    {
        entity.Email = dto.Email;
        entity.Gender = dto.Gender;
        entity.FirstName = dto.FirstName;
        entity.LastName = dto.LastName;
    }

    public static User CreateEntity(this UserCreateDto dto)
    {
        return new User
        {
            CreatedDate = DateTimeOffset.UtcNow,
            Email = dto.Email,
            FirstName = dto.FirstName,
            LastName = dto.LastName,
            Gender = dto.Gender,
            Id = Guid.NewGuid(),
            Password = dto.Password
        };

    }
}
