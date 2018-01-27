const form = document.querySelector('form');
const numCard = document.getElementById('cn');
const typeCard = document.querySelector('#type-card');
const visaImg = 'assets/images/visa.png';
const mastercardImg = 'assets/images/mastercard.png';
let validateNumCard = false;

/**Función que valida el número de tarjeta */
numCard.addEventListener('keyup', () => {

  let num = numCard.value;
  if (!num || !/^([0-9])*$/.test(num)) {
console.log('Ingresa sólo números');
  }
    let sum = 0;
    let arrayCard = num.split('');
    let arrayReverse = arrayCard.reverse();

    for (let i = 0; i < arrayReverse.length; i++) {
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
    }

    for (let j = 0; j < arrayReverse.length; j++) {
      sum += parseInt(arrayReverse[j]); // sumar todos los elementos del array
    }
    if (sum % 10 === 0) {
      validateNumCard = true;
      if (num.match(/^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/)) {
        typeCard.setAttribute('src', visaImg);
      }
      if (num.match(/^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/)) {
        typeCard.setAttribute('src', mastercardImg);
      }
    } else {
      validateNumCard = false;
      typeCard.setAttribute('src', '');
    }
  
})



// Función que valida y envía todos los campos
form.addEventListener('submit', (e) => {
  if (validateNumCard) {
    alert('valido');
  }
});