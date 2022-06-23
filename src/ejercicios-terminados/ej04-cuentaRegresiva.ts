import { interval, takeUntil, timer, take, range, of, asyncScheduler, from } from "rxjs";
import { tap, map, takeWhile } from "rxjs/operators";
/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
(() => {
  const inicio = 7




  const countdown$ = interval(700).pipe(
    map<number, number>((x: number) => inicio - x),
    takeWhile(( y ) => y  > 0, true)
  );

  // No tocar esta línea ==================
  countdown$.subscribe(console.log); // =
  // ======================================
})();
