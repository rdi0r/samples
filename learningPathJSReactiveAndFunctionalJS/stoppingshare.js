
const connectableObservable = Rx.Observable.interval(1000)
                                .multicast(new Rx.Subject());

const sub = connectableObservable.connect();

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

connectableObservable.subscribe(observerA);

console.log("A subscribed");

setTimeout(() => {
    connectableObservable.subscribe(observerB);
    console.log("Subscribed B");
}, 2000);

setTimeout(() => {
  sub.unsubscribe();
}, 5000)
