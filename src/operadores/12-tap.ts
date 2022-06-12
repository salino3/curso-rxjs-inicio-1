import { range } from "rxjs";
import { map, tap } from "rxjs/operators";
const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => {
      console.log("antes: ", x);
      return 100;
      // el return no cambia directamente el flujo de información
    }),
    map((val) => (val * 10).toString()), // el toString() debe estar dentro del 'map'
    tap({
      next: (valor) => console.log("después: ", valor),
      complete: () => console.log("Se terminó todo"),
    })
  )
  .subscribe((val) => console.log("sub: ", val));
