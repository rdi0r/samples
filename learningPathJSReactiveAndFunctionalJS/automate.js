
const connectObservableA = Rx.Observable.interval(1000)
                            .multicast(new Rx.Subject(0));

const connectA = connectableObservable.connect();
                            
connectObservableA.subscribe(
    val => console.log("val_" + val),
    err => console.log("error_" + err),
    ()  => console.log("done connect a")
)

const connectableObservable = Rx.Observable.interval(1000)
                                .multicast(new Rx.Subject(0))
                                .refCount();

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
        console.log("B next_" + val);
    },
    error: (err) => {
        console.log("Error_" + err);
    },
    complete: () => {
        console.log("done B");
    }
}

connectableObservable.subscribe(observerA); // count => 1
console.log("A subscribed");

setTimeout(() => {
    connectableObservable.subscribe(observerB);  // count => 2
    console.log("Subscribed B");
}, 2000);

setTimeout(() => {
    sub.unsubscribe(observerB);
}, 5000)
