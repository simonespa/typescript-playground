{
  // Enums are extensible
  enum Size {
    Small, // implicitly this is index 0
    Medium
  }

  enum Size {
    Large = 2
  }

  const sizeA = Size.Large;
  const sizeB = Size[sizeA];

  /**
   * Bitwise
   */

  const enum Categories {
    None = 0, // this is the default
    Music = 1,
    News = 2,
    Drama = 4,
    Comedy = 8
  }

  // Union
  const musicalComedy = Categories.Music | Categories.Comedy
  console.log(musicalComedy);

  // intersect
  const hasMusic = musicalComedy & Categories.Music; // return true
  const hasComedy = musicalComedy & Categories.Comedy; // return true
  const hasNews = musicalComedy & Categories.News; // return false
  const hasDrama = musicalComedy & Categories.Drama; // return false

  console.log(hasMusic);
  console.log(hasComedy);
  console.log(hasNews);
  console.log(hasDrama);

  /**
   * Increment enums
   */

  let size = Size.Small;
  ++size;
  ++size;
  ++size;
  console.log(Size[size]);
}
