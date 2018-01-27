const form = document.querySelector('form');
const numCard = document.getElementById('cn');
const typeCard = document.querySelector('#type-card');
const visaImg = 'assets/images/visa.png';
const mastercardImg = 'assets/images/mastercard.png';
const number = /^([0-9])*$/;
// variables de validación 
let validateNumCard = false;

/** Función que valida el número de tarjeta */
numCard.addEventListener('keyup', () => {
  let num = numCard.value;
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
      numCard.classList.add('success');
      numCard.classList.remove('error');
      if (num.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)) {
        typeCard.setAttribute('src', visaImg);
      }
      if (num.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
        typeCard.setAttribute('src', mastercardImg);
      }
    } else {
      validateNumCard = false;
      numCard.classList.add('error');
      numCard.classList.remove('success');
      typeCard.setAttribute('src', '');
    }
  } else {
    validateNumCard = false;
    numCard.classList.add('error');
    numCard.classList.remove('success');
    typeCard.setAttribute('src', '');
  }
});


// Función que valida y envía todos los campos
form.addEventListener('submit', (event) => {
  if (validateNumCard) {
    alert('valido');
  }
});