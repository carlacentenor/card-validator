$(document).ready(() => {
  $inputCardNumber = $('#cn');
  $inputName = $('#name');
  $inputExpiryDate = $('#exp');
  $inputSecurityCode = $('#cvv');
  $buttonPay = $('#button-pay');

  const isNameValid = ()  => {
    /* Usaremos una expresion regular para validar que escriba bien su nombre */
    var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
    return PATERNNAME.test($inputName.val());
  }

  const areAllValidationsPassing = () => {  
    return isNameValid();
  }

  const formStateEvent = () => {
    $buttonPay.prop('disabled', !areAllValidationsPassing());
  }

  $inputCardNumber.focus();

    $inputCardNumber
    .focus()
    .on('keyup', )
    .on('keyup', );

  $inputName
    .focus()
    .on('keyup', isNameValid)
    .on('keyup', formStateEvent);

  $inputExpiryDate
    .focus()
    .on('keyup', )
    .on('keyup', );

  $inputSecurityCode
    .on('keyup', )
    .on('keyup', );

  formStateEvent();
});