

const dragable = document.querySelector("#dragable");

const mousedown$ = Rx.Observable.fromEvent(dragable, "mousedown");
const mousemove$ = Rx.Observable.fromEvent(dragable, "mousemove");
const mouseup$ = Rx.Observable.fromEvent(dragable, "mouseup");

// 1. Detect mouse down
// 2. While down, listen for mouse move and mouse up
// 3. Finally on mouse up, stop listening for moves and mouse up

const mouseDrag$ = mousedown$.flatMap(mdEvent => {
  const startX = mdEvent.offsetX;
  const startY = mdEvent.offsetY;
  
  return mousemove$.map(mmEvent => {
      return {
          left: mmEvent.clientX - startX,
          top: mmEvent.clientY - startY
      }
  }).takeUntil(mouseup$);
})

mouseDrag$.subscribe(pos => {
    console.log(pos);
    dragable.style.top = pos.top + 'px';
    dragable.style.left = pos.left+ 'px';
})