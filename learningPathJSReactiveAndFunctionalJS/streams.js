
// const eventStream = Rx.Observable.interval(100)
//                         .take(5)
//                         .map((val) => {
//                             return 2 * (val+1);
//                         });                       


// eventStream
//     .repeat(3)                        
//     .subscribe((x) => {
//         console.log(x);
//     })

// const mainStream = Rx.Observable.interval(1000)

// const firstStream = mainStream
//                     .map((x) => {
//                         return x*10;
//                     })
//                     .subscribe((y) => {
//                         console.log("This is the first stream: " + y);
//                     });

// const secondStream = mainStream
//                     .filter((x) => {
//                         return x%3 === 0;
//                     })
//                     .subscribe((y) => {
//                         console.log("This is the second stream: " + y);
//                     });

// const mainStream = Rx.Observable.interval(300).take(10);

// const outputStream = mainStream
//                     .filter((x) =>{
//                         return x%3===0;
//                     })
//                     .do((x) => {
//                         console.log(x);
//                         return x;
//                     })
//                     .map((x) => {
//                         return x * 10;
//                     })
//                     .do((x) => {
//                         console.log("After map: " +x);
//                         return x;
//                     })
//                     .reduce((accumulator, x) => {
//                         return accumulator+x;
//                     })
//                     .subscribe((x) => {
//                         console.log(x);
//                     });

const mainStream = Rx.Observable.interval(100).take(15)
                        .map((x) => {
                            if (x === 13){
                                throw new Error("Sorry unlucky number");
                            }
                            else{
                                return x;
                            }
                        });

mainStream.subscribe(
    (x) => {
    console.log(x);
    },
    (error) => {
        console.log("There was an error saying " + error);
    },
    () => {
        console.log("The stream is complete");
    })