// video 82
import { fromEvent, interval} from 'rxjs';
import { take,  exhaustMap } from "rxjs/operators";


const interval$  = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');
//
click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log)
// exhaustMap() se subscribe a todos observable pero uno a la vez. 
// Y los observable que ejecutaron durante el observable corriente, se perderán
