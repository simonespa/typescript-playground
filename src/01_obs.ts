// this uses rxjs 5.5.11 - npm install rxjs@5.5.11
import * as Rx from 'rxjs'
import {pluck} from 'rxjs/operators'

const input = document.getElementById('input')
const isNum = code=>48 && code <=57 // only want numeric values

// observables are for STREAMS of data
// we tend to identify observables by a trailing dollar sign
const keyup$ = Rx.Observable.fromEvent(document, 'keyup') // listen for ANY keyup event

// the observable is only created onmce there is a subscriber (lazy instantiation)
keyup$.pipe(pluck('keyCode')) // our obsable knows about every key-code from every key event
    // .filter(isNum)
    // .subscribe( (keyCode)=>{console.log(`User typed ${String.fromCharCode(keyCode)}`)} )
    .subscribe( (keyCode)=>{console.log(`User typed something`)} )
// as many subscribers as you like!!
// keyup$.pluck('keyCode') // our obsable knows about every key-code from every key event
//     .filter(isNum)
//     .subscribe( (keyCode)=>{console.log(`tell adverts ${String.fromCharCode(keyCode)}`)} )

