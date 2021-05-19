const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "administrateur" && password === "motdepasse") {
        alert("Connexion autorisée. Redirection vers l'interface de contrôle du poulailler.");
        open("../index.html")
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})