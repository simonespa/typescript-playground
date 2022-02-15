{
  function firstElement<T>(array:T[]):T {
    return array[0];
  }

  // some collections
  const s = firstElement(['a', 'b', 'c']);

  const n = firstElement([1, 2, 3]);

  const u = firstElement([]); // undefined

  console.log(s);
  console.log(n);
  console.log(u);
}
