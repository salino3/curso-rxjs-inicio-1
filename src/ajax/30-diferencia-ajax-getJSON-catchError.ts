// video 70
import { of } from 'rxjs';// 'rxjs' se importa primero, buena practica
import {ajax, AjaxError} from 'rxjs/ajax';
import { catchError} from 'rxjs/operators'


//const url = "https://api.github.com/users?per_page=5";
const url = 'https://httpbinxx.org/delay/1';
const manejaError = (resp: AjaxError) => {
  console.warn('error: ', resp.message);
  return of({
    ok: false,
    usuarios: []
  })
}


//
 // 'getJSON' se utiliza importando 'ajax'
const obs$ = ajax.getJSON(url)

const obs2$ = ajax(url).pipe(catchError(manejaError));


obs$.pipe(
  catchError(manejaError)
).subscribe({
  next: val =>  console.log('next: ', val),
  error: err => console.warn('error en subs: ', err),
  complete: () => console.log('completed')
});
obs2$.subscribe((data) => console.log("ajax: ", data));


