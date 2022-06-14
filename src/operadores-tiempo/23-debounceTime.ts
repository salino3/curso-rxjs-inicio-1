// video 59
import { fromEvent, pluck } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";


const click$ = fromEvent(document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe(console.log);


// Ejemplo 2º
const input = document.createElement('input');
document.querySelector('body').append(input)

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    pluck('target', 'value'),
    debounceTime(1000),
    distinctUntilChanged()
    ).subscribe(console.log);

