import { fromEvent, interval } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const D = document.createElement("div");
// creando una class aquí, luego se puede modificar el elemento con CSS
D.setAttribute("class", "divindex");
D.innerHTML = "div con el botón";
document.querySelector("body").append(D);

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";
boton.setAttribute("id", "miBoton");
document.querySelector(".divindex").appendChild(boton);

///
// creando segundo <div>  class -> .  // o eligiendo id -> #
let D2 = document.createElement("div");
D2.setAttribute("id", "divindex2");
document.querySelector("body").append(D2);

// añadiendo 'h1'
const H1 = document.createElement("h1");
H1.innerHTML = "Hola Joe!";
document.querySelector("#divindex2").appendChild(H1);

/// * creando Observable(s) * //
const counter$ = interval(1000);
// const clickBtn$ = fromEvent(boton, 'click');  <-- opción sin 'skip'
//
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1), // el operador 'takeUntil' funcionará con el segundo click
  tap(() => console.log("tap después de skip"))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next: ", val),
  complete: () => console.log("completed "),
});
