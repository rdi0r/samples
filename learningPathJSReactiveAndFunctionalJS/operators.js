


const of$ = Rx.Observable.of(1,2,3);

of$.subscribe(
    val => console.log("of next value: " + val),
    err => console.log("of error: " + err),
    () => console.log("of done")
)
function* even() {
    let i = 2;
    while (true) {
        yield i;
        i = i + 2;
    }
}

var gen = even();
const prom = Promise.resolve(42);

//const from$ = Rx.Observable.from(gen);
const from$ = Rx.Observable.fromPromise(prom);
const empty$ = Rx.Observable.empty();

empty$.subscribe(
    val => console.log("next value: " + val),
    err => console.log("error: " + err),
    () => console.log("done with empty")

)

const from$ = Rx.Observable.from([1,2,3,4])



from$.subscribe(
    val => console.log("from next value: " + val),
    err => console.log("from error: " + err),
    () => console.log("from done")
)


