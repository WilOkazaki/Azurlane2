import * as yup from "yup";


// login validation

const loginValidation = yup.object().shape({
    email: yup.string().email().required("se requiere Email").trim(),
    password: yup.string()
    .required("Se requiere contraseña")
    .min(6, "Contraseña debe ser de mas de 6 caracteres")
    .max(20, "Contraseña debe ser de menos de 20 caracteres")
})

// register validation

const registerValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),

    fullName: yup
    .string()
    .required("Se requiere nombre completo")
    .max(20, "Contraseña debe ser de menos de 20 caracteres"),
});

export { loginValidation, registerValidation }





