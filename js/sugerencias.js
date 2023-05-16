
function validarFormulario() {
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.
    var nombreDeUsuario = document.getElementById("Nombre").value.trim();
    var correoElectronico = document.getElementById("Email").value.trim();
    var password = document.getElementById("sugerencias").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || correoElectronico === "" || password === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    //El charCodeAt()método devuelve el Unicode del carácter en un índice especificado (posición) en una cadena.
  

  
    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }
