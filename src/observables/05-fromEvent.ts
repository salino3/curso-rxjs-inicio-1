import { fromEvent } from "rxjs";

/* 
Eventos del DOM
*/
const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (val) => console.log("next", val),
};

src1$.subscribe((evento) => {
  console.log("la X", evento.x);
  console.log("la Y", evento.y);
});
src2$.subscribe((evento) => {
  console.log(evento.key);
});
