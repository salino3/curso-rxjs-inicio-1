// video 95
import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "klerith";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repositorio: ajax
    .getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`)
    .pipe(
      catchError((err) => of(err))
      ),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((err) => of(err.response)))
  .subscribe(console.log);
