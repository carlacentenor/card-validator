# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

El plugin debe recibir una referencia a un elemento del DOM que contenga
`<input>`s con los siguientes nombres (atributo `name`):

* `cn` (Card Number): El número de la tarjeta de crédito
* `exp` (Expiry Date): Fecha de expiración
* `cvv` (Card Verification Value): Código de validación de 3 dígitos
* `name`: Nombre completo como aparece en la tarjeta

## Flujo de trabajo

1. Primero deberás **clonar** nuestro repositoio de prueba. 
   ```bash
   git clone https://github.com/<>/card-validator.git   
   ```

***

## Instalación

### Global 

```html
<script src="index.js"></script>
```

## Forma de uso

```js
// Si desea validar los input con los name anteriores, utilice las siguientes formulas

validateNumberCard(num, input, images);
validateNames(name, input);
validateDate(date, input, sentence);
validateCode(cvv, input);

```

