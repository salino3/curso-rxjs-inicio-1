// video 66
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError, of, pluck } from "rxjs";


const url  = 'https://api.github.com/users?per_page=5';

// interface 'Response', This Fetch API interface represents the response to a request.
const manejaErrores = (response: Response ) => {

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

// usando 'ajax' y 'AjaxError'
const atrapaError = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of([]);
};

const fetchPromesa = fetch(url);

// utilizando 'ayax'
ajax(url).pipe(
  pluck('response'),
  catchError(atrapaError)
)
.subscribe(users => console.log('usuarios: ', users));

//ajax(url).subscribe((val: any) => console.log(val.response));

// const obs$ = ajax("https://api.github.com/users?per_page=5").pipe(
//   map((userResponse) => console.log("users: ", userResponse)),
//   catchError((error) => {
//     console.log("error: ", error);
//     return of(error);
//   })
// );
// obs$.subscribe(console.log)

/// obs$.subscribe(val => console.log(val.response))




// 2º opción
// fetchPromesa
//    .then(manejaErrores) 
//    .then((resp) => resp.json())
//    .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("error en usuarios: ", err));



// 1º opción
  // fetchPromesa
// //   .then((resp) => console.log(resp))
//    .then((resp) => resp.json())
//    .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn("error en usuarios: ", err));
