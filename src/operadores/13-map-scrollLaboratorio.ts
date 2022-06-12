import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, enim id sollicitudin pharetra, lorem metus viverra eros, eget tempor ex dolor in metus. Donec in nulla ut velit pharetra malesuada molestie quis libero. Etiam sed risus nisi. Aliquam sed nisl nec quam mattis interdum. Nulla congue enim sapien, ac feugiat ante condimentum non. Pellentesque bibendum urna gravida, congue dolor eu, placerat neque. Sed suscipit lacus at rutrum tincidunt. Fusce viverra elit vel neque consectetur hendrerit.
<br/> <br/>
Mauris quis accumsan diam. Nullam nec orci volutpat, imperdiet est sit amet, elementum mauris. Aenean nisl lorem, mattis in diam vitae, placerat congue felis. Nam id nulla ut quam sodales auctor a pretium sapien. Sed in urna eu quam viverra consequat. Duis vel venenatis sem. Aliquam eget elit est. Integer lacinia tortor vitae arcu bibendum, vitae molestie elit varius. Donec vel sem quis odio ultricies laoreet tincidunt eu neque.
<br/> <br/>
Donec vestibulum pretium diam. Quisque viverra massa sed tellus laoreet semper. Phasellus ut eleifend mauris. Vestibulum accumsan eu elit quis interdum. Vivamus bibendum blandit imperdiet. Morbi porta efficitur leo. Maecenas vehicula mattis est at placerat. Duis venenatis augue sit amet diam finibus dignissim. Aenean velit ipsum, posuere sodales ultricies ac, convallis quis massa. Nam ante ex, tincidunt et nulla id, venenatis vestibulum justo. Nulla vel blandit dolor. Sed elementum ante nulla, id aliquam nibh ultrices sed. Aliquam arcu mauris, gravida vel viverra sed, blandit ac urna.
<br/> <br/>
Nam dignissim dictum lectus ac dignissim. Suspendisse consectetur diam nisi, sed pharetra neque fringilla maximus. Donec ornare, quam at pellentesque gravida, odio purus posuere purus, eu egestas libero velit vitae magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque molestie nec ex non efficitur. Vestibulum imperdiet gravida ipsum vel sodales. Vivamus eu arcu nec sem tristique laoreet. Nulla placerat libero eget ante volutpat laoreet. Etiam efficitur, lacus elementum cursus maximus, quam sem aliquam diam, quis bibendum turpis justo eget sapien. Sed vitae auctor turpis. Donec sapien sapien, auctor ut placerat efficitur, tempor ut risus. Phasellus eu libero tellus.
<br/> <br/>
Pellentesque vulputate tempus mi vel venenatis. Mauris elementum varius eros et porta. Vestibulum ac elit eget odio consectetur venenatis. Curabitur ac dolor ut orci pharetra cursus. Etiam porta at nisl ut fermentum. Maecenas sagittis, mi in rhoncus ornare, ligula elit feugiat leo, non porta risus nulla a nisl. Nunc commodo, orci at ultrices tempor, lorem massa iaculis ipsum, eget consequat odio arcu vitae ipsum. Pellentesque vitae dolor ac felis tincidunt blandit. Nam non risus sit amet dui accumsan aliquam et a odio. Nulla facilisi. Integer dui felis, mattis id lectus at, maximus aliquet lorem. Donec cursus eu augue ut imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce finibus justo massa, in feugiat quam tincidunt in. Morbi aliquam, ligula eu mollis faucibus, dolor mi consectetur mi, at pharetra ante dolor at tellus. Aliquam vitae nisi augue.
<br/> <br/>
Proin ac venenatis tortor. Nulla convallis eleifend massa, eget consectetur lectus hendrerit sit amet. Nam condimentum commodo tristique. Cras dictum quam quis ex facilisis scelerisque. Nullam sollicitudin, lectus in eleifend vehicula, leo nulla ornare lacus, ac porttitor nibh nisl et mauris. Nam mattis elit molestie, ultrices enim ut, aliquet libero. Mauris mattis viverra sapien nec dignissim. Maecenas id velit sem. Integer lobortis porttitor turpis. Maecenas tempus lacus in urna viverra varius. Praesent interdum dictum urna, in vestibulum lacus luctus eu. Nunc ullamcorper consectetur mauris pharetra vehicula. Ut tempor porttitor dolor, a finibus felis ultricies quis. Morbi in luctus lorem. Praesent et augue tellus.
<br/> <br/>
Sed ultricies purus et metus sagittis aliquet. Vivamus tempus vestibulum velit sed scelerisque. Nunc sodales non purus et facilisis. In at tellus in risus dignissim imperdiet. Maecenas urna metus, gravida pellentesque posuere nec, sollicitudin nec justo. Suspendisse mollis iaculis sem ac commodo. Praesent tincidunt tortor sem, vel dapibus dui venenatis lacinia. In nisl eros, iaculis at lectus eu, condimentum porta magna. Aenean non ultrices enim.
<br/> <br/>
In in porta tortor. Maecenas et tristique elit, elementum aliquam tellus. Integer vestibulum lectus non est sollicitudin consequat. Etiam ut lectus at turpis semper hendrerit. Proin eget libero eleifend, eleifend dolor in, condimentum arcu. Nullam malesuada leo quis mi volutpat facilisis. Quisque malesuada tincidunt purus vitae placerat. Nullam non nisi nibh. Donec in augue lacus. Vivamus ultrices fringilla lectus, non imperdiet nulla pharetra vitae. Maecenas ante dui, eleifend ut neque quis, vulputate malesuada justo. Maecenas eu lorem convallis, sodales erat sed, interdum tellus.
<br/> <br/>
Cras nec mi ut erat imperdiet pellentesque. Fusce vestibulum suscipit vehicula. Vestibulum euismod mi neque, sit amet mattis dolor finibus vitae. Maecenas nulla leo, finibus quis porttitor vel, vehicula quis sem. Vestibulum euismod pellentesque sagittis. Mauris eu mollis lacus, vitae rhoncus libero. Morbi convallis rhoncus tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ut elit porttitor, porta velit vel, pulvinar ante. Aliquam eget leo nec arcu posuere dignissim in sed dui. Mauris arcu neque, lacinia ac arcu vel, blandit faucibus metus. Ut venenatis, turpis et scelerisque fringilla, ipsum ipsum suscipit magna, feugiat semper leo odio vitae arcu. Donec eu magna porttitor, mattis eros sed, efficitur tellus. Nam nec metus eu tellus ullamcorper laoreet.
<br/> <br/>
Fusce erat odio, laoreet sit amet massa id, mattis sollicitudin dui. Vestibulum egestas maximus ante, non tempus ex congue nec. Donec porta neque sollicitudin leo lacinia bibendum. Mauris at metus sapien. Donec sed fermentum odio. Vestibulum convallis convallis cursus. Sed faucibus tellus eget felis rhoncus, eu tristique magna tempus. Aenean feugiat ultricies est, et malesuada felis dapibus ac. Mauris tincidunt est quis lacus condimentum, et maximus turpis lacinia.`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// función que haga el calculo
const calcularPorcantajeScroll = (event: any) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map(calcularPorcantajeScroll),
  //
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
