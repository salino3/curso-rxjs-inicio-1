
import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');


click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true) // inclusive es true, emite el valor del último click
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complited"),
  });

 
