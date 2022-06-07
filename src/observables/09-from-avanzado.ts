import { of, from } from "rxjs";

/* 
of = toma argumentos y genera una secuencias y observables;
from = crea observable desde array, promise, iterable, observable
*/

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("completed"),
};
// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]);

// const source$ = from("Denny");
// const source$ = of(..."Denny");

//source$.subscribe(observer);

const source$ = from(fetch("https://api.github.com/users/klerith"));

// source$.subscribe(async (resp) => {  opción de llamada 'async', 'await'
//   console.log(resp.url);
//   const dataResp = await resp.json();
//   console.log(dataResp);
// });

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield "casa";
  yield 7;
  yield 5;
};

const miIterable = miGenerador();

/// función syncrona
for (let id of miIterable) {
  console.log(id);
}

from(miIterable).subscribe(observer);
