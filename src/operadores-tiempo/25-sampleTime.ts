import { fromEvent } from "rxjs";
import { map, sampleTime} from 'rxjs/operators'


const click$ = fromEvent<MouseEvent>(document, 'click');

// al devolver puedo escribir 'x' y 'y' porque la propriedad
// tiene el mismo nombre de la variable a emitir
click$
  .pipe(
    sampleTime(2000), // sampleTime() hay que ponerlo antes para no generar calculos inutiles
    map(({ x, y }) => ({ x, y }))
  )
  .subscribe(console.log);
