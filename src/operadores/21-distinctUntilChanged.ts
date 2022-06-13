import { from } from "rxjs";
import {  distinctUntilKeyChanged, tap } from "rxjs/operators";



interface Personaje {
  nombre: string;
}
// utilizando distinct() con objetos
const personajes: Personaje[] = [
  {
    nombre: "Megaman",
  },
  {
    nombre: "Megaman",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
  {
    nombre: "Dr. Willy",
  },
  {
    nombre: "X",
  },
  {
    nombre: "X",
  },
  {
    nombre: "Zero",
  },
];

from(personajes)
  .pipe(
    distinctUntilKeyChanged(
      'nombre'
  ))
  .subscribe(console.log);

console.log(personajes);
