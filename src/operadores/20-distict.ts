import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, "1", "1", 3, 3, 2, 4, 4, 5, 3, 1);

numeros$
  .pipe(
    distinct() // se ejecuta con el triple igual de JS '==='
  )
  .subscribe(console.log);

/// otro ejercicio
interface Personaje {
  nombre: string;
}
// utilizando distinct() con objetos
const personajes: Personaje[] = [
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
    nombre: "Megaman",
  },
  {
    nombre: "Zero",
  },
];

// para retornar el campo que quiero esté pendiente
from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
