// video 100
import { filter, from } from "rxjs";
import { reduce } from "rxjs/operators";

/**
 * Ejercicio:
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 *
 * Tip:
 * isNaN() es una función de JavaScript para determinar si es número
 * isNaN() string serán true, devuelve lo que NO es número, 
 * atención espera números por defecto, tipar el filter() con <any>
 * Usar filter<any>(...) para no tener problemas de tipado.
 */


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos)
    .pipe(
      filter<any>((x) => !isNaN(x)),
      reduce((acc, item) => acc + item)
// reduce(((acc, item) =>  acc + item), 10)// inicializando el valor así, resultado: 42
    )
    .subscribe(console.log); 


