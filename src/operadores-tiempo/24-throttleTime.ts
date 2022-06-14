import { fromEvent, pluck, asyncScheduler } from "rxjs";
import { defaultThrottleConfig } from "rxjs/internal/operators/throttle";
import { debounceTime, throttleTime, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, "click");

click$.pipe(throttleTime(3000))
//.subscribe(console.log);

// Ejemplo 2º
const input = document.createElement("input");
document.querySelector("body").append(input);

const input$ = fromEvent(input, "keyup");
// (property) ThrottleConfig.leading
input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true, // si quiero el primer elemento
      trailing: true, // si quiero el último elemento
    }),
    pluck("target", "value"),
    distinctUntilChanged()
  )
  .subscribe(console.log);
