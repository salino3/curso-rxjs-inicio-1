// video 92
import { fromEvent, merge } from 'rxjs';
import {  take, pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
  keyup$.pipe(take(2), pluck('key' )),
  click$.pipe(pluck("type"))
).subscribe(console.log);
// orden de salida: el primero que emite valor,
// nel caso contemporaneamente, prioridad primer 'observable'