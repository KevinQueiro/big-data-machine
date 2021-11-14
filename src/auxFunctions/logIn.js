const logIn = (usuario, contraceña) => {
    if (usuario === "gerente" && contraceña === "pass123") {
        return "OK"
    } else {
        return "usuario y/o contraceña incorrectos"
    }
}

export default logIn;