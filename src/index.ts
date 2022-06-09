import { fromEvent, range } from "rxjs";
import { map } from "rxjs/operators";

//ventajas del map();

//range(1,5).subscribe(val => console.log(val * 10))// 10, 20, 30 ,40 ,50

let A = range(1, 5)
  .pipe(map<number, string>((val) => (val * 10).toString()))
  .subscribe(console.log);

//{JSON.stringify(A);}

const Keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const KeyupCode$ = Keyup$.pipe(map((event) => event.code));
// desde ahora puedo utilizar 'KeyupCode$' el contenido modificado de 'Keyup$'

//
Keyup$.subscribe((val) => console.log("tecleado sin map(): ", val));
KeyupCode$.subscribe((val) => console.log("tecleado después map(): ", val));
