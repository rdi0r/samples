
const streamA = Rx.Observable.interval(300).take(6);
const streamB = Rx.Observable.interval(500).take(4);

const streamOutput = Rx.Observable.combineLatest(
                    streamA, streamB, (a, b) =>{
                        return a+b;
                    })
                    .subscribe((x) => {
                        console.log(x);
                    })

// const streamOutput = streamA.merge(streamB)
//                             .subscribe(x => {
//                                 console.log(x);
//                             });

// streamA
//     .skip(6)
//     .filter((x) => {
//     return x%2 !== 0;
//     })
//     .map((val) => {
//         return val*10;
//     })
//     .subscribe((x) => {
//         console.log(x);
//     })

// const streamB = Rx.Observable.of(1,2,3,4);

// const streamOutput = streamA.concat(streamB)
//                             .subscribe(x => {
//                                 console.log(x);
//                             })

