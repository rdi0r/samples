//--------------------------------------------------
const input1$ = Rx.Observable.interval(300).take(10);
const input2$ = Rx.Observable.interval(1000).take(3);

// input1$ --0--1--2--3--4--5--6--7--8--|
// input2$ ---------0---------1--------2-|
// output$ -----(0,1,2)---(3,4,5)---(6,7,8)-|
// input1$.subscribe(
//     val => console.log("input 1_" + val),
//     err => console.log("error_ " +err),
//     ()  => console.log("Done")
// )
// input2$.subscribe(
//     val => console.log("input 2_" + val),
//     err => console.log("error_" + err),
//     ()  => console.log("Done")
// )
const output$ = input1$.buffer(input2$);
output$.subscribe(
    val => console.log("next val_" + val),
    err => console.log("Error_" + err),
    ()  => console.log("Done")
)

//--------------------------------------------------

// ------------------------------------------------
// const input1$ = Rx.Observable.interval(500).take(4);
// const input2$ = Rx.Observable.of(1,2,3)
// // input1$ -----0-----1-----2-----|
// // input2$ -----(1,2,3)-||
// // ------------------------------------------------
// const output$ = input1$.mergeMap(x => input2$);

// output$.subscribe(
//     val => console.log("next val_" + val),
//     err => console.log("Error_" + err),
//     ()  => console.log("Done")
// )
// ------------------------------------------------

// const input1$ = Rx.Observable.interval(500).take(4);
// const input2$ = Rx.Observable.interval(300).take(6);

// // input1$ -----0-----1-----2-----3-----|
// // input2$ -----0--2--3--4--5--|

// // output$ -----0--1--2-1--3--4--5--3--|

// const output$ = input1$.merge(input2$);

// output$.subscribe(
//     val => console.log("next value_ " + val),
//     err => console.log("Error_ " + err),
//     ()  => console.log("Done")
// )
// ------------------------------------------------

// --------------------------------------------------
// const input$ = Rx.Observable.interval(200).take(5);

// using map to add a function to each element emited by an observable
// const output$ = input$.map(x => x*2);
// output
// -----0-----1------2------3-------4-----
// output$.subscribe(
//     val => console.log("next value: " + val),
//     err => console.log("Error: " + err),
//     () => console.log("done")
// )
// now using scan to take an accumulator and the current value emitted and sum each of them
// -----0-----1------3------6------10
// sum: 0 + 1 + (2 +1) + (3+3) + (4+6)
// const output$ = input$.scan((acc, curr) => {
//     return acc+curr;
// }, 0)

// output$.subscribe(
//     val => console.log("next value: " + val),
//     err => console.log("Error: " + err),
//     ()  => console.log("Done")
// )
// --------------------------------------------------