import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Form, Formik } from "formik";

const UserDetail = ({ user, userAction, isForUpdate, validationSchema }) => {
  const handleSubmit = (values) => {
    console.log(values);
    userAction(values);
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
      <Formik
        validationSchema={validationSchema}
        initialValues={user}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <Stack gap={2}>
                <TextField
                  name="firstName"
                  value={formik.values.firstName}
                  label="First name"
                  variant="standard"
                  onChange={formik.handleChange}
                  error={formik.errors.firstName}
                />
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
                <TextField
                  name="lastName"
                  value={formik.values.lastName}
                  label="Last name"
                  variant="standard"
                  onChange={formik.handleChange}
                  error={formik.errors.lastName}
                />
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
                <TextField
                  name="email"
                  value={formik.values.email}
                  label="Email"
                  variant="standard"
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                />
                <FormHelperText error>{formik.errors.email}</FormHelperText>

                <FormControl fullWidth>
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formik.values.gender}
                    labelId="gender"
                    label="Gender"
                    variant="standard"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={0}>Male</MenuItem>
                    <MenuItem value={1}>Female</MenuItem>
                  </Select>
                </FormControl>
                <FormHelperText error>{formik.errors.gender}</FormHelperText>

                {!isForUpdate && (
                  <>
                    <TextField
                      name="password"
                      value={formik.values.password}
                      label="Password"
                      type="password"
                      variant="standard"
                      onChange={formik.handleChange}
                      error={formik.errors.password}
                      // Use the InputAdornment component to add an icon button to the end of the field
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText error>
                      {formik.errors.password}
                    </FormHelperText>

                    <TextField
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      label="Confirm Password"
                      type="password"
                      variant="standard"
                      onChange={formik.handleChange}
                      error={formik.errors.confirmPassword}
                      // Use the InputAdornment component to add an icon button to the end of the field
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />

                    <FormHelperText error>
                      {formik.errors.confirmPassword}
                    </FormHelperText>
                  </>
                )}

                <Button
                  variant="contained"
                  sx={{ borderRadius: 2 }}
                  type="submit"
                >
                  {isForUpdate ? "Update User" : "Create User"}
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

const userDetailPropTypes = {
  user: PropTypes.object.isRequired,
  userAction: PropTypes.func.isRequired,
  isForUpdate: PropTypes.bool.isRequired,
  validationSchema: PropTypes.object.isRequired,
};
UserDetail.propTypes = userDetailPropTypes;

export default UserDetail;
