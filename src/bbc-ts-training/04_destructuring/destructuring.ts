{
  const values = [1, 3, 6, 10, 15, 21];

  // is called an ellipsis
  const [first, second, , fourth, ...rest] = values;

  console.log(first, second, fourth);
  console.log(rest);
}

{
  const program = { name: 'Play School', presenter: 'Floella', started: 1976, ended: 1984 };

  const { name:n, presenter:p } = program;

  console.log(`${n} presented by ${p}`);

  // auto-unpacking
  const { name, presenter, ...rest} = program;
  console.log(`${name} presented by ${presenter} between ${rest.started} and ${rest.ended}`);
  console.log(`${name} presented by ${presenter} between ${rest['started']} and ${rest['ended']}`);
  console.log(`${name} presented by ${presenter} dates: ${JSON.stringify(rest)}`);

  function getMission(): [string, string, string] {
    return ['inform', 'entertain', 'educate'];
  }

  const [inf, ent, edu] = getMission();
  console.log(ent);
}
