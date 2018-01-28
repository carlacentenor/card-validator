$(document).ready(() => {
  $inputCardNumber = $('#cn');
  $inputName = $('#name');
  $inputExpiryDate = $('#exp');
  $inputSecurityCode = $('#cvv');
  $buttonPay = $('#button-pay');

  $form = $('.form');
  $typeCard = $('#type-card');
  const visaImg = 'assets/images/visa.png';
  const mastercardImg = 'assets/images/mastercard.png';
  const number = /^([0-9])*$/;
  // variables de validación 
  let validateNumCard = false;
  
  /** Función que valida el número de tarjeta */

  let validateNumberCard = () => {
    let num = $inputCardNumber.val();
    if (num && number.test(num) && num.length === 16) {
      let sum = 0;
      let arrayCard = num.split('');
      let arrayReverse = arrayCard.reverse();
  
      arrayReverse.forEach((element, i) => {
        if (i % 2 !== 0) {
          let elementSelection = parseInt(arrayReverse[i]) * 2;
          if (elementSelection >= 10) {
            let digitInitial = parseInt(elementSelection / 10);
            let digitFinal = elementSelection % 10;
            let elementFinal = digitInitial + digitFinal;
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
        $inputCardNumber.addClass('success');
        $inputCardNumber.removeClass('error');
        if (num.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)) {
          $typeCard.attr('src', visaImg);
        }
        if (num.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
          $typeCard.attr('src', mastercardImg);
        }
      } else {
        validateNumCard = false;
        $inputCardNumber.addClass('error');
        $inputCardNumber.removeClass('success');
        $typeCard.attr('src', '');
      }
    } else {
      validateNumCard = false;
      $inputCardNumber.addClass('error');
      $inputCardNumber.removeClass('success');
      $typeCard.attr('src', '');
    }
  };


  const isNameValid = ()  =>{
    /* Usaremos una expresion regular para validar que escriba bien su nombre */
    var PATERNNAME = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
    return PATERNNAME.test($inputName.val());
  }

  const areAllValidationsPassing = () => {  
    return isNameValid();
  }

  const formStateEvent = () => {
    $buttonPay.prop('disabled', false);
  }

 


  $inputCardNumber.focus();

    $inputCardNumber
    .focus()
    .on('keyup', validateNumberCard )
    .on('keyup', formStateEvent);

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

    const activeButton= ()=> {
      if (validateNumCard && isNameValid()) {
        formStateEvent();
      }
    }

  
});