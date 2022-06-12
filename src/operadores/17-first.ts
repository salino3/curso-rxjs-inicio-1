import { fromEvent } from "rxjs";
import { first, tap, map } from "rxjs/operators";

const clicks$ = fromEvent<MouseEvent>(document, "click");

clicks$
  .pipe(
    tap<MouseEvent>((evento) =>
      console.log("tapX: ", evento.clientX, "tapY: ", evento.clientY)
    ),
    map(({ clientY, clientX }) => ({
      //    ClientY: event.clientY, // otra opción
      ClientY: clientY,
      clientX, // guarda el nombre variable igual al parametro
    })),
    first((event) => event.ClientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("completed "),
  });
