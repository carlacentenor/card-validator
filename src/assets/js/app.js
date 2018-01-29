$(document).ready(() => {
  $inputCardNumber = $('#cn');
  $inputName = $('#name');
  $inputExpiryDate = $('#exp');
  $inputSecurityCode = $('#cvv');
  $buttonPay = $('#button-pay');
  
  const areAllValidationsPassing = () => {  
    return validateName(name, $(this)) && validateNumberCard(cn, $(this), $typeCard) && validateDate(exp, $(this), $message) && validateCode(cvv, $(this));
  };
  
  const formStateEvent = () => {
    $buttonPay.prop('disabled', false);
  };

  $inputCardNumber
    .focus()
    .on('keyup', function() {
      $typeCard = $('#type-card');
      let cn = $(this).val();

      /* Llamamos a la funcion, para validar el número de tarjeta, 
      agregar una clase de error y success al input y la imagen que
      corresponda segun el numero que escriba */
      validateNumberCard(cn, $(this), $typeCard);
    })
    .on('keyup', formStateEvent);

  $inputName
    .on('keyup', function() {
      let name = $inputName.val();
      validateName(name, $(this));
    })
    .on('keyup', formStateEvent);

  $inputExpiryDate
    // .on('keypress', onlyNumber(event))
    .on('keyup', function() {
      $message = $('#message');
      let exp = $inputExpiryDate.val();

      /* Llamamos a la funcion, para validar la fecha de expiración 
      y agregar un mensaje de aprobación o error */
      validateDate(exp, $(this), $message);
    })
    .on('keyup', formStateEvent);

  $inputSecurityCode
    .on('keyup', function() {
      let cvv = $inputSecurityCode.val();
      validateCode(cvv, $(this));
    })
    .on('keyup', formStateEvent);
});