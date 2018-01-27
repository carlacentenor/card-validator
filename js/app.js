const form = document.querySelector('form');
const numCard = document.getElementById('cn');

let validateNumCard = false;

/**Función que valida el número de tarjeta */
numCard.addEventListener('keyup', () => {
  let num = numCard.value;
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
  } else {
    validateNumCard = false;
  }
})




form.addEventListener('submit', (e) => {
if(validateNumCard){
  alert('valido');
}
});