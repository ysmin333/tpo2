function validarFormulario() {
  // Obtener los valores ingresados por el usuario y .trim() recorta
  // los posibles espacios en blanco al principio y al final.
  var nombreDeUsuario = document
    .getElementById("Nombre-de-Usuario")
    .value.trim();
  var apellidoDeUsuario = document
    .getElementById("Apellido-de-Usuario")
    .value.trim();
  var correoElectronico = document
    .getElementById("correo-electronico")
    .value.trim();
  var password = document.getElementById("contrasena").value.trim();

  // Verificar si algún campo está en blanco
  if (
    nombreDeUsuario === "" ||
    apellidoDeUsuario === "" ||
    correoElectronico === "" ||
    password === ""
  ) {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Si todas las validaciones son exitosas, enviar el formulario
  alert("Formulario enviado correctamente.");
  return true;
}

var form = document.getElementById("form");
form.addEventListener("submit", validarFormulario);
