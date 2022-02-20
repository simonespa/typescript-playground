{
  interface Cephalopod {
    hasInk: boolean
    arms: number
    tentacles: number
  }

  interface CephalopodDictionary {
    [species: string]: Cephalopod
  }

  const dict: CephalopodDictionary = {};

  dict['octopus vulgaris'] = {
    hasInk: true,
    arms: 8,
    tentacles: 0
  }

  dict['loligo vulgaris'] = {
    hasInk: true,
    arms: 8,
    tentacles: 2
  }

  console.log(dict);

  const commonOct = dict['octopus vulgaris'];
  console.log(commonOct);
  console.log(`Common octopus has ${commonOct.tentacles} tentacles`);

  // we can remove data from the dictionary
  delete dict['loligo vulgaris'];

  console.log(dict);
}
