// video 91
import { interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);

// el 'concat()' regresa un observable y se puede almacenar
// este valor a una variable
concat(
  interval$.pipe(take(3)),
  of({letras: ['a', 'b', 'c']}),// un objeto
  interval$.pipe(take(2)),
  [1, 2, 3, 4]// un array

).subscribe(console.log)

