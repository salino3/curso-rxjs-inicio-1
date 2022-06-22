//*  video 93
import { combineLatest, fromEvent, merge } from 'rxjs';
import {  take, pluck, debounceTime } from "rxjs/operators";
// combineLatest() no funciona hasta que todos los observable
// tiene una emisión de valor, y la salida 
// será un conjunto de las ultimas emisiones de cada uno,
// si un 'observable' se completa, su valor sigue en la 
// emisión hasta que se completen todos los 'observable'


const input1 = document.createElement('input');
const input2 = document.createElement("input");

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*******';
input2.type = 'password';

document.querySelector('body').append(input1, input2)

// helper
const getInputStream = ( elem: HTMLElement) => {
  return fromEvent<KeyboardEvent>(elem, "keyup").pipe(
  pluck("target", "value"),
  debounceTime(2000)
    );
}

combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log)

