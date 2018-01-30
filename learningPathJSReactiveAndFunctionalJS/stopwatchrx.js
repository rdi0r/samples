
// interval observer
// click streams from 3 buttons

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

const start$ = Rx.Observable.fromEvent(startButton, "click");
const stop$ = Rx.Observable.fromEvent(stopButton, "click");
const reset$ = Rx.Observable.fromEvent(resetButton, "click");

const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const milliseconds = document.querySelector("#milliseconds");

const interval$ = Rx.Observable.interval(10);

const stopOrReset$ = Rx.Observable.merge(stop$, reset$)

const pausible$ = interval$
                    .takeUntil(stopOrReset$);

const init = 0;
const inc = acc => acc+1;
const reset = acc => init;

const incOrReset$ = Rx.Observable.merge(pausible$.mapTo(inc), reset$.mapTo(reset))
const pad = (number) => number <= 9 ? ('0' + number) : number.toString();
const toTime = (time) => ({
    milliseconds: Math.floor(time%100),
    seconds: Math.floor((time/100)%60),
    minutes: Math.floor(time/6000)
})

const render = (time) => {
    milliseconds.innerHTML = pad(time.milliseconds);
    seconds.innerHTML = pad(time.seconds);
    minutes.innerHTML = pad(time.minutes);    
}

app$ = start$
        .switchMapTo(incOrReset$)        
        .startWith(init)
        .scan((acc, currFunc) => currFunc(acc))
        .map(toTime)
        .subscribe((x) => { 
            render(x)
        });


