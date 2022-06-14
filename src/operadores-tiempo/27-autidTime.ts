// video 62
import { fromEvent } from "rxjs";
import { auditTime, map, tap} from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x}) => x ),
    tap(val => console.log('tap, clientX: ', val)),
    auditTime(2000)
// 'clientY' resulta 'undefined' porque el map() ha modificado la variable y eliminado los otros parametros
).subscribe((val: any) => console.log('después auditTime, clientY: ', val.clientY))


