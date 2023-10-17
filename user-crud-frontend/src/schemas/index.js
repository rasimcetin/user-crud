import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userCreateSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email girmek zorunludur."),
  gender: yup.number().oneOf([0, 1], "Lütfen cinsiyet bilgisini giriniz."),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5  karakter giriniz.")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Şifre girmek zorunludur."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor.")
    .required("Tekrar şifre girmek zorunludur."),
});

export const userUpdateSchema = yup.object().shape({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email girmek zorunludur."),
  gender: yup.number().oneOf([0, 1], "Lütfen cinsiyet bilgisini giriniz."),
});
