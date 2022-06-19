import {ajax} from 'rxjs/ajax';

// method GET: para obtener informaciones,
// method POST: para crear un usuario o una información,
// method PUT: para modificar usuario o info existente,
// method DELETE: para eliminar usuario o información


const url = 'https://httpbin.org/delay/1';

// >>>>>>>>>
// utilizando 'get' con 'ajax'
// ajax.get(url, {
   //parametros headers etc..
// })

// utilizando 'post' con 'ajax'
// ajax.post(
//   url,
//   {
//     id: 1,
//     nombre: "David"
//   },
//   {
//     "mi-token": "ABC123", //parametros headers
//   }
// ).subscribe(console.log);

// // utilizando 'put' con 'ajax'
// ajax
//   .put(
//     url,
//     {
//       id: 1,
//       nombre: "David",
//     },
//     {
//       "mi-token": "ABC123", //parametros headers// no cambia nada con post
//     }
//   )
//   .subscribe(console.log);

//   // utilizando 'delete' con 'ajax'
// ajax
//   .delete(// method delete es como method post
//     url,
//     {
//       id: '1', // no me deja utilizar el tipo 'number'
//       nombre: "David"
//     } 
//     //,
//     // {
//     //   "mi-token": "ABC123", //parametros headers no son permitidos
//     // }
//   )
//   .subscribe(console.log); <<<<<<<<<<

  ajax({
    url: url, // redundante, no obligatorio dado que propriedad y variable tiene mismo nombre
    method: 'POST',
    headers: {
   'mi-token': 'gatos2' 
  },
  body: {
    id: 1,
    nombre: 'Carlos'
  }
  }).subscribe(console.log)