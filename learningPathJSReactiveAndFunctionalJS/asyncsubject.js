
//const mainObservable = Rx.Observable.interval(1000).take(5);
const subject = new Rx.AsyncSubject(); // 2, Number.POSITIVE_INFINITY = buffer to store (window size)
//  -----1---2---3-------
// A-----1---2---3-------
// B--       2---3-------
const observerA = {
    next: (val) => {
        console.log("A next_" + val);
    },
    error: (err) => {
        console.log("error_" + err);
    },
    complete: () => {
        console.log("done A");
    }
}

const observerB = {
    next: (val) => {
        console.log("B next_ " + val);
    },
    error: (err) => {
        console.log("Error_ " + err);
    },
    complete: () => {
        console.log("done B");
    }
}

subject.subscribe(observerA);

console.log("A subscribed");
setTimeout(() => {
    subject.next(1);
}, 100);
setTimeout(() => {
    subject.next(2);
}, 200)
setTimeout(() => {
    subject.next(3);
}, 300);
setTimeout(() => {
    subject.complete();
}, 350);

setTimeout(() => {
    subject.subscribe(observerB);
    console.log("Subscribed B");
}, 400);

