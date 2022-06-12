import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
  }, 1000);
  //
  setTimeout(() => {
    subscriber.complete();
    //  subscription.unsubscribe();
    //  subscription2.unsubscribe();
    //  subscription3.unsubscribe();
  }, 2500);
  //
  return () => {
    clearInterval(interval);
    console.log("intérvalo destruido");
  };
  //
});

const subscription = intervalo$.subscribe(observer);
//
const subscription2 = intervalo$.subscribe(observer);
//
const subscription3 = intervalo$.subscribe(observer);
//
// concadenado con add()
subscription.add(subscription2.add(subscription3));

setTimeout(() => {
  subscription.unsubscribe();
  console.log("completado timeout");
}, 4000);
