/* Imagenes segun el tipo de numero de tarjeta */
const visaImg = 'assets/images/visa.png';
const mastercardImg = 'assets/images/mastercard.png';

/* Variables de validación */
const number = /^([0-9])*$/;
const validateVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
const validateMastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;

// declaración de variables de validación por cada campo requerido
let validateCvv = false;
let validateDateCard = false;
let validateNameUser = false;
let validateNumCard = false;

/** Función que valida que sólo ingresen números en la tarjeta*/
const onlyNumberCard = (num) => {
  if (number.test(num)) {
    return true;
  } 
};

// Función que válida que solo ingresen 16 caracteres en la tarjeta
const maxLengthCard = (num) => {
  if (num.length === 16) {
    return true;
  } 
};

// Función que valida el tipo de tarjeta 
const validateTypeCard = (num, images) => {
  if (num.match(validateVisa)) {
    images.attr('src', visaImg);
  } else if (num.match(validateMastercard)) {
    images.attr('src', mastercardImg);
  } else {
    images.attr('src', '');
  }
};


/* Función que valida el número de tarjeta según Algoritmo de Luhn*/

const validateNumberCard = (num, input, images) => {
  if (maxLengthCard(num) && onlyNumberCard(num)) {
    let sum = 0;
    let arrayCard = num.split('');
    let arrayReverse = arrayCard.reverse();

    arrayReverse.forEach((element, i) => {
      if (i % 2 !== 0) {
        let elementSelection = parseInt(arrayReverse[i]) * 2;
        if (elementSelection >= 10) {
          let elementFinal = parseInt(elementSelection / 10) + elementSelection % 10;
          arrayReverse[i] = elementFinal;
        } else {
          let otherElement = parseInt(arrayReverse[i]) * 2;
          arrayReverse[i] = otherElement;
        }
      }
    });

    arrayReverse.forEach((element, index) => {
      sum += parseInt(arrayReverse[index]);
    });

    if (sum > 0 && sum % 10 === 0) {
      validateNumCard = true;
      input.addClass('success');
      input.removeClass('error');
      validateTypeCard(num, images);
    } else {
      validateNumCard = false;
      input.addClass('error');
      input.removeClass('success');
      images.attr('src', '');
    }
  } else {
    validateNumCard = false;
    input.addClass('error');
    input.removeClass('success');
    images.attr('src', '');
  }
};

/* Función para validar el nombre */
const validateName = (name, input) => {
  /* Usaremos una expresion regular para validar que escriba bien su nombre */
  var PATERNNAME = /^([a-z ñáéíóú]{2,60})$/i;

  if (PATERNNAME.test(name)) {
    validateNameUser = true;
    input.addClass('success');
    input.removeClass('error');
  } else {
    validateNameUser = false;
    input.addClass('error');
    input.removeClass('success');
  }
};

/* Función para permitir sólo números, retroceso y enter */
const onlyNumber = (evt) => {
  /* Asignamos el valor de la tecla a keynum */
  if (window.event) {
    keynum = evt.keyCode; // IE
  } else {
    keynum = evt.which; // FF
  }

  /* comprobamos si se encuentra en el rango numérico */
  if ((keynum > 47 && keynum < 58) || keynum === 8 || keynum === 13) {
    return true;
  } else {
    return false;
  }
};

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

/* Función para validar que el codigo de seguridad solo tenga tres digitos */

const validateCode = (cvv, input) => {
  if (number.test(cvv) && cvv.length === 3) {
    validateCvv = true;
    input.addClass('success');
    input.removeClass('error');
  } else {
    validateCvv = false;
    input.addClass('error');
    input.removeClass('success');
  }
};