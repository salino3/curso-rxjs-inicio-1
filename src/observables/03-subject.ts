import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado "),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(intervalID);
    console.log("Intervalo destruido");
  };
});

//
/* Subject() tipo especial observable
1) Casteo múltiple: muchos 'subscriber' se subscriben al mismo 'observable' y van a tener todos la misma información
2) También es un observer
3) Se puede manejar 'Next','error' y 'complete'
*/
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((rnd) => console.log("subscription", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("suscrizione2", rnd));

const subs1 = subject$.subscribe((rnd) => console.log("subscription", rnd));
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
