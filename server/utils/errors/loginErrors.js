export const loginErrors = (error) => {
    let errors = { email: "", password: "" };

    if (error.message.includes("email")) errors.email = "Email inconnu";
    if (error.message.includes("password")) errors.password = "Le mot de passe ne correspond pas";
    return errors;
};
