import { fromEvent, Observable } from "rxjs";
import { ajax} from 'rxjs/ajax';
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";


const bodyx = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

bodyx.append(textInput, orderList);
// helpers
const mostraDatos = (datos: any ) => {
  orderList.innerHTML = '';
  for(const dato of datos){
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = dato.avatar_url;
    console.log(dato)

    const anchor = document.createElement('a');
    anchor.href = dato.html_url;
    anchor.text = 'ver página';
    anchor.target = '_blank';

    li.appendChild(img);
    li.append(dato.login + ' ');
    li.append(anchor);
    orderList.append(li)
  }
}


// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    pluck("target", "value"),
    map((texto) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    ),
    mergeAll(),
    pluck("items")
  )
  .subscribe(mostraDatos);


