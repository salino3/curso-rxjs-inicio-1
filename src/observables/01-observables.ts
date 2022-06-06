//06-06-22
import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("siguiente [next]: ", value),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.info("completado [obs]"),
};

// opción crear observable poco utilizada..
//const obs$ = Observable.create();

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Forzar un error
  //   const a = undefined;
  //   a.nombre = "Carlos";

  subs.complete();
});

obs$.subscribe(observer);

// opciónes renderizar observable en consola poco utilizada..
//obs$.subscribe( resp => console.log(resp));
//obs$.subscribe(console.log);
//
//
/// * // opciòn de ejecutar el código
// obs$.subscribe(
//   (valor) => console.log("next: ", valor),
//   (error) => console.warn("error: ", error), // con 'warn' se visualiza en amarillo
//   () => console.info("Completado")
// );
