// video 84
// creando formulario
import { fromEvent, tap, pluck, catchError, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, mergeMap, switchMap, exhaustMap } from "rxjs/operators";


// helper
const peticionHttpLogin = (userPass) =>
  ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError(() => of("no valid token!"))
);



const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email..';
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password..";
inputPass.value = "cityslicka";

submitBtn.innerHTML = 'Submit';

form.append( inputEmail, inputPass, submitBtn)
document.querySelector('body').append(form);

// streams
const submitForm$ = fromEvent<Event>(form, "submit").pipe(
  tap((event) => event.preventDefault()),
  map((event) => ({
    email: event.target[0].value,
    password: event.target[1].value,
  })),
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe( token => {
  console.log('cod. token: ', token)
})

