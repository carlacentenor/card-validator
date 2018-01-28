// Función para permitir sólo números, retroceso y enter
function SoloNumeros(evt) {
  if (window.event) { // asignamos el valor de la tecla a keynum
    keynum = evt.keyCode; // IE
  } else {
    keynum = evt.which; // FF
  }

  // comprobamos si se encuentra en el rango numérico
  if ((keynum > 47 && keynum < 58) || keynum == 8 || keynum == 13) {
    return true;
  } else {
    return false;
  }
}

// Función para verificar que la fecha escrita sea correcta según el formato YYYYMMDD
function ValidarFecha() {
  // Almacenamos el valor digitado en TxtFecha
  var Fecha = document.getElementById('TxtFecha').value;

  var Mensaje = '';

  // Si la fecha está completa comenzamos la validación
  if (Fecha.length == 4) {
    var Mes = parseInt(Fecha.substr(0, 2)); // Extraemos el mes
    var Anio = parseInt(Fecha.substr(2, 2)); // Extraemos en año


    // Si las partes de la fecha concuerdan con las que digitamos, es correcta
    if ((Anio <= 99) && (Mes > 0 && Mes <= 12)) {
      Mensaje = 'Fecha correcta';
    } else {
      Mensaje = 'Fecha incorrecta';
    }
  }

  // Mostramos el mesaje
  document.getElementById('Mensaje').innerHTML = Mensaje;
}