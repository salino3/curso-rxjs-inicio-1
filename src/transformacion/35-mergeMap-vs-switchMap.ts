// video 81
import { interval, fromEvent} from 'rxjs';
import { mergeMap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$
  .pipe(
 //  mergeMap(() => interval$)
    switchMap(() => interval$)
  )
  .subscribe(console.log);
// switchMap() se desuscribe de anteriores suscripciones, se subscribe a la última
// en vez el mergeMap() llevará suscripto a todas las suscripciones, la actual y las anteriores a la vez

