// spread operator is the opposite of ...rest

{
  const squares = [1, 4, 9, 16, 25];
  const powers = [2, 4, 8, 16, 32];

  // we can spread these arrays (access each member separately)

  const both = [...squares, ...powers];
  console.log(both);

  
}
