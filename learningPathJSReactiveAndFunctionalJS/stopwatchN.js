

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");


const start$ = Rx.Observable.fromEvent(startButton, "click");
const stop$ = Rx.Observable.fromEvent(stopButton, "click");
const reset$ = Rx.Observable.fromEvent(resetButton, "click");

const milliseconds = document.getElementById("milliseconds");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");

const interval$ = Rx.Observable.interval(10);

const stopOrReset$ = Rx.Observable.merge(stop$, reset$);

const pausible$ = interval$
                .takeUntil(stopOrReset$);

const init = 0;
const inc = acc => acc+1;
const reset = acc => init;

const incOrReset$ = Rx.Observable.merge(pausible$.mapTo(inc), reset$.mapTo(reset));

const pad = (number) => number <= 9 ? ('0'+number) : number.toString();

const toTime = (time) => ({
    milliseconds: Math.floor(time%100),
    seconds: Math.floor((time/100)%60),
    minutes: Math.floor((time/6000))
})
// //emit immediately, then every 5s
// const source = Rx.Observable.timer(0, 5000);
// //switch to new inner observable when source emits, emit items that are emitted
// const example = source.switchMap(() => Rx.Observable.interval(500));
// //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
// const subscribe = example.subscribe(val => console.log(val));

app$ = start$
        .switchMapTo(incOrReset$)
        .startWith(init)
        .scan((acc, currFunc) => currFunc(acc))
        .map(toTime)
        .subscribe((x) => {
            milliseconds.innerHTML = pad(x.milliseconds),
            seconds.innerHTML = pad(x.seconds),
            minutes.innerHTML = pad(x.minutes),
            console.log(x)            
        });