const btnLogin = document.querySelector(".btn-login");

btnLogin.addEventListener("click", () => {

    const nome = document.querySelectorAll("input")[0].value;

    const email = document.querySelectorAll("input")[1].value;

    const senha = document.querySelectorAll("input")[2].value;



    if(
        nome.trim() !== "aleks" ||
        email.trim() !== "aleksemanuel61@gmail.com" ||
        senha.trim() !== "123"
    ){

        alert("Nome, email ou senha incorretos!");

        return;
    }

    // LOGIN CORRETO

    localStorage.setItem("logado", "true");

    alert("Login realizado com sucesso!");

    window.location.href = "home.html";

});