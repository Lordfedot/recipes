import * as yup from "yup";
export const RegisterValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special symbol")
    .required()
    .min(7)
    .max(32),
  name: yup.string().required(),
});
