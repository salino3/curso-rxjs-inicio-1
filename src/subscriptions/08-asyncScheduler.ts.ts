import { asyncScheduler } from "rxjs";
// asyncScheduler crea una subscription



setTimeout(() => {}, 3000);

setInterval(() => {}, 3000);

//let nombre = ["casa", "puente", "gato"];
//const saludar = () => console.log("Hola mundo"); primera opción
//const saludar2 = (nombre) => console.log(`Hola ${nombre}`); segunda opción
// const saludar3 = (nombre) => console.log(`Hola ${nombre}`);


//asyncScheduler.schedule(saludar, 2000); primera opción // se ejecuta una vez
//asyncScheduler.schedule(saludar2, 2000, 'Denny'); segunda opción // se ejecuta una vez
// asyncScheduler.schedule(saludar3, 2000, "Denny"); // se ejecuta una vez



const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state: ", state);
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

/// unsubscribe utilizando setTimeout()
setTimeout(() => {
  subs.unsubscribe(); // y ya no se ejecuta 'const subs = asyncScheduler.schedule()'
}, 6000);

/// unsubscribe con schedule() con 'arrow function'
asyncScheduler.schedule(() => subs.unsubscribe(), 6000); // después unsubscribe() ya no se ejecuta la constante y la función a dentro
