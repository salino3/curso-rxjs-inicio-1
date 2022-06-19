// video 69
import {ajax} from 'rxjs/ajax';


//const url = "https://api.github.com/users?per_page=5";
const url = 'https://httpbin.org/delay/1'


const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123',
//'Pragma': 'yes-cache' me modifica los datos del 'https'
});

obs$.subscribe(data => console.log('data!: ', data));


