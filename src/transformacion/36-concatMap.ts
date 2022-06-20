// video 81
import { fromEvent, interval} from 'rxjs';
import { take, switchMap, concatMap } from "rxjs/operators";


const interval$  = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');
//
click$.pipe(
  concatMap(() => interval$)
).subscribe(console.log)
// concatMap() se subscribe a todos 'observable(s)' pero se ponen en cola y los renderiza uno por uno siguiendo la cola
