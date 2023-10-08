import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const UserDetail = ({ user, changeUser, userAction, isForUpdate }) => {
  const handleChange = (event) => {
    changeUser(event.target.name, event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    userAction();
  };

  return (
    <Container
      sx={{
        width: "30%",
        position: "relative",
        top: "5rem",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {isForUpdate ? "Update" : "Create"}{" "}
        {isForUpdate ? user.firstName : "User"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <TextField
            name="firstName"
            value={user.firstName}
            label="First name"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            value={user.lastName}
            label="Last name"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            name="email"
            value={user.email}
            label="Email"
            variant="standard"
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              name="gender"
              value={user.gender}
              labelId="gender"
              label="Gender"
              variant="standard"
              onChange={handleChange}
            >
              <MenuItem value={0}>Male</MenuItem>
              <MenuItem value={1}>Female</MenuItem>
            </Select>
          </FormControl>

          {!isForUpdate && (
            <>
              <TextField
                name="password"
                value={user.password}
                label="Password"
                type="password"
                variant="standard"
                onChange={handleChange}
                // Use the InputAdornment component to add an icon button to the end of the field
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
              <TextField
                name="confirmPassword"
                value={user.confirmPassword}
                label="Confirm Password"
                type="password"
                variant="standard"
                onChange={handleChange}
                // Use the InputAdornment component to add an icon button to the end of the field
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </>
          )}

          <Button variant="contained" sx={{ borderRadius: 2 }} type="submit">
            {isForUpdate ? "Update User" : "Create User"}
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

const userDetailPropTypes = {
  user: PropTypes.object.isRequired,
  changeUser: PropTypes.func.isRequired,
  userAction: PropTypes.func.isRequired,
  isForUpdate: PropTypes.bool.isRequired,
};
UserDetail.propTypes = userDetailPropTypes;

export default UserDetail;
