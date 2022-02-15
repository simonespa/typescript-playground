// enums

{
  // Enums are extensible
  enum BoxSize {
    Small, // implicitly this is index 0
    Medium
  }

  enum BoxSize {
    Large = 2
  }

  const boxType = BoxSize.Large;
  const boxTypeName = BoxSize[boxType];

  // bit flags

  const enum CategoryFlags {
    None = 0, // this is the default
    Music = 1,
    News = 2,
    Drama = 4,
    Comedy = 8
  }

  // Union
  const musicalComedy = CategoryFlags.Music | CategoryFlags.Comedy

  // intersect
  const hasMusic = musicalComedy & CategoryFlags.Music; // return true
  const hasNews = musicalComedy & CategoryFlags.News; // return false
  const hasDrama = musicalComedy & CategoryFlags.Drama; // return false

  console.log(hasNews);

  // Increment and decrement
  let size = BoxSize.Small;
  ++size;
  ++size;
  ++size;
  console.log(BoxSize[size]);
}
