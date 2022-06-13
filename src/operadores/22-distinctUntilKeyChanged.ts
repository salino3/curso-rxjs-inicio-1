import { applicationDefault } from "firebase-admin/app";
import { from, of, map } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, tap } from "rxjs/operators";

// ejemplo
const numeros$ = of(1, "1", 1, 3, 3, 2, 4, 4, 5, 3, 1, "1");

numeros$
  .pipe(
    distinctUntilChanged() // se ejecuta con el triple igual de JS '==='
  )
  .subscribe(console.log);

/// 1º ejercicio
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

// para retornar el campo(s) que quiero esté pendiente
from(personajes)
  .pipe(
    distinctUntilChanged(
    (anterior, actual) => anterior.nombre === actual.nombre)// aquí no compara el espacio en la memoria, el index
  )
  .subscribe(console.log);

console.log(personajes);


//
/// 2º ejercicio
interface Coches {
  nombre: string;
  año: number;  
}

// utilizando distinctUntilChanged() con objetos con más parametros
const coches: Coches[] = [
  {
    nombre: "bmw",
    año: 11,
  },
  {
    nombre: "fiat",
    año: 12
  },
  {
    nombre: "fiat", // no se emite
    año: 8,
  },
  {
    nombre: "seat",
    año: 10,
  },
  {
    nombre: "suzuki", // no se emite
    año: 10,
  },
];

from(coches)
  .pipe(
    // aquí no compara el index
    distinctUntilChanged(
      (ant, act) => ant.año === act.año || ant.nombre === act.nombre
    )
  )
  .subscribe(console.log);


/// 3º ejercicio distinctUntilKeyChanged()
interface Trabajos {
    profesion: string;
    antiguedad: number;
}

// para retornar los campo(s) que quiero esté pendiente
const trabajadores: Trabajos[] = [
  {
    profesion: "panadero",
    antiguedad: 8,
  },
  {
    profesion: "software dev",
    antiguedad: 5,
  },
  {
    profesion: "piloto",
    antiguedad: 5, // no se emite
  },
  {
    profesion: "panadero",
    antiguedad: 8,
  },
  {
    profesion: "policia",
    antiguedad: 10,
  },
  {
    profesion: "policia", // no se emite
    antiguedad: 12,
  },
];

from(trabajadores)
  .pipe(
    distinctUntilKeyChanged("profesion"),
    distinctUntilKeyChanged("antiguedad")
  )
  .subscribe(console.log);