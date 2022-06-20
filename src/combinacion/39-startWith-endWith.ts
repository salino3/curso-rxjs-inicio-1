// video 89
import { of } from "rxjs";
import { endWith, startWith } from 'rxjs/operators';

const numeros$ = of(1, 2, 3).pipe(
  endWith("x", "y", "z"),
  startWith("a", "b", "c"),
);

numeros$.subscribe(console.log)

