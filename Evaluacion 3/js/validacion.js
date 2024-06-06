function validar() {
    var retorno_email = validar_correo();
    var retorno_direccion = validar_direccion();
    var retorno_URL = validar_url();
    var retorno_comuna = validar_comuna();
    var retorno_contraseña = validar_contraseña();
    var retorno_confirmContraseña = validar_confirmar_contraseña();
    var retorno_telefono = validar_fono();
    var retorno_aficion = validar_aficiones();

    return retorno_email && retorno_direccion && retorno_URL && retorno_comuna && retorno_contraseña && retorno_confirmContraseña && retorno_telefono && retorno_aficion ;
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("emailError");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];

    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3)) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("addressError");
    var direccion = input_direccion.value;

    if (direccion.trim() === "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_url() {
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("websiteError");
    var url = input_url.value;
    var urlPattern = /^(https?:\/\/)?([a-z\d.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

    if (urlPattern.test(url)) {
        div_error_url.innerHTML = "";
        return true;
    } else {
        div_error_url.innerHTML = "La URL no tiene el formato correcto";
        div_error_url.className = "text-danger small mt-1";
        return false;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("comuna");
    var div_error_comuna = document.getElementById("comunaError");
    var comuna = select_comuna.value;

    if (comuna === "") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_contraseña() {
    var input_contraseña = document.getElementById("password");
    var div_error_contraseña = document.getElementById("passwordError");
    var contraseña = input_contraseña.value;

    if (contraseña.length < 6) {
        div_error_contraseña.innerHTML = "La contraseña debe tener al menos 6 caracteres";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_contraseña.innerHTML = "";
        return true;
    }
}

function validar_confirmar_contraseña() {
    var input_contraseña = document.getElementById("password");
    var input_confirmar_contraseña = document.getElementById("confirmPassword");
    var div_error_confirmar_contraseña = document.getElementById("confirmPasswordError");

    if (input_contraseña.value !== input_confirmar_contraseña.value) {
        div_error_confirmar_contraseña.innerHTML = "Las contraseñas no coinciden";
        div_error_confirmar_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmar_contraseña.innerHTML = "";
        return true;
    }
}

function validar_fono() {
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("phoneError");
    var fono = input_fono.value;
    var phonePattern = /^\+?[0-9\s-]{7,15}$/;

    if (phonePattern.test(fono)) {
        div_error_fono.innerHTML = "";
        return true;
    } else {
        div_error_fono.innerHTML = "El número de teléfono no tiene el formato correcto";
        div_error_fono.className = "text-danger small mt-1";
        return false;
    }
}

function validar_aficiones() {
    var check_aficiones = document.getElementsByClassName("form-check-input");
    var div_error_aficiones = document.getElementById("error-aficiones");
    var aficiones_seleccionadas = 0;
  
    for (var i in check_aficiones) {
      if (check_aficiones[i].checked) {
        aficiones_seleccionadas++;
      }
    }
  
    if (aficiones_seleccionadas < 2) {
      div_error_aficiones.innerHTML = "Debe seleccionar al menos 2 aficiones";
      div_error_aficiones.className = "text-danger small mt-1";
      return false;
    }
  
    div_error_aficiones.innerHTML = "";
    div_error_aficiones.className = "";
    return true;
  }
  