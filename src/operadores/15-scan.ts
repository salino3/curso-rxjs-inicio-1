// scan() es una fucnióm acumuladora, se ejecuta siempre durante
// el proceso y luego devuelve el total acumulado

import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";
const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (accumular, corriente) => {
//     return accumular + corriente;
// }

const totalAcumulador = (accumular, corriente) => accumular + corriente;

// Reduce
from(numeros)
  .pipe(reduce(totalAcumulador, 0))
  //
  .subscribe(console.log);

// Scan
from(numeros)
  .pipe(scan(totalAcumulador, 0))
  //
  .subscribe(console.log);

// Redux (manejar el estado global de la aplicación en un único objeto)

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "fher", autenticado: false, token: null },
  { id: "fher", autenticado: true, token: "ABC" },
  { id: "fher", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
