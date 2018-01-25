
const height$ = Bacon.fromEvent(document.querySelector("#height-input"), "input")
                    .map(e => {
                        return parseInt(e.target.value);
                    })
                    .startWith(170);
                    

const weight$ = Bacon.fromEvent(document.querySelector("#weight-input"), "input")
                    .map(e => {
                        return parseInt(e.target.value);
                    })
                    .startWith(70);


const bmi$ = Bacon.combineWith(height$, weight$, (height, weight) => {
    const heightInMeters = height/100;
    const bmi = weight/(heightInMeters **2);
    return bmi.toFixed(2);    
    })
    .onValue((value) => {
        document.querySelector("#bmi").innerHTML = value;
    })

height$.onValue((value) => {
    document.querySelector("#height-value").innerHTML = value;
})
weight$.onValue((value) => {
    document.querySelector("#weight-value").innerHTML = value;
})