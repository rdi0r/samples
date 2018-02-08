
const button = document.getElementById("click-me");

const click$ = Rx.Observable.fromEvent(button, "click");

const count$ = click$.bufferWhen(() => click$.debounceTime(250))
                     .map(list => list.length);

count$.subscribe(
    val => console.log("click_" + val),
    err => console.log("Error"),
    ()  => console.log("Done")
)

