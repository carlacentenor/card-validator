/* Función para verificar que la fecha escrita sea correcta según el formato MMYY */
const validateDate = (date, input, sentence) => {
  let message = '';

  /* Si la fecha está completa comenzamos la validación */
  if (date.length === 4) {
    validateDateCard = true;
    input.addClass('success');
    input.removeClass('error');

    /* Extraemos el mes */
    let month = parseInt(date.substr(0, 2));

    /* Extraemos en año */
    let year = parseInt(date.substr(2, 2));

    /* Si las partes de la fecha concuerdan con las que digitamos, es correcta */
    if ((year <= 99) && (month > 0 && month <= 12)) {
      message = 'Fecha correcta';
      input.addClass('success');
      input.removeClass('error');
    } else {
      message = 'Fecha incorrecta';
      input.addClass('error');
      input.removeClass('success');
    }
  } else {
    validateDateCard = false;
    input.addClass('error');
    input.removeClass('success');
  }
  sentence.html(message);
};