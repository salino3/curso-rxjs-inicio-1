// video 94
import { of, interval, delay, forkJoin } from "rxjs";
import { take } from 'rxjs/operators';
// forkJoin() emite su valor como un arreglo cuando todos
// sus 'observable(s)' se han completado,
// emite el último valor de cada 'observable$'.
//* se puede transormar el arreglo en un 'objeto'

const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe( delay(3500))

// forkJoin(
//     numeros$, interval$, letras$)
//   .pipe()
//   .subscribe((resp) =>
// //* console.log("numeros: ", (resp[0] += resp[1]) + resp[2])// otra opción posible
//    {
//      console.log("numeros: ", resp[0])    
//     console.log("intervalo: ", resp[1])
//     console.log("letras: ", resp[2])
//  }
//   );

//
/// hay que convertirlo en 'objeto' con las llaves
forkJoin(
    {
    num: numeros$,
    int: interval$,
    let: letras$
})
  .subscribe((resp) =>
      console.log(resp.let) 
  );



