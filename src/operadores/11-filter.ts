import { Observable, range, from, pipe, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log); // 1, 3, 5, 7, 9

range(1, 10)
  .pipe(
    filter((val, i) => {
      console.log("index", i);
      return val % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo === "heroe"))
  .subscribe(console.log);
// * // * //
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), // <KeyboardEvent, string>
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
