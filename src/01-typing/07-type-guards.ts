// type guards refers to conditional checking the type
// needs to be handled manually

{
  const eg = (sn: string | number) => {
    if (typeof sn === 'string') { // or instanceof
      return sn.length
    }

    return sn.toString().length;
  }

  const word = 'one point four nine';
  const number = 1.498;

  console.log(eg(word));
  console.log(eg(number));

  // Read about "Infinity" and Number.EPSILON
}
