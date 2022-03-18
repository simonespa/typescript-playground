import * as Rx from 'rxjs' // latest rxjs npm install rxjs

const input = document.getElementById('input')
const isNum = code=>48 && code <=57 // only want numeric values

const filter = [];


Rx.Observable
    .fromEvent(document, 'keyup')
    .map((e: KeyboardEvent) => e.key)
    .debounceTime(150)
    .do(() => console.log('something'))
    .subscribe((obj)=>{
        console.log(obj);
    })
    .do(() => console.log('something'))
