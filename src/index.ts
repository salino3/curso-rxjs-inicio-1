import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado: "),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);
  //
  return () => {
    clearInterval(interval);
    console.log("intérvalo destruido");
  };
  //
});

const subscription = intervalo$.subscribe();
//
const subscription2 = intervalo$.subscribe();
//
const subscription3 = intervalo$.subscribe();
//
setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe();
  console.log("completado timeout");
}, 3000);
