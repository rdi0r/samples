
//const mainObservable = Rx.Observable.interval(1000).take(5);
const subject = new Rx.BehaviorSubject(0);

const observerA = {
    next: (val) => {        
        console.log("A next: " + val);
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
    error : (err) => {
        console.log("Error_ " + err);
    },
    complete: ()   => {
        console.log("done B");
    }
}

subject.subscribe(observerA);

console.log("A subscribed");
subject.next(1);
subject.next(2);
subject.next(3);

setTimeout(() => {
    subject.subscribe(observerB);
    console.log("Subscribed B");
}, 2000);

