{
  /**
   * Literals
   */

  type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae';

  // type safety
  let k: Kingdom;

  k = 'Bacteria';
  k = 'Protozoa';

  /**
   * Enum are great when we have enumerables
   */

  // we can use a hybrid union/literal type
  type Arbitrary = 'Literally this' | 10 | false;
  let r: Arbitrary;

  r = 'Literally this';
  r = false;

  /**
   * Tuple
   */

  // tuple (this is a TypeScript only thing)
  let poem: [number, boolean, string];
  poem = [0, true, 'love'];
  // ts is especially good handy for autocompletion
  // poem[2]. gives autocompletion for the type of the element

  console.log(poem[2].charAt(0));
}
