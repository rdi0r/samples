
var observable = {
    subscribe: function subscribe(obs) {
        [1, 2, 3].forEach(obs.next);
        obs.complete();
    }
}

var observer = {
    next: function(val){
        console.log(val);
    },
    error: function(err){
        console.log(err);
    },
    complete: function(){
        console.log("complete");
    }
}



observable.subscribe(observer);