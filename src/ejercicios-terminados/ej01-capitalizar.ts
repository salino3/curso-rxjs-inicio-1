/** video 99
 * Ejercicio:
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", se debe usar un observable y llamar la función capitalizar
 */

import { from } from "rxjs";
import { tap, map } from 'rxjs/operators'


  const nombres = [
    "batman",
    "joker",
    "doble cara",
    "pingüino",
    "hiedra venenosa",
  ];

  /** salida esperada:

 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */

  const capitalizar = (nombre: string) =>
    nombre.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );

  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
  for (let nombre of nombres) {
    console.log("utilizando 'for()': ", capitalizar( nombre));
  }

// utilizando la función
from(nombres).pipe(
  map(x => capitalizar(x) )
).subscribe( console.log)

// otra opción directamente con operadores 
from(nombres)
  .pipe(map((x) => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()))
  .subscribe( console.log);
