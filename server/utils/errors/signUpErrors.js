export const signUpErrors = (error) => {
    let errors = { username: "", email: "", password: "" };

    if (error.message.includes("username")) errors.username = "Le nom d'utilisateur est incorrect";

    if (error.message.includes("email")) errors.email = "L'adresse mail est incorrect";

    if (error.message.includes("password"))
        errors.password = "Le mot de passe doit faire 3 caractères minimum";

    if (error.code === 11000 && Object.keys(error.keyValue)[0].includes("username"))
        errors.username = `Le nom d'utilisateur < ${error.keyValue.username} > est déjà pris`;

    if (error.code === 11000 && Object.keys(error.keyValue)[0].includes("email"))
        errors.email = "Cet email est déjà enregistré";

    return errors;
};
