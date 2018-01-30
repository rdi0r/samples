


const of$ = Rx.Observable.of(1,2,3);
//const from$ = Rx.Observable.from([1,2,3,4])

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
    val => console.log("empty next value: " + val),
    err => console.log("error: " + err),
    () => console.log("empty done with empty")
)

//never does nothing
const never$ = Rx.Observable.never();

never$.subscribe(
    val => console.log("never next value: " + val),
    err => console.log("never error: " + err),
    ()  => console.log("never done")
)
//

const create$ = Rx.Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next("ña");
    observer.complete();
})
create$.subscribe(
    val => console.log("from create value: "+ val),
    err => console.log("from an error in create" + err),
    () =>  console.log("create ended")
)


// from$.subscribe(
//     val => console.log("from next value: " + val),
//     err => console.log("from error: " + err),
//     () => console.log("from done")
// )


