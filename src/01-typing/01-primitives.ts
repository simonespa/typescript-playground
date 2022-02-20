// this block creates a new scope isolating the declarations from the global scope
{
  let name:string = 'Simone';
  name = 'lalla'; // can be assigned

  const digits = [1,2,3];
  digits.push(4,5,6);

  console.log(digits)

  /*
   * Functionally the identical
   */
  const names1:string[] = ['Joan', 'Simone'];
  const names2:Array<string> = ['Joan', 'Simone'];

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
