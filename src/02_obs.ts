// import {fromEvent} from 'rxjs'
// import {pluck} from 'rxjs/operators'
import * as Rx from 'rxjs' // latest rxjs npm install rxjs

const input = document.getElementById('input')
const isNum = code=>48 && code <=57 // only want numeric values

// observables are for STREAMS of data
// we tend to identify observables by a trailing dollar sign
const keyup$ = Rx.of(document, 'keyup') // listen for ANY keyup event

// the observable is only created onmce there is a subscriber (lazy instantiation)
keyup$.pipe(Rx.pluck('keyCode')) // our observable knows about every key-code from every key event
    // .filter(isNum)
    // .subscribe( (keyCode)=>{console.log(`User typed ${String.fromCharCode(keyCode)}`)} )
    .subscribe( (keyCode)=>{console.log(`User typed something`)} )
// as many subscribers as you like!!
// keyup$.pluck('keyCode') // our observable knows about every key-code from every key event
//     .filter(isNum)
//     .subscribe( (keyCode)=>{console.log(`tell adverts ${String.fromCharCode(keyCode)}`)} )

