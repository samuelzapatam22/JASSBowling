//LogIn
document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, rellena todos los campos.");
    return;
  }
  const storedDataString = localStorage.getItem("userData");

  if (storedDataString) {
    const storedData = JSON.parse(storedDataString);
    if (username === storedData.username && password === storedData.password) {
      window.location.href = "../View/inicio.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  } else {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    alert("El Usuario No Esta Registrado");
  }
});
