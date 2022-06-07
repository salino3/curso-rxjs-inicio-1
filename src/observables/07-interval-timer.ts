import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("completed: "),
};

const hoyEn5sec = new Date();
hoyEn5sec.setSeconds(hoyEn5sec.getSeconds() + 5);

// siempre empieza de default desde cero y subiendo
const interval$ = interval(1000); // se ejecuta siempre cada tiempo 'x'
const timer$ = timer(2000); // se ejecuta una sola vez, en el tiempo asiñado
const timera$ = timer(2000, 1000); // empieza ejecutarse después tiempo 'x' y siempre cada 'y'
const timerhoyEn5sec$ = timer(hoyEn5sec); // se ejecuta una vez

interval$.subscribe(observer);

timer$.subscribe(observer);
timera$.subscribe(observer);
timerhoyEn5sec$.subscribe(observer);
