document.getElementById("datosForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
      user.firstName = document.getElementById("nombreCompleto").value;
      user.lastName = document.getElementById("apellidocompleto").value;
      user.birthDate = document.getElementById("fechaNacimiento").value;
      user.sex = document.getElementById("sexo").value;
      user.phone = document.getElementById("numeroContacto").value;
      user.email = document.getElementById("correoElectronico").value;
      localStorage.setItem('userData', JSON.stringify(user));
      document.getElementById("datosForm").reset();

    } else {
      console.log("No se encontró el usuario seleccionado");
    }
  });
  