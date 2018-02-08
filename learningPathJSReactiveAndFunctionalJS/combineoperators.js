
// const input1$ = Rx.Observable.interval(200).take(5);
// const input2$ = Rx.Observable.interval(300).take(3);
const input1$ = Rx.Observable.of("A", "B", "C");
const input2$ = Rx.Observable.of(1,2,3);

const output$ = Rx.Observable.zip(input1$, input2$, (x,y) => ({
    x,y
}))

// const output$  = input1$.concat(input2$);
// const output$ = input1$.combineLatest(input2$);

output$.subscribe(
    val => console.log("input_" + val.x, val.y),
    err => console.log("Error_" + err),
    ()  => console.log("Done")
)