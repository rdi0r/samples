

var plusStream = $("#plus").asEventStream("click").map(1);

var minusStream = $("#minus").asEventStream("click").map(-1);

var counterStream = plusStream.merge(minusStream).scan(0, function(prev, curr){
    return prev+ curr;
});

counterStream.assign($("#count"), "text");