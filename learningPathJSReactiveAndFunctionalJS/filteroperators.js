// const input$ = Rx.Observable.interval(500);
const input$ = Rx.Observable.of(1,1,2,34,45,5,6,6,7,7,78,8);

// const output$ = input$.skip(2).take(5).filter(x => x%2 === 0).first();
// const output$ = input$.skip(2).take(5).filter(x => x % 2 === 0).last();
// const output$ = input$.distinct();

const output$ = input$.distinctUntilChanged();

output$.subscribe(
    val => console.log("next value_" + val),
    err => console.log("Error_"+ err),
    ()  => console.log("Done")
)