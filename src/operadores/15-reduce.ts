import { reduce, interval } from "rxjs";
import { take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

// primer ejemplo con reducer()
const total = numbers.reduce(totalReducer, 0);
console.log("total arreglo: ", total);
//

// secundo ejemplo con reducer()
// el operador interval() de default es asincrono, devuelve un 'Observable' que emite sequencia infinita de números ascendentes,
// la primera emisión sucede después del teimpo preestablecido y es 0
interval(1000) // cada segundo sube de un número, se acumulan todos y al final los suma todos
  .pipe(take(5), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete: "),
  });
