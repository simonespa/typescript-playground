// Downleveling defaults to ES3
// If no JS is defined, Typescript will transpile to ES3

// var a = 1;
// const b = 1;
// const fn = () => {};
// const obj = { property: 'value' };
// const anotherObj = {...obj};

// // old-school
// function greetOld(person:string, date:Date) {
//   console.log(`Greeting ${person}, today is ${date.toDateString()}`);
// }

// // modern-es
// const fn = (person:string, date:Date) => {
//   console.log(`Greeting ${person}, today is ${date.toDateString()}`);
// }

// Javascript is not OOP, is prototypical
const obj1 = Object.create({}) // this inherits from object
const obj2 = Object.create(null) // this inherits from null
// this will have all inherited methods from object
console.log(obj1);
// this won't have anything
console.log(obj2);

{
  let name:string = 'Simone';
  name = 'lalla';

  const fname = 'Lilli';

  const digits = [1,2,3];
  digits.push(4,5,6);

  console.log(digits)

  /*
   * They are functionally the same, identical
   */
  const names1:string[] = ['Joan', 'Simone'];
  const names2:Array<string> = ['Joan', 'Simone'];

  // One way to
  {
    // this is a type and must be let
    let person: {
      name: string,
      height: number,
      admin: boolean
    };

    person = { name: 'Mary', height: 3, admin: true };
  }

}
