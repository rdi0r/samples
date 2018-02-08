
var createObservable = function (subscribe) {
    return({
        subscribe: subscribe
    })
}

var clickObservable = createObservable(function subscribe(obs){
    document.addEventListener("click", obs.next);
});

var arrayObservable = createObservable(function subscribe(obs){
    obs.next(1);
    obs.next(2);
    obs.next(3);
    obs.complete();
});

var observer = {
    next: function (val) {
        console.log(val);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log("complete");
    }
}
// simply sum
// 0--1--2--3--4--5--6--7--8--9--10
// 0--1--2--3--6--
const vals$ = Rx.Observable.range(0,10)
                .scan(
                    function(acc,curr) {
                        console.log("cur_" + curr);
                        console.log("acc_"+ acc);
                        return acc+curr;
                    }
                );

vals$.subscribe(        
    val =>  console.log("val: " + val),    
    err => console.log("Error_"+ err),
    ()  => console.log("done")
)


var rx$ = Rx.Observable.create(function (obs) {
    obs.next(4);
    obs.next(5);
    obs.next(6);
    obs.complete();
});

arrayObservable.subscribe(observer);

rx$.subscribe(
    val => console.log(val),
    err => console.log("Error_" + err),
    ()  => console.log("complete")
)

