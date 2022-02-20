// interface is sugar syntax and it's TypeScript only
{
  interface Monument {
    name:string
    height:number
  }

  const monuments: Monument[] = [];

  monuments.push({ name: 'Statue of Liberty', height: 46 });
  monuments.push({ name: 'Peter The Great', height: 96 });
  monuments.push({ name: 'Angela Of North', height: 20 });

  // a utility for comparing heights

  const compareHeights = (a:Monument, b:Monument):number => {
    if (a.height > b.height) {
      return -1;
    }

    if (a.height < b.height) {
      return 1;
    }

    return 0;
  };

  // ES6 arrays have a 'sort' function
  const byHeight = monuments.sort(compareHeights);
  console.log(monuments);
  console.log(byHeight);
}
