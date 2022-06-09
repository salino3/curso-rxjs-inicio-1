import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

//ventajas del map, mapTo, pluck();

//range(1,5).subscribe(val => console.log(val * 10))// -> 10, 20, 30 ,40 ,50

range(1, 5)
  .pipe(map<number, string>((val) => (val * 10).toString()))
  .subscribe(console.log);

//
// captura el evento especificando desde donde, y cual evento
const Keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const KeyupCode$ = Keyup$.pipe(map((event) => event.code));
// desde ahora puedo utilizar 'KeyupCode$' el contenido modificado de 'Keyup$'
///

// se puede pedir un solo elemento especifico por ejemplo, target.baseURI
const keyupPluck$ = Keyup$.pipe(pluck("target", "baseURI"));
//
//con mapTo decido yo cual seria la salida de la información
// 'mapTo()' is deprecated. (igualmente funciona)
const keyupMapTo$ = Keyup$.pipe(mapTo("tecla presionada!"));
// aconsejan utilizar 'map()' de esta forma
const keyupMapTo2$ = Keyup$.pipe(map(() => "tecla presionada!"));

//
Keyup$.subscribe((val) => console.log("tecleado sin map(): ", val));
KeyupCode$.subscribe((val) => console.log("tecleado después map(): ", val));
keyupPluck$.subscribe((val) => console.log("tecleado con pluck: ", val));
keyupMapTo$.subscribe((val) => console.log("tecleado con mapTo: ", val));
keyupMapTo2$.subscribe((val) => console.log("tecleado con map: ", val));
