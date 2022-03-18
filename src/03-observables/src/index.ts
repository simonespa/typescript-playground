import * as rxjs from 'rxjs';

function* counter() {
  let counter = 1;
  while(true) {
    yield counter;
    counter += 1;
  }
}

const theCounter = counter();

rxjs.fromEvent(document, 'click')
  .pipe(rxjs.Operator.scan(count => count + 1, 0))
  .subscribe(() => console.log(`Clicked! ${theCounter.next().value}`));
