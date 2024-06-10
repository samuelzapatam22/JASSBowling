document.getElementById("registerBtn").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Expresiones regulares para validar nombre, apellido y correo
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    alert("El nombre y apellido solo pueden contener letras y espacios.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Por favor, introduce un correo electrónico válido.");
    return;
  }

  if (username === "" || password === "") {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  // Verificar si el usuario ya existe en el localStorage
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    const existingData = JSON.parse(storedData);
    if (existingData.username === username) {
      alert("El usuario ya existe.");
      return;
    }
    if (existingData.email === email) {
      alert("El correo electrónico ya está registrado.");
      return;
    }
  }

  const userData = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    birthDate: null,
    sex: null,
    phone: null,

  };

  localStorage.setItem("userData", JSON.stringify(userData));
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("username").value= "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
    window.location.href = "../View/index.html";
});
