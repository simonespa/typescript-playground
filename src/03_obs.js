// no imports since this uses the html module imports
const input = document.getElementById('input')
const isNum = code=>48 && code <=57 // only want numeric values

// observables are for STREAMS of data
// we tend to identify observables by a trailing dollar sign
const keyup$ = Rx.Observable.fromEvent(document, 'keyup') // listen for ANY keyup event

// the observable is only created onmce there is a subscriber (lazy instantiation)
keyup$.pluck('keyCode') // our obsable knows about every key-code from every key event
    .filter(isNum)
    .subscribe( (keyCode)=>{console.log(`User typed ${String.fromCharCode(keyCode)}`)} )

// as many subscribers as you like!!
keyup$.pluck('keyCode') // our obsable knows about every key-code from every key event
    .filter(isNum)
    .subscribe( (keyCode)=>{console.log(`tell adverts ${String.fromCharCode(keyCode)}`)} )

