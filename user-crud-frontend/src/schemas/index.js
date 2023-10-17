import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userCreateSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required."),
  gender: yup.number().oneOf([0, 1], "Please enter your gender"),
  password: yup
    .string()
    .min(5, "Enter minimum 5 characters")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase, 1 lowercase letter and 1 number.",
    })
    .required("Please enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match.")
    .required("Please enter your password again."),
});

export const userUpdateSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required."),
  gender: yup.number().oneOf([0, 1], "Please enter your gender"),
});
